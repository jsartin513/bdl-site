// import TabbedLayout from '../components/TabbedLayout';
// import UpcomingEvents from '../components/UpcomingEvents';
import PastEvents from '../components/PastEvents';

export default function Events() {
  // Keep upcoming events framework for future use
  // const upcomingEvents = [
  //   {
  //     description: 'Weekly open gyms on Sunday nights from 6pm-9pm. Note that we will NOT have open gym in July 2025.',
  //     image: '/images/june_open_gym_flyer.png',
  //     start_date: new Date('2025-04-28'),
  //     end_date: new Date('2025-06-30'),
  //     link: '/events/opengym',
  //   },
  //   {
  //     description: 'Extended Summer league on Wednesday nights from 7-9:30pm between June 4 and July 23, 2025',
  //     image: '/images/byot_leagues.jpeg',
  //     start_date: new Date('2025-05-04'),
  //     end_date: new Date('2025-07-23'),
  //     link: '/league',
  //   },
  //   {
  //     description: 'The Throw Down 4 (Nickelodeon Edition) on July 13, 2025',
  //     image: '/images/throw_down_4_flyer.jpg',
  //     start_date: new Date('2025-04-01'),
  //     end_date: new Date('2025-07-13'),
  //     link: '/events/throwdown',
  //   },
  // ];

  const pastEvents = [
    { description: 'The Throw Down 4 (Nickelodeon Edition) on July 13, 2025 Winners: Drake and Josh', image: '/images/drake_and_josh.jpeg' },
    { description: 'The Throw Down 3 (Cartoon Network Edition) on February 22, 2025 Winners: Dodge This, Mama', image: '/images/dodge_this_mama.jpeg' },
    { description: 'The Throw Down 2 on November 2, 2024 Winners: Pink Pony Dodgeball Club', image: '/images/pink_pony.jpeg' },
    { description: 'Inaugural Throw Down on August 17, 2024 Winners: Honey Packs', image: '/images/honey_packs.jpeg' },
  ];

  // Hide upcoming events for now - keeping framework for future use
  // const tabs = [
  //   {
  //     label: 'Upcoming Events',
  //     content: <UpcomingEvents events={upcomingEvents} />,
  //   },
  //   {
  //     label: 'Past Events',
  //     content: <PastEvents events={pastEvents} />,
  //   },
  // ];

  return (
    <main className="p-8">
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 font-medium">
          Open gyms are on a quick summer break. Check back later this summer for open gym information!
        </p>
      </div>
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-800 font-medium">
          Looking for current league information? Check out our{' '}
          <a href="/league/summer" className="text-green-600 hover:text-green-800 underline font-semibold">
            Summer League page
          </a>
          {' '}for details and standings!
        </p>
      </div>
      <PastEvents events={pastEvents} />
    </main>
  );
}
