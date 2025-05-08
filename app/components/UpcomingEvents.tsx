import Image from 'next/image';
import Link from 'next/link';

interface Event {
  description: string;
  image: string;
  start_date: Date;
  end_date: Date;
  link?: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const today = new Date();

  // Filter upcoming events based on the current date
  const filteredEvents = events.filter((event) => {
    if (event.start_date && event.end_date) {
      return today >= event.start_date && today <= event.end_date;
    }
    return true;
  });

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event, index) => (
          event.link ? (
            <Link key={index} href={event.link}>
              {renderEventCard(index, event)}
            </Link>
          ) : (
            renderEventCard(index, event)
          )
        ))}
      </div>
    </section>
  );

  function renderEventCard(index: number, event: Event) {
    return <div key={index} className="border p-4 rounded shadow">
      <div className="flex justify-center mb-4">
        <Image src={event.image} alt={event.description} width={500} height={300} />
      </div>
      <p className="mb-4 text-md font-bold text-center">{event.description}</p>
    </div>;
  }
}