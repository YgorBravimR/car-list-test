import { ICarType } from '@/models/car';

export const CARS_MOCK_DATA: ICarType[] = [
  {
    carId: 1,
    imagePath: '/images/corolla.jpg',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 120000,
    description:
      'O Toyota Corolla é um carro compacto popular conhecido por sua confiabilidade, eficiência de combustível e passeio confortável. Com um motor 1.8L Inline-4 e transmissão automática, oferece uma experiência de condução suave. Este Corolla prateado tem uma quilometragem de 15.000 e um interior preto elegante.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '1.8L Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Prata',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 15000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Preto',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 15,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 120000,
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
    description:
      'O Honda Civic é um sedan versátil e prático conhecido por sua eficiência de combustível e confiabilidade. Alimentado por um motor 1.5L Turbocharged Inline-4 e equipado com uma transmissão CVT, este Civic azul oferece uma experiência de condução confortável e eficiente. Possui um interior bege e uma quilometragem de 20.000.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '1.5L Turbocharged Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'CVT',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Azul',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 20000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Bege',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 18,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 135000,
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
    description:
      'O Ford Focus é um carro compacto que oferece uma experiência de condução esportiva e ágil. Com seu motor 2.0L Inline-4 e transmissão automática, oferece um desempenho responsivo. Este Focus vermelho apresenta um interior preto, e sua quilometragem é de 18.000.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '2.0L Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Vermelho',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 18000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Preto',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 14,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 110000,
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
    description:
      'O Audi A3 é um sedan de luxo conhecido por seu design elegante e recursos avançados. É alimentado por um motor 2.0L Turbocharged Inline-4 e equipado com uma transmissão automática. Este A3 preto possui um interior vermelho e possui uma quilometragem baixa de 10.000.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '2.0L Turbocharged Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Preto',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 10000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Vermelho',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 12,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 175000,
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
    description:
      'O Nissan Altima é um sedan de porte médio que combina estilo e desempenho. É equipado com um motor 2.5L Inline-4 e uma transmissão CVT para uma condução suave e eficiente. Este Altima cinza tem uma quilometragem de 22.000 e apresenta um interior preto.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '2.5L Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'CVT',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Cinza',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 22000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Preto',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 16,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 125000,
      },
    ],
  },
  {
    carId: 6,
    imagePath: '/images/fusion.jpeg',
    brand: 'BMW',
    model: 'Série 3',
    year: 2023,
    price: 195000,
    description:
      'A BMW Série 3 é um carro compacto de luxo que oferece uma combinação perfeita de desempenho e conforto. Alimentado por um motor 2.0L Turbocharged Inline-4 e equipado com uma transmissão automática, este Série 3 branco oferece uma experiência de condução premium. Possui um interior bege e uma quilometragem de 8.000.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '2.0L Turbocharged Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Branco',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 8000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Bege',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 13,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 195000,
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
    description:
      'O Volkswagen Golf é um hatchback versátil conhecido por sua praticidade e natureza divertida de dirigir. Com um motor 1.4L Turbocharged Inline-4 e transmissão automática, oferece um desempenho responsivo e eficiente. Este Golf prateado tem uma quilometragem de 12.000 e apresenta um interior preto.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '1.4L Turbocharged Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Prata',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 12000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Preto',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 17,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 115000,
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
    description:
      'O Mazda 6 é um sedan elegante e esportivo de porte médio que oferece um equilíbrio entre desempenho e conforto. Alimentado por um motor 2.5L Inline-4 e equipado com uma transmissão automática, proporciona uma experiência de condução envolvente. Este Mazda 6 vermelho possui uma quilometragem de 17.000 e apresenta um interior bege.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '2.5L Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Vermelho',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 17000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Bege',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 14,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 142000,
      },
    ],
  },
  {
    carId: 9,
    imagePath: '/images/nissangtr.jpeg',
    brand: 'Mercedes-Benz',
    model: 'Classe C',
    year: 2022,
    price: 185000,
    description:
      'O Mercedes-Benz Classe C é um sedan de luxo que oferece uma combinação de elegância e desempenho. Alimentado por um motor 2.0L Turbocharged Inline-4 e equipado com uma transmissão automática, proporciona uma experiência de condução refinada. Este Classe C preto possui uma quilometragem de 13.000 e apresenta um interior preto.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '2.0L Turbocharged Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Preto',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 13000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Preto',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 12,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 185000,
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
    description:
      'O Chevrolet Cruze é um sedan compacto que oferece uma condução confortável e eficiente. Com um motor 1.4L Turbocharged Inline-4 e transmissão automática, é ideal para o uso diário. Este Cruze cinza tem uma quilometragem de 14.000 e apresenta um interior preto.',
    details: [
      {
        label: 'Combustível',
        icon: 'fuel',
        value: 'Gasolina',
      },
      {
        label: 'Motor',
        icon: 'engine',
        value: '1.4L Turbocharged Inline-4',
      },
      {
        label: 'Transmissão',
        icon: 'transmission',
        value: 'Automática',
      },
      {
        label: 'Cor',
        icon: 'paint',
        value: 'Cinza',
      },
      {
        label: 'Quilometragem',
        icon: 'mileage',
        value: 14000,
      },
      {
        label: 'Interior',
        icon: 'color-palette',
        value: 'Preto',
      },
      {
        label: 'KM/L',
        icon: 'efficiency',
        value: 16,
      },
      {
        label: 'Preço',
        icon: 'real',
        value: 128000,
      },
    ],
  },
];
