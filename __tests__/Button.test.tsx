import { Button } from '@/components/Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button Component', () => {
  it('renders button with correct text', () => {
    const buttonText = 'Click Me';
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('triggers click event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies additional attributes to the button', () => {
    const dataTestId = 'test-button';
    render(<Button data-testid={dataTestId}>Click Me</Button>);
    const buttonElement = screen.getByTestId(dataTestId);
    expect(buttonElement).toBeInTheDocument();
  });
});
