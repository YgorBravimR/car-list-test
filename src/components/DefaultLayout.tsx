import Head from 'next/head'
import { Header } from './Header'
import { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps): ReactNode {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
