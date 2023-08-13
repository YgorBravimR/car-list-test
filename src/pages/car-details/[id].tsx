import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { CARS_MOCK_DATA } from "@/utils/carsData";
import { CarFeatures } from '@/components/CarFeatures';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useFavorites } from '@/hooks/favorites';

export default function CarDetails() {
  const { favoriteCarsIds, updateFavoriteCars } = useFavorites();
  const router = useRouter();
  const carDetail = CARS_MOCK_DATA.find(car => Number(car.carId) === Number(router.query.id));
  const isFavorite = carDetail && favoriteCarsIds.includes(carDetail.carId);

  return (
    <div className={styles.container}>
      {carDetail && (
        <>
          {
            isFavorite ? <AiFillStar className={styles.starIconActive} onClick={() => updateFavoriteCars(carDetail.carId)} /> : <AiOutlineStar className={styles.starIcon} onClick={() => updateFavoriteCars(carDetail.carId)} />
          }
          <p>
            {carDetail.brand} {carDetail.model} {carDetail.year}
          </p>
          <img
            src={carDetail.imagePath}
            alt={carDetail.brand}
            width={500}
            height={500}
          />
          <CarFeatures car={carDetail} />
        </>
      )}
    </div>
  )
}
