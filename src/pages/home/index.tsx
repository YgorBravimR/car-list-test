import { CarListCard } from "@/components/CarListCard";
import { CARS_MOCK_DATA } from "@/utils/carsData";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export default function Home() {
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

  function isFavorite(carId: number) {
    return favoriteCarsIds.includes(carId);
  }

  function handleClickFavoriteIcon(carId: number) {
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
    <main className={styles.carCardsContainer}>
      {
        CARS_MOCK_DATA.map((car) =>
          <CarListCard key={car.carId} carId={car.carId} brand={car.brand} model={car.model} year={car.year} price={car.price} imagePath={car.imagePath} clickFavoriteIcon={() => handleClickFavoriteIcon(car.carId)} isFavorite={isFavorite(car.carId)} />)
      }
    </main>
  )
}
