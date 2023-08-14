import { ICarType } from '@/models/car';
import { Feature } from '../Feature';
import styles from './styles.module.scss';

interface CarListCardProps {
  car: ICarType
}

export function CarFeatures({ car }: CarListCardProps) {
  return (
    <div className={styles.container}	>
      <p>
        {car.description}
      </p>
      <div className={styles.detailsCardContainer}>
        {
          car.details.map((detail, index) =>
            <Feature detail={detail} key={index} />
          )
        }
      </div>
    </div >
  )
}
