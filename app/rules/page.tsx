export default function Rules() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">League Rules & Information</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">League Information</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="font-semibold text-blue-800">Required Documentation</p>
        </div>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-lg">
            All participants in any BDL event (Open Gym, League, or Tournament) must have a completed{' '}
            <a 
              href="https://docs.google.com/forms/d/1dtY54XCXrWxqguTHmSgp-T2PRA1A_4Adg78z5kFLG8Y/edit?fbclid=PAZXh0bgNhZW0CMTEAAabISyzb2EJECrSAqbIEUZhzqTKmfOlK_jLsVDEipbotDiMjWtC9fOChz1I_aem_uSnlzRisajAEf-iDUXEcFA" 
              className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Player registration form (opens in new tab)"
            >
              player form
            </a>{' '}
            on file. For easy access, the agreements from that form are listed below:
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <a 
                  href="https://drive.google.com/file/d/1M1sl4id0zpRbDKGxsERx-4rpdz1SrO7X/view?usp=drive_link" 
                  className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Liability waiver document (opens in new tab)"
                >
                  Liability Waiver
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/1-peKUgqzgNY6pqEJFrH8PdkJnkad3heI/view?usp=drive_link" 
                  className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Code of conduct document (opens in new tab)"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/1MeoAkhm4dfvipJkNdoFDxpBkjAwta3aH/view" 
                  className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Photo and video consent form (opens in new tab)"
                >
                  Photo and Video Consent Form
                </a>
              </li>
            </ul>
          </li>
          <li className="text-lg">
            For disciplinary measures, please refer to our{' '}
            <a 
              href="https://docs.google.com/document/d/1fH9tqGDGACpL9DF7AICKk55VbNFfyU0O6ZHqSPcRv40/edit?tab=t.0#heading=h.f3obm8dbqxut" 
              className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Disciplinary measures document (opens in new tab)"
            >
              Disciplinary Measures
            </a>.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Game Rules</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="font-semibold text-green-800">Official Rules</p>
        </div>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-lg">
            We follow the rule set used by{' '}
            <a 
              href="https://www.usadodgeball.com/rules" 
              className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="USA Dodgeball official rules (opens in new tab)"
            >
              USA Dodgeball
            </a>, including 2025 updates.
          </li>
          <li className="text-lg">
            Rules for our 1v1 Showdown:{' '}
            <a 
              href="https://www.canva.com/design/DAGPcCWIXN4/IW4k5xQiCR5LMxKmrohQmQ/view?utm_content=DAGPcCWIXN4&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
              className="text-blue-500 underline hover:text-blue-700 visited:text-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="1v1 Showdown rules document (opens in new tab)"
            >
              1v1 Showdown Rules
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
