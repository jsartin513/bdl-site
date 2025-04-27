import TabbedLayout from '../components/TabbedLayout';
import UpcomingEvents from '../components/UpcomingEvents';
import PastEvents from '../components/PastEvents';

export default function Events() {
  const today = new Date();

  const upcomingEvents = [
    {
      description: 'Weekly open gyms on Sunday nights from 6pm-9pm (April)',
      image: '/images/april_open_gym_flyer.jpg',
      start_date: new Date('2025-04-01'),
      end_date: new Date('2025-04-28'),
    },
    {
      description: 'Weekly open gyms on Sunday nights from 6pm-9pm (May)',
      image: '/images/may_open_gym_flyer.jpg',
      start_date: new Date('2025-04-28'),
      end_date: new Date('2025-05-31'),
    },
    {
      description: 'First league on Wednesday nights from 7-9:30pm between April 16 and May 21',
      image: '/images/league_flyer.jpg',
      start_date: new Date('2025-04-16'),
      end_date: new Date('2025-05-21'),
    },
    {
      description: 'The Throw Down 4 (Nickelodeon Edition) on July 13, 2025',
      image: '/images/throw_down_4_flyer.jpg',
      start_date: new Date('2025-04-01'),
      end_date: new Date('2025-07-13'),
    },
  ];

  const pastEvents = [
    { description: 'Inaugural Throw Down on August 17, 2024 Winners: Honey Packs', image: '/images/honey_packs.jpeg' },
    { description: 'The Throw Down 2 on November 2, 2024 Winners: Pink Pony Dodgeball Club', image: '/images/pink_pony.jpeg' },
    { description: 'The Throw Down 3 (Cartoon Network Edition) on February 22, 2025 Winners: Dodge This, Mama', image: '/images/dodge_this_mama.jpeg' },
  ];

  const filteredUpcomingEvents = upcomingEvents.filter((event) => {
    if (event.start_date && event.end_date) {
      return today >= event.start_date && today <= event.end_date;
    }
    return true;
  });

  const tabs = [
    {
      label: 'Upcoming Events',
      content: <UpcomingEvents events={filteredUpcomingEvents} />,
    },
    {
      label: 'Past Events',
      content: <PastEvents events={pastEvents} />,
    },
  ];

  return (
    <main className="p-8">
      <TabbedLayout tabs={tabs} />
    </main>
  );
}
