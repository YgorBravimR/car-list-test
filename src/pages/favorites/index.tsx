import { CARS_MOCK_DATA } from "@/utils/carsData";
import styles from "./styles.module.scss";
import { FavoriteCarCard } from "@/components/FavoriteCarCard";
import { useFavorites } from "@/hooks/favorites";

export default function Favorites() {
  const { favoriteCarsIds } = useFavorites();
  const favoritesToShow = CARS_MOCK_DATA.filter((car) => favoriteCarsIds.includes(car.carId));

  return (
    <main className={styles.carCardsContainer}>
      {
        favoritesToShow.map((car) =>
          <FavoriteCarCard key={car.carId} carId={car.carId} brand={car.brand} model={car.model} year={car.year} price={car.price} imagePath={car.imagePath} />)
      }
    </main>
  )
}
