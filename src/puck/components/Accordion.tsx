import React from "react";
import { DropZone } from "@measured/puck";
import { ChevronDown } from "lucide-react";

export interface AccordionProps {
  items: { title: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items = [{ title: "Item 1" }] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="w-full border rounded divide-y overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">{item.title}</span>
            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-4 py-4 border-t">
              <DropZone zone={`accordion-content-${i}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
