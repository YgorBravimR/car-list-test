import { ICarType } from '@/models/car';
import { Feature } from '../Feature';
import styles from './styles.module.scss';

interface CarListCardProps {
  car: ICarType
}

export function CarFeatures({ car }: CarListCardProps) {
  return (
    <div className={styles.container}>
      {car.details.map((detail) =>
        <Feature detail={detail}></Feature>)
      }
    </div>
  )
}
