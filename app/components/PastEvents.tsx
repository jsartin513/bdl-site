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
    <section>
      <p className="mb-8">Check out our past events and see what you missed!</p>
      <Carousel items={events} />
    </section>
  );
}