import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { CARS_MOCK_DATA } from "@/utils/carsData";
import { CarFeatures } from '@/components/CarFeatures';


export default function CarDetails() {
  const router = useRouter();
  const carDetail = CARS_MOCK_DATA.find(car => Number(car.carId) === Number(router.query.id));

  return (
    <div className={styles.container}>
      {carDetail && (
        <>
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
