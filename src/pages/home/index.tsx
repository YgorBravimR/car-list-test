import { CarListCard } from "@/components/CarListCard";
import { useFavorites } from "@/hooks/favorites";
import { CARS_MOCK_DATA } from "@/utils/carsData";
import { useState } from "react";
import { LuFilter, LuFilterX } from 'react-icons/lu';
import styles from "./styles.module.scss";

export default function Home() {
  const { favoriteCarsIds, updateFavoriteCars } = useFavorites();
  const [year, setYear] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [filteredCars, setFilteredCars] = useState(CARS_MOCK_DATA);

  function isFavorite(carId: number) {
    return favoriteCarsIds.includes(carId);
  }

  function handleFilter() {
    const filteredCars = CARS_MOCK_DATA.filter((car) => {
      return (
        (year === '' || car.year.toString() === year) &&
        (model === '' || car.model.toLowerCase().includes(model.toLowerCase())) &&
        (brand === '' || car.brand.toLowerCase().includes(brand.toLowerCase()))
      );
    });
    setFilteredCars(filteredCars);
  }

  function handleClearFilters() {
    setFilteredCars(CARS_MOCK_DATA)
    setYear('');
    setModel('');
    setBrand('');
  }

  return (
    <main className={styles.container}>
      <section className={styles.filterSection}>
        <div className={styles.filterInputsContainer}	>
          <label>
            <span>
              Ano
            </span>
            <input
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label>
            <span>
              Modelo
            </span>
            <input
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
          <label>
            <span>
              Marca
            </span>
            <input
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.filterButtonsContainer}>
          <LuFilter onClick={() => handleFilter()} />
          <LuFilterX onClick={() => handleClearFilters()} />
        </div>
      </section>
      <div className={styles.carCardsContainer}>
        {
          filteredCars.map((car) =>
            <CarListCard key={car.carId} carId={car.carId} brand={car.brand} model={car.model} year={car.year} price={car.price} imagePath={car.imagePath} clickFavoriteIcon={() => updateFavoriteCars(car.carId)} isFavorite={isFavorite(car.carId)} />)
        }
      </div>
    </main>
  )
}
