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
    <section className="mb-8" aria-labelledby="upcoming-events-heading">
      <h2 id="upcoming-events-heading" className="sr-only">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event, index) => (
          <div key={index}>
            {event.link ? (
              <Link 
                href={event.link}
                className="block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded transition-transform hover:scale-105"
                aria-label={`Learn more about ${event.description}`}
              >
                {renderEventCard(index, event)}
              </Link>
            ) : (
              renderEventCard(index, event)
            )}
          </div>
        ))}
      </div>
    </section>
  );

  function renderEventCard(index: number, event: Event) {
    return (
      <article className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
        <div className="flex justify-center mb-4">
          <Image 
            src={event.image} 
            alt="" 
            width={500} 
            height={300}
            className="rounded"
          />
        </div>
        <h3 className="mb-4 text-md font-bold text-center">{event.description}</h3>
      </article>
    );
  }
}