import { useRouter } from 'next/router';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import { TbCurrencyReal } from 'react-icons/tb';
import styles from './styles.module.scss';
import { Button } from '../Button';

interface CarListCardProps {
  carId: number;
  imagePath: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  isFavorite?: boolean;
  clickFavoriteIcon: (carId: number) => void
}

export function CarListCard({ carId, imagePath, brand, model, year, price, isFavorite, clickFavoriteIcon }: CarListCardProps) {
  const router = useRouter()

  return (
    <div className={styles.cardContainer}>
      <img className={styles.carImage} src={imagePath} alt={brand} />
      <div className={styles.carDetailsContainer}>
        <p className={styles.carName}>{brand} {model}</p>
        <div className={styles.carInfo}>
          <FiCalendar />
          <p>{year}</p>
        </div>
        <div className={styles.carInfo}>
          <TbCurrencyReal />
          <p>{price}</p>
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => router.push(`/car-details/${carId}`)}>
            Ver detalhes
          </Button>
          {
            isFavorite ? <AiFillStar className={styles.starIconActive} onClick={() => clickFavoriteIcon(carId)} /> : <AiOutlineStar className={styles.starIcon} onClick={() => clickFavoriteIcon(carId)} />
          }
        </div>
      </div>
    </div>
  )
}
