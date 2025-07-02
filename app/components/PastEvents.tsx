import Carousel from './Carousel';

interface PastEvent {
  description: string;
  image: string;
}

interface PastEventsProps {
  events: PastEvent[];
}

export default function PastEvents({ events }: PastEventsProps) {
  return (
    <section aria-labelledby="past-events-heading">
      <h2 id="past-events-heading" className="sr-only">Past Events</h2>
      <p className="mb-8 text-center text-lg">Check out our past events and see what you missed!</p>
      <Carousel items={events} />
    </section>
  );
}