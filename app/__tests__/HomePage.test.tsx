import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders the main title', () => {
    render(<HomePage />);
    expect(screen.getByText(/Static Code Analysis Demo/i)).toBeInTheDocument();
  });

  it('renders KPI feature list', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/ESLint, Prettier, and Stylelint enforcement/i)
    ).toBeInTheDocument();
  });
});
