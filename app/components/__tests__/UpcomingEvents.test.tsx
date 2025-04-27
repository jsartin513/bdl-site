import { render, screen } from '@testing-library/react';
import UpcomingEvents from '../UpcomingEvents';

describe('UpcomingEvents Component', () => {
  const mockEvents = [
    {
      description: 'Event 1',
      image: '/images/event1.jpg',
      start_date: new Date('2025-04-01'),
      end_date: new Date('2025-04-30'),
    },
    {
      description: 'Event 2 (Too far in the future)',
      image: '/images/event2.jpg',
      start_date: new Date('2025-05-01'),
      end_date: new Date('2025-05-31'),
    },
    {
      description: 'Event 3 (Past)',
      image: '/images/event3.jpg',
      start_date: new Date('2025-03-01'),
      end_date: new Date('2025-03-31'),
    },
  ];

  beforeAll(() => {
    // Mock the current date to ensure consistent test results
    jest.useFakeTimers().setSystemTime(new Date('2025-04-15'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders only upcoming events within the date range', () => {
    render(<UpcomingEvents events={mockEvents} />);

    // Ensure only events within the current date range are rendered
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.queryByText('Event 2 (Too far in the future)')).not.toBeInTheDocument();
    expect(screen.queryByText('Event 3 (Past)')).not.toBeInTheDocument();
  });

  it('renders the correct number of filtered events', () => {
    render(<UpcomingEvents events={mockEvents} />);

    // Ensure the correct number of events are rendered
    const eventElements = screen.getAllByRole('img');
    expect(eventElements).toHaveLength(1); // Only Event 1 should be rendered
  });

  it('displays event descriptions and images correctly', () => {
    render(<UpcomingEvents events={mockEvents} />);

    // Check that event descriptions are displayed
    expect(screen.getByText('Event 1')).toBeInTheDocument();

    // Check that event images are displayed
    expect(screen.getByAltText('Event 1')).toBeInTheDocument();

    // Ensure Event 2 and Event 3 are not displayed
    expect(screen.queryByText('Event 2 (Too far in the future)')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Event 2 (Too far in the future)')).not.toBeInTheDocument();
    expect(screen.queryByText('Event 3 (Past)')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Event 3 (Past)')).not.toBeInTheDocument();
  });
});