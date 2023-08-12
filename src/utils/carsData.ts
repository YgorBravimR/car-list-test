export interface ICarType {
  carId: number
  imagePath: string
  brand: string
  model: string
  year: number
  price: string
  isFavorite: boolean
}

export const CARS_MOCK_DATA: ICarType[] = [
  {
    carId: 1,
    imagePath: 'assets/audi.jpeg',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: `120.000`,
    isFavorite: true,
  },
  {
    carId: 2,
    imagePath: 'assets/civic.jpg',
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    price: `125.000`,
    isFavorite: false,
  },
  {
    carId: 3,
    imagePath: 'assets/mustang.jpg',
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: `150.000`,
    isFavorite: false,
  },
  {
    carId: 4,
    imagePath: 'assets/camaro.jpg',
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2022,
    price: `145.000`,
    isFavorite: true,
  },
  {
    carId: 5,
    imagePath: 'assets/nissangtr.jpeg',
    brand: 'Nissan',
    model: 'GT-R',
    year: 2023,
    price: `180.000`,
    isFavorite: false,
  },
  {
    carId: 6,
    imagePath: 'assets/bmwm5.jpeg',
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    price: `160.000`,
    isFavorite: false,
  },
  {
    carId: 7,
    imagePath: 'assets/mercedes.jpeg',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    price: `155.000`,
    isFavorite: false,
  },
  {
    carId: 8,
    imagePath: 'assets/audi.jpeg',
    brand: 'Audi',
    model: 'A4',
    year: 2022,
    price: `140.000`,
    isFavorite: false,
  },
  {
    carId: 9,
    imagePath: 'assets/fusion.jpeg',
    brand: 'Ford',
    model: 'Fusion',
    year: 2022,
    price: `127.000`,
    isFavorite: false,
  },
  {
    carId: 10,
    imagePath: 'assets/x6.jpg',
    brand: 'BMW',
    model: 'X6',
    year: 2021,
    price: `600.000`,
    isFavorite: false,
  },
]
