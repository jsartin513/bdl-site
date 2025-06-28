import Image from "next/image";

export default function BeastCoastPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Event Header */}
      <section className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-6">Beast Coast 2025</h1>
      <p className="text-2xl mb-8 text-green-700 font-semibold">
        We are so proud of our Boston men&apos;s and women&apos;s teams for both placing <strong>second</strong> at Beast Coast 2025!
      </p>
      <p className="mb-4">
        Thank you to all our players, supporters, and the tournament organizers for an amazing event.
      </p>
      </section>



      {/* Boston Teams */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Boston Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Team */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Men&apos;s Team</h3>
            <Image
              src="/images/beast-coast/mens_roster.jpg"
              alt="Men's Team Roster"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Women's Team */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Women&apos;s Team</h3>
            <Image
              src="/images/beast-coast/womens_roster.jpg"
              alt="Women's Team Roster"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

    </main>
  );
}