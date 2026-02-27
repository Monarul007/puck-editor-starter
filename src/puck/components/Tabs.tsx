import React from "react";
import { DropZone } from "@measured/puck";

export interface TabsProps {
  items: { label: string }[];
}

export const Tabs: React.FC<TabsProps> = ({ items = [{ label: "Tab 1" }] }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b overflow-x-auto">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === i
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {items.map((_, i) => (
          <div key={i} className={activeTab === i ? "block" : "hidden"}>
            <DropZone zone={`tab-content-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
