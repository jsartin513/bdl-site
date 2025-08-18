import Image from 'next/image'
import bdlCommunityPic from '../../public/images/boston_community.png'
import boardMembersPic from '../../public/images/board_members.jpg'

const imageDescription = "Boston community enjoying a dodgeball event. Photo credit: Emily Hotz";
const boardImageDescription = "Boston Dodgeball League Board Members - Est. 2024";

export default function About() {
  return (
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>Boston Dodgeball League was created by a group of local Boston dodgeballers. Our league is committed to providing a dynamic, inclusive, and competitive environment. We aim to foster teamwork, respect, and sportsmanship, while also enhancing community bonds through spirited competition and engaging events.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Our Board Members</h3>
          <p className="mb-4">The Boston Dodgeball League is led by a dedicated board of officers who bring passion, expertise, and commitment to growing the sport in Boston. Established in 2024, our leadership team works tirelessly to ensure every player has an exceptional experience.</p>
          
          <div className="mb-6 text-center">
            <Image src={boardMembersPic} alt={boardImageDescription} className="mx-auto rounded-lg shadow-lg" />
            <p className="mt-2 text-sm"><em>{boardImageDescription}</em></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900">Abby Lee</h4>
              <p className="text-sm text-gray-700">Chief Executive Officer</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900">Lovie Burleson</h4>
              <p className="text-sm text-gray-700">Chief Operations Officer</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900">David Hollm</h4>
              <p className="text-sm text-gray-700">Chief Financial Officer</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900">Bo Tillmon</h4>
              <p className="text-sm text-gray-700">Chief Marketing Officer</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900">Jessica Sartin</h4>
              <p className="text-sm text-gray-700">Chief Information Officer</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900">Stephen Decker</h4>
              <p className="text-sm text-gray-700">Director of Culture</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Image src={bdlCommunityPic} alt={imageDescription} className="mx-auto" />
            <p className="mt-2 text-sm"><em>{imageDescription}</em></p>
        </div>
      </main>
  )
}
