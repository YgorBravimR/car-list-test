import Head from 'next/head'
import { Header } from './Header'
import { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps): ReactNode {
  return (
    <div>
      <Head>
        <title>My App</title>
        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>
      <Header />
      {children}
    </div>
  )
}
