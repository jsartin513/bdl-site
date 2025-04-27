import Image from 'next/image';

interface Event {
  description: string;
  image: string;
  start_date: Date;
  end_date: Date;
}

interface UpcomingEventsProps {
  events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <div className="flex justify-center mb-4">
              <Image src={event.image} alt={event.description} width={500} height={300} />
            </div>
            <p className="mb-4 text-md font-bold text-center">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}