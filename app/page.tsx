import Image from 'next/image'

export default function About() {
  return (
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>Welcome to the Boston Dodgeball League! We provide competitive, social dodgeball events for adults.</p>
        <Image src="/images/boston_community.png" alt="Boston community enjoying a dodgeball event" className="mt-4" width={600} height={400} />
      </main>
  )
}
