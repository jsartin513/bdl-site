import Image from 'next/image'

export default function About() {
  return (
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>Welcome to the Boston Dodgeball League! We provide competitive, social dodgeball events for adults.</p>
        <div className="mt-4 text-center">
          <Image src="/images/boston_community.png" alt="Boston community enjoying a dodgeball event" width={450} height={300} className="mx-auto" />
            <p className="mt-2 text-sm"><em>Boston community enjoying a dodgeball event. <br />Photo credit: Emily Hotz</em></p>
        </div>
      </main>
  )
}
