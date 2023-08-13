import { ICarType } from '@/models/car';

export const CARS_MOCK_DATA: ICarType[] = [
  {
    carId: 1,
    imagePath: '/images/corolla.jpg',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 120000,
    isFavorite: true,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '1.8L Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Silver',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 15000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Black',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 15,
      },
    ],
  },
  {
    carId: 2,
    imagePath: '/images/civic.jpg',
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 135000,
    isFavorite: false,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '1.5L Turbocharged Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'CVT',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Blue',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 20000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Beige',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 18,
      },
    ],
  },
  {
    carId: 3,
    imagePath: '/images/bmwm5.jpeg',
    brand: 'Ford',
    model: 'Focus',
    year: 2022,
    price: 110000,
    isFavorite: true,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '2.0L Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Red',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 18000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Black',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 14,
      },
    ],
  },
  {
    carId: 4,
    imagePath: '/images/audi.jpeg',
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    price: 175000,
    isFavorite: true,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '2.0L Turbocharged Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Black',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 10000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Red',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 12,
      },
    ],
  },
  {
    carId: 5,
    imagePath: '/images/camaro.jpg',
    brand: 'Nissan',
    model: 'Altima',
    year: 2022,
    price: 125000,
    isFavorite: false,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '2.5L Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'CVT',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Gray',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 22000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Black',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 16,
      },
    ],
  },
  {
    carId: 6,
    imagePath: '/images/fusion.jpeg',
    brand: 'BMW',
    model: '3 Series',
    year: 2023,
    price: 195000,
    isFavorite: true,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '2.0L Turbocharged Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'White',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 8000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Tan',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 13,
      },
    ],
  },
  {
    carId: 7,
    imagePath: '/images/mercedes.jpeg',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2022,
    price: 115000,
    isFavorite: true,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '1.4L Turbocharged Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Silver',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 12000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Black',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 17,
      },
    ],
  },
  {
    carId: 8,
    imagePath: '/images/mustang.jpg',
    brand: 'Mazda',
    model: '6',
    year: 2023,
    price: 142000,
    isFavorite: false,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '2.5L Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Red',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 17000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Beige',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 14,
      },
    ],
  },
  {
    carId: 9,
    imagePath: '/images/nissangtr.jpeg',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 185000,
    isFavorite: false,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '2.0L Turbocharged Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Black',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 13000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Black',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 12,
      },
    ],
  },
  {
    carId: 10,
    imagePath: '/images/x6.jpg',
    brand: 'Chevrolet',
    model: 'Cruze',
    year: 2023,
    price: 128000,
    isFavorite: true,
    details: [
      {
        label: 'Fuel Type',
        icon: 'fuel',
        value: 'Gasoline',
      },
      {
        label: 'Engine',
        icon: 'engine',
        value: '1.4L Turbocharged Inline-4',
      },
      {
        label: 'Transmission',
        icon: 'transmission',
        value: 'Automatic',
      },
      {
        label: 'Color',
        icon: 'paint',
        value: 'Gray',
      },
      {
        label: 'Mileage',
        icon: 'mileage',
        value: 14000,
      },
      {
        label: 'Interior Color',
        icon: 'color-palette',
        value: 'Black',
      },
      {
        label: 'Kilometers Per Liter',
        icon: 'efficiency',
        value: 16,
      },
    ],
  },
];
