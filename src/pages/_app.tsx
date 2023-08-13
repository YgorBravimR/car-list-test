import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import AppProvider from '@/hooks'
import DefaultLayout from '@/components/DefaultLayout';
import { useRouter } from 'next/router';

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
