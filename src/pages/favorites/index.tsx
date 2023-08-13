import { CarListCard } from "@/components/CarListCard";
import { CARS_MOCK_DATA } from "@/utils/carsData";
import styles from "./styles.module.scss";
import { FavoriteCarCard } from "@/components/FavoriteCarCard";

export default function Favorites() {
  const toShow = CARS_MOCK_DATA.filter((car) => car.isFavorite);
  return (
    <main className={styles.carCardsContainer}>
      {
        toShow.map((car) =>
          <FavoriteCarCard key={car.carId} carId={car.carId} brand={car.brand} model={car.model} year={car.year} price={car.price} imagePath={car.imagePath} isFavorite={car.isFavorite} />)
      }
    </main>
  )
}
