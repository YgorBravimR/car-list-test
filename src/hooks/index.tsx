import React from 'react';
import { AuthProvider } from './auth';
import { FavoritesProvider } from './favorites';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  </AuthProvider>
);

export default AppProvider;
