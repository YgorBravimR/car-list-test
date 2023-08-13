import { useRouter } from "next/router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';


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
  const [isLoading, setIsLoading] = useState(true);

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

      setIsLoading(false);
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
    setData({ login: "" });
    router.push('/');
  }, []);

  if (isLoading) {
    return <></>;
  }

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

export { AuthProvider, useAuth };
