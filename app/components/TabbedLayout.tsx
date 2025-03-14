'use client';

import { useState } from 'react';

interface TabbedLayoutProps {
  tabs: { label: string, content: React.ReactNode }[];
}

export default function TabbedLayout({ tabs }: TabbedLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-2xl font-bold mb-4 mr-4 cursor-pointer ${activeTab === index ? 'font-bold' : ''}`}
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
