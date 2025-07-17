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
      <Carousel items={events} />
    </section>
  );
}