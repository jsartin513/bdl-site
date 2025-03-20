import TabbedLayout from '../components/TabbedLayout';
import Carousel from '../components/Carousel';
import Image from 'next/image';

export default function Events() {
  const upcomingEvents = [
    { description: 'Weekly open gyms on Sunday nights from 6pm-9pm', image: '/images/march_open_gym_flyer.jpg' },
    { description: 'First league on Wednesday nights from 7-9:30pm between April 16 and May 21', image: '/images/league_flyer.jpg', signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1EKlzHAb59oONb7bmF86pOOdRDF3Yc26pWDgWdDU-H2CONw/viewform?usp=sharing"},
    { description: 'The Throw Down 4 (Nickelodeon Edition) on July 12, 2025', image: '/images/throw_down_4_flyer.jpg'},
  ];

  const pastEvents = [
    { description: 'Inaugural Throw Down on August 17, 2024 Winners: Honey Packs', image: '/images/honey_packs.png' },
    { description: 'The Throw Down 2 on November 2, 2024 Winners: Pink Pony Dodgeball Club', image: '/images/pink_pony.png' },
    { description: 'The Throw Down 3 (Cartoon Network Edition) on February 22, 2025 Winners: Dodge This, Mama', image: '/images/dodge_this_mama.png' },
  ];

  const tabs = [
    {
      label: 'Upcoming Events',
      content: (
        <section className="mb-8">
          <p className="mb-8">Check out our upcoming events and join us for some dodgeball fun!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <div className="flex justify-center mb-4">
                  <Image src={event.image} alt={event.description} width={500} height={300} />
                </div>
                <p className='mb-4 text-md font-bold text-center'>{event.description}</p>
                {event.signUpLink &&
                  <p className='mb-4 text-md font-bold text-center'><a href={event.signUpLink} className="text-blue-500 hover:underline text-center">Sign up</a></p>
                }
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
