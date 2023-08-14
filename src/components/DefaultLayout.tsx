import { ReactNode } from 'react';
import { Header } from './Header';

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
