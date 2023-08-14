import { FavoriteCarCard } from "@/components/FavoriteCarCard";
import { useFavorites } from "@/hooks/favorites";
import { CARS_MOCK_DATA } from "@/utils/carsData";
import { BsCarFrontFill } from "react-icons/bs";
import styles from "./styles.module.scss";

export default function Favorites() {
  const { favoriteCarsIds } = useFavorites();
  const favoritesToShow = CARS_MOCK_DATA.filter((car) => favoriteCarsIds.includes(car.carId));
  const hasCarsToShow = favoritesToShow.length > 0;

  return (
    <main className={!hasCarsToShow ? styles.noFavoritesFeedbackContainer : styles.carCardsContainer}>
      {!hasCarsToShow
        ?
        <>
          <BsCarFrontFill />
          <p>Você ainda não possui nenhum carro favorito, dê uma estrela ao seus favoritos e a lista aparecerá aqui.</p>
        </>
        :
        favoritesToShow.map((car) =>
          <FavoriteCarCard
            key={car.carId}
            carId={car.carId}
            brand={car.brand}
            model={car.model}
            year={car.year}
            price={car.price}
            imagePath={car.imagePath}
          />
        )
      }
    </main>
  )
}
