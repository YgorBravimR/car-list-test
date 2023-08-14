import { useFavorites } from '@/hooks/favorites';
import { FiCalendar } from 'react-icons/fi';
import { TbCurrencyReal } from 'react-icons/tb';
import styles from "./styles.module.scss";

interface FavoriteCardProps {
  carId: number;
  imagePath: string;
  brand: string;
  model: string;
  year: number;
  price: number;
}

export function FavoriteCarCard({ carId, imagePath, brand, model, year, price }: FavoriteCardProps) {
  const { updateFavoriteCars } = useFavorites();

  return (
    <div className={styles.favoriteCardContainer}>
      <img className={styles.carImage} src={imagePath} alt="" />
      <div className={styles.cardDetailsContainer}>
        <p className={styles.carName}>{brand} {model}</p>
        <div>
          <div className={styles.carInfo}>
            <FiCalendar />
            <p>{year}</p>
          </div>
          <div className={styles.carInfo}>
            <TbCurrencyReal />
            <p>{price}</p>
          </div>
        </div>
        <button className={styles.removeFavoritesButton} onClick={() => updateFavoriteCars(carId)}>
          Remover favorito
        </button>
      </div>
    </div>
  )
}
