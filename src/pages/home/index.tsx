import { CarListCard } from "@/components/CarListCard";
import { CARS_MOCK_DATA } from "@/utils/carsData";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.carCardsContainer}>
      {CARS_MOCK_DATA.map((car) =>
        <CarListCard key={car.carId} carId={car.carId} brand={car.brand} model={car.model} year={car.year} price={car.price} imagePath={car.imagePath} isFavorite={car.isFavorite} />)
      }
    </main>
  )
}
