import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface FavoritesContextData {
  favoriteCarsIds: number[];
  setFavoriteCarsIds: React.Dispatch<React.SetStateAction<number[]>>;
  updateFavoriteCars: (carId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

const FavoritesProvider = ({ children }: AuthProviderProps) => {
  const [favoriteCarsIds, setFavoriteCarsIds] = useState<number[]>([]);

  useEffect(() => {
    const favoriteCarsIds = getLocalStorageFavorites();
    setFavoriteCarsIds(favoriteCarsIds);
  }, []);

  function getLocalStorageFavorites() {
    const favoriteCars = localStorage.getItem('@car-list:favorite-cars');
    if (favoriteCars) {
      const final = JSON.parse(favoriteCars)
      return final;
    }
    return [];
  }

  function updateFavoriteCars(carId: number) {
    if (favoriteCarsIds.includes(carId)) {
      const updatedData = favoriteCarsIds.filter(existingItem => existingItem !== carId);
      setFavoriteCarsIds(updatedData);
      localStorage.setItem('@car-list:favorite-cars', JSON.stringify(updatedData));
    } else {
      const updatedData = [...favoriteCarsIds, carId];
      setFavoriteCarsIds(updatedData);
      localStorage.setItem('@car-list:favorite-cars', JSON.stringify(updatedData));
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteCarsIds,
        setFavoriteCarsIds,
        updateFavoriteCars
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }

  return context;
}

export { FavoritesProvider, useFavorites };

