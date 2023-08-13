import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FiCalendar } from 'react-icons/fi'
import { TbCurrencyReal } from 'react-icons/tb'
import styles from './styles.module.scss'
import Button from '../Button';
import Image from 'next/image';

interface CarListCardProps {
  carId: number;
  imagePath: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  isFavorite?: boolean;
}

export function CarListCard({ carId, imagePath, brand, model, year, price, isFavorite }: CarListCardProps) {
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
          <Button >
            Ver mais
          </Button>
          {
            isFavorite ? <AiFillStar className={styles.starIconActive} /> : <AiOutlineStar className={styles.starIcon} />
          }
        </div>
      </div>
    </div>
  )
}
