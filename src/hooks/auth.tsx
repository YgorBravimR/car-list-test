import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useRouter } from "next/router";

import { User } from '../models/user';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthState {
  login: string;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  login: string;
  signIn(credentials: SignInCredentials): Promise<string>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => ({} as AuthState));

  const router = useRouter()

  useEffect(() => {
    const checkAuthentication = (): void => {
      const login = localStorage.getItem('@ListCar:login');

      if (login) {
        setData({ login });

        if (router.pathname === '/') {
          router.push('/home');
        }

      } else {
        router.push('/');
      }
    };

    checkAuthentication();
  }, []);

  const signIn = useCallback(
    async ({ login, password }: SignInCredentials): Promise<string> => {

      localStorage.setItem('@ListCar:login', login);

      setData({ login });

      return login;
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@ListCar:login');
    router.push('/');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login: data.login,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
