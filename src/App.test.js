import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Dr. Blake Head/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const aboutLink = screen.getByRole('link', { name: /About/i });
  const skillsLink = screen.getByRole('link', { name: /Skills/i });
  const coursesLink = screen.getByRole('link', { name: /Courses/i });
  const researchLink = screen.getByRole('link', { name: /Research/i });
  
  expect(aboutLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(coursesLink).toBeInTheDocument();
  expect(researchLink).toBeInTheDocument();
});

test('renders main sections', () => {
  render(<App />);
  const aboutHeading = screen.getByRole('heading', { name: /About Me/i });
  const skillsHeading = screen.getByRole('heading', { name: /Skills/i, level: 2 });
  const coursesHeading = screen.getByRole('heading', { name: /Courses/i, level: 2 });
  const researchHeading = screen.getByRole('heading', { name: /Research Interests/i });
  
  expect(aboutHeading).toBeInTheDocument();
  expect(skillsHeading).toBeInTheDocument();
  expect(coursesHeading).toBeInTheDocument();
  expect(researchHeading).toBeInTheDocument();
});
