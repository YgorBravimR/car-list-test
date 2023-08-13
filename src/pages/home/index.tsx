import { CarListCard } from "@/components/CarListCard";
import { CARS_MOCK_DATA } from "@/utils/carsData";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useFavorites } from "@/hooks/favorites";

export default function Home() {
  const { favoriteCarsIds, updateFavoriteCars } = useFavorites();

  function isFavorite(carId: number) {
    return favoriteCarsIds.includes(carId);
  }

  return (
    <main className={styles.carCardsContainer}>
      {
        CARS_MOCK_DATA.map((car) =>
          <CarListCard key={car.carId} carId={car.carId} brand={car.brand} model={car.model} year={car.year} price={car.price} imagePath={car.imagePath} clickFavoriteIcon={() => updateFavoriteCars(car.carId)} isFavorite={isFavorite(car.carId)} />)
      }
    </main>
  )
}
