import Image from 'next/image'
import bdlCommunityPic from '../public/images/boston_community.png'

const imageDescription = "Boston community enjoying a dodgeball event. Photo credit: Emily Hotz";

export default function About() {
  return (
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>Boston Dodgeball League was created by a group of local Boston dodgeballers. Our league is committed to providing a dynamic, inclusive, and competitive environment. We aim to foster teamwork, respect, and sportsmanship, while also enhancing community bonds through spirited competition and engaging events.</p>
        <div className="mt-4 text-center">
          <Image src={bdlCommunityPic} alt={imageDescription} className="mx-auto" />
            <p className="mt-2 text-sm"><em>{imageDescription}</em></p>
        </div>
      </main>
  )
}
