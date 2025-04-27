import TabbedLayout from '../components/TabbedLayout';
import Carousel from '../components/Carousel';
import Image from 'next/image';

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

  // Filter upcoming events based on start_date and end_date
  const filteredUpcomingEvents = upcomingEvents.filter((event) => {
    if (event.start_date && event.end_date) {
      return today >= event.start_date && today <= event.end_date;
    }
    return true; // Show events without date restrictions
  });

  const tabs = [
    {
      label: 'Upcoming Events',
      content: (
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUpcomingEvents.map((event, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <div className="flex justify-center mb-4">
                  <Image src={event.image} alt={event.description} width={500} height={300} />
                </div>
                <p className="mb-4 text-md font-bold text-center">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      ),
    },
    {
      label: 'Past Events',
      content: (
        <section>
          <p className="mb-8">Check out our past events and see what you missed!</p>
          <Carousel items={pastEvents} />
        </section>
      ),
    },
  ];

  return (
    <main className="p-8">
      <TabbedLayout tabs={tabs} />
    </main>
  );
}
