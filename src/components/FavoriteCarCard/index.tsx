import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FiCalendar } from 'react-icons/fi'
import { TbCurrencyReal } from 'react-icons/tb'
import styles from "./styles.module.scss";

interface FavoriteCardProps {
  carId: number;
  imagePath: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  isFavorite?: boolean;
}

export function FavoriteCarCard({ carId, imagePath, brand, model, year, price, isFavorite }: FavoriteCardProps) {
  return (
    <div className={styles.favoriteCardContainer}>
      <img className={styles.carImage} src={imagePath} alt="" />
      <div className={styles.cardDetailsContainer}>
        <p className={styles.carName}>{brand} {model}</p>
        <div className={styles.carInfo}>
          <FiCalendar />
          <p>{year}</p>
        </div>
        <div className={styles.carInfo}>
          <TbCurrencyReal />
          <p>{price}</p>
        </div>
        <button>
          Remover favoritos
        </button>
      </div>
    </div>
  )
}
