import { CarFeatures } from '@/components/CarFeatures';
import { useFavorites } from '@/hooks/favorites';
import { CARS_MOCK_DATA } from "@/utils/carsData";
import { useRouter } from 'next/router';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './styles.module.scss';

export default function CarDetails() {
  const { favoriteCarsIds, updateFavoriteCars } = useFavorites();
  const router = useRouter();
  const carDetail = CARS_MOCK_DATA.find(car => Number(car.carId) === Number(router.query.id));
  const isFavorite = carDetail && favoriteCarsIds.includes(carDetail.carId);

  return (
    <div className={styles.container}>
      {carDetail && (
        <>
          <p>
            {carDetail.brand} {carDetail.model} {carDetail.year}
          </p>
          <div className={styles.imageContainer}>
            <img
              src={carDetail.imagePath}
              alt={carDetail.brand}
              width={500}
              height={500}
            />
            {
              isFavorite ? <AiFillStar className={styles.starIconActive} onClick={() => updateFavoriteCars(carDetail.carId)} /> : <AiOutlineStar className={styles.starIcon} onClick={() => updateFavoriteCars(carDetail.carId)} />
            }
          </div>
          <CarFeatures car={carDetail} />
        </>
      )}
    </div>
  )
}
