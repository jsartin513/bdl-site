'use client';

import { useState } from 'react';

interface TabbedLayoutProps {
  tabs: { label: string, content: React.ReactNode }[];
}

export default function TabbedLayout({ tabs }: TabbedLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="mb-8 flex justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-2xl font-bold mb-4 mx-4 px-4 py-2 cursor-pointer border-b-2 ${activeTab === index ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
