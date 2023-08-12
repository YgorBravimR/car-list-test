import styles from './home.module.scss'
import { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaSpinner } from 'react-icons/fa';

import { useAuth } from '../hooks/auth';

import Input from '../components/Input';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import getValidationErrors from '@/utils/getValidationErrors';

interface SignInFormData {
  login: string;
  password: string;
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          login: Yup.string()
            .required('Login obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const login = await signIn({
          login: data.login,
          password: data.password,
        });

        if (!login) {
          alert('Erro na autenticação');
          setLoading(false);

          return;
        }
        router.push('/home');
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        alert('Ocorreu um erro ao fazer login, cheque as credenciais.');
      }
    },
    [signIn, router, setLoading],
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input name="login" placeholder="Login" />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">
            {loading ? <FaSpinner color="#fff" size={20} /> : 'Acessar'}
          </Button>
        </Form>
      </div>
    </div>
  );
}
