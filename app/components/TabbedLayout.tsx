'use client';

import { useState, useRef } from 'react';

interface TabbedLayoutProps {
  tabs: { label: string, content: React.ReactNode }[];
}

export default function TabbedLayout({ tabs }: TabbedLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Handle keyboard navigation for tabs
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    switch (event.key) {
      case 'ArrowLeft':
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div>
      <div className="mb-8 flex justify-center" role="tablist" aria-label="Event categories">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`text-2xl font-bold mb-4 mx-4 px-4 py-2 cursor-pointer border-b-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-t transition-colors hover:bg-blue-50 ${
              activeTab === index ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-700 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
