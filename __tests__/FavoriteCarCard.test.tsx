import { FavoriteCarCard } from '@/components/FavoriteCarCard';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../src/hooks/favorites', () => ({
  useFavorites: () => ({
    updateFavoriteCars: jest.fn(),
  }),
}));

describe('FavoriteCarCard Component', () => {
  it('renders card details and triggers remove favorites', () => {
    const carId = 1;
    const imagePath = '/car-image.jpg';
    const brand = 'Toyota';
    const model = 'Corolla';
    const year = 2022;
    const price = 30000;

    render(
      <FavoriteCarCard
        carId={carId}
        imagePath={imagePath}
        brand={brand}
        model={model}
        year={year}
        price={price}
      />
    );

    expect(screen.getByText(`${brand} ${model}`)).toBeInTheDocument();
    expect(screen.getByText(year.toString())).toBeInTheDocument();
    expect(screen.getByText(price.toString())).toBeInTheDocument();

    const removeButton = screen.getByText('Remover favorito');
    fireEvent.click(removeButton);
  });
});
