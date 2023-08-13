import { LuFuel } from 'react-icons/lu';
import { PiEngine } from 'react-icons/pi';
import { TbManualGearbox } from 'react-icons/tb';
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
    'fuel': <LuFuel size={32}/>,
    'engine': <PiEngine size={32}/>,
    'transmission': <TbManualGearbox size={32}/>,
    'paint': <BiColorFill size={32}/>,
    'mileage': <GiCartwheel size={32}/>,
    'color-palette': <GiCarSeat size={32}/>,
    'efficiency': <GiThreeLeaves size={32}/>,
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