import Image from 'next/image'

const imageDescription = "Boston community enjoying a dodgeball event. Photo credit: Emily Hotz";

export default function About() {
  return (
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">About Boston Dodgeball League</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-4">
            Boston Dodgeball League was created by a group of local Boston dodgeballers. Our league is committed to providing a dynamic, inclusive, and competitive environment. We aim to foster teamwork, respect, and sportsmanship, while also enhancing community bonds through spirited competition and engaging events.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Community</h2>
          <figure className="text-center">
            <Image 
              src="/images/boston_community.png"
              alt="Boston community members gathered together for a dodgeball event, showing the inclusive and friendly nature of the league" 
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
            <figcaption className="mt-4 text-sm text-gray-600">
              <em>{imageDescription}</em>
            </figcaption>
          </figure>
        </section>
      </main>
  )
}
