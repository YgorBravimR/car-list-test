interface ICarDetails {
  label: string;
  icon: string;
  value: string | number;
}

export interface ICarType {
  carId: number;
  imagePath: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
  details: ICarDetails[];
}
