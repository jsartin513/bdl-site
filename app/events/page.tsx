export default function Events() {
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <p className="mb-8">Check out our upcoming events and join us for some dodgeball fun!</p>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
        <ul className="list-disc list-inside">
          <li>Weekly open gyms on Sunday nights from 6pm-9pm</li>
          <li>First league on Wednesday nights from 7-9:30pm between April 16 and May 21</li>
          <li>The Throw Down 4 (Nickelodeon Edition) on July 12, 2025</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">Past Events</h3>
        <ul className="list-disc list-inside">
          <li>Inaugural Throw Down on August 17, 2024</li>
          <li>The Throw Down 2 on November 2, 2024</li>
          <li>The Throw Down 3 (Cartoon Network Edition) on February 22, 2025</li>
        </ul>
      </section>
    </main>
  );
}
