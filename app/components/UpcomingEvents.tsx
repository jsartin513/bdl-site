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
       <div className={`gap-4 ${
        filteredEvents.length <= 2 
          ? 'flex justify-center flex-wrap' 
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredEvents.map((event, index) => (
          <div key={index} className={filteredEvents.length <= 2 ? 'flex-shrink-0 max-w-md' : ''}>
            {event.link ? (
              <Link 
                href={event.link}
                target={event.link.startsWith('http') ? '_blank' : undefined}
                rel={event.link.startsWith('http') ? 'noopener noreferrer' : undefined}
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
    return <div key={index} className="border p-4 rounded shadow">
      <div className="flex justify-center mb-4">
        <Image src={event.image} alt={event.description} width={500} height={300} />
      </div>
      <p className="mb-4 text-md font-bold text-center">{event.description}</p>
    </div>;
  }
}