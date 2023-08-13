import { LuFuel } from 'react-icons/lu';
import { PiEngine } from 'react-icons/pi';
import { TbCurrencyReal, TbManualGearbox } from 'react-icons/tb';
import { BiColorFill } from 'react-icons/bi';
import { GiCartwheel } from 'react-icons/gi';
import { GiCarSeat } from 'react-icons/gi';
import { GiThreeLeaves } from 'react-icons/gi';
import styles from './styles.module.scss';

interface CarListCardProps {
  detail: {
    label: string;
    icon: string;
    value: string | number;
  }
};

interface IconsProp {
  [key: string]: JSX.Element;
}

export function Feature({ detail }: CarListCardProps) {

  const icons: IconsProp = {
    'fuel': <LuFuel className={styles.featureDetailIcon} />,
    'engine': <PiEngine className={styles.featureDetailIcon} />,
    'transmission': <TbManualGearbox className={styles.featureDetailIcon} />,
    'paint': <BiColorFill className={styles.featureDetailIcon} />,
    'mileage': <GiCartwheel className={styles.featureDetailIcon} />,
    'color-palette': <GiCarSeat className={styles.featureDetailIcon} />,
    'efficiency': <GiThreeLeaves className={styles.featureDetailIcon} />,
    'real': <TbCurrencyReal className={styles.featureDetailIcon} />
  }

  return (
    <div className={styles.box}>
      {icons[detail.icon]}
      <div className={styles.information}>
        <strong>{detail.label}</strong>
        <span>{detail.value}</span>
      </div>
    </div>
  )
};
