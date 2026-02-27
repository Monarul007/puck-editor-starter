import React from "react";
import { HexColorPicker } from "react-colorful";

interface ColorFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export const ColorField: React.FC<ColorFieldProps> = ({
  value,
  onChange,
  label,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-2">
      {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
      <div className="relative">
        <div
          className="flex items-center space-x-2 border rounded p-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="w-6 h-6 rounded border shadow-sm"
            style={{ backgroundColor: value || "#000000" }}
          />
          <span className="text-xs font-mono uppercase">
            {value || "#000000"}
          </span>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-2 p-2 bg-white border rounded shadow-xl">
            <HexColorPicker color={value || "#000000"} onChange={onChange} />
            <div
              className="mt-2 text-center text-xs text-gray-500 cursor-pointer hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
