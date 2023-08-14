import DefaultLayout from '@/components/DefaultLayout';
import AppProvider from '@/hooks';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AppProvider>
      {
        router.pathname === '/'
          ?
          <Component {...pageProps} />
          :
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
      }
    </AppProvider>
  )
}
