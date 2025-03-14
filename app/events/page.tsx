import TabbedLayout from '../components/TabbedLayout';

export default function Events() {
  const tabs = [
    {
      label: 'Upcoming Events',
      content: (
        <section className="mb-8">
          <p className="mb-8">Check out our upcoming events and join us for some dodgeball fun!</p>

          <ul className="list-disc list-inside">
            <li>Weekly open gyms on Sunday nights from 6pm-9pm</li>
            <li>First league on Wednesday nights from 7-9:30pm between April 16 and May 21</li>
            <li>The Throw Down 4 (Nickelodeon Edition) on July 12, 2025</li>
          </ul>
        </section>
      ),
    },
    {
      label: 'Past Events',
      content: (
        <section>
          <p className="mb-8">Check out our past events and see what you missed!</p>
          <ul className="list-disc list-inside">
            <li>Inaugural Throw Down on August 17, 2024</li>
            <li>The Throw Down 2 on November 2, 2024</li>
            <li>The Throw Down 3 (Cartoon Network Edition) on February 22, 2025</li>
          </ul>
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
