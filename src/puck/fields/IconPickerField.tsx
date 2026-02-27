import React from "react";
import * as LucideIcons from "lucide-react";

interface IconPickerFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export const IconPickerField: React.FC<IconPickerFieldProps> = ({
  value,
  onChange,
  label,
}) => {
  const [search, setSearch] = React.useState("");
  const iconNames = Object.keys(LucideIcons).filter(
    (name) =>
      name !== "createLucideIcon" &&
      name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-2">
      {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search icons..."
        className="w-full text-xs border rounded p-1 mb-2"
      />
      <div className="grid grid-cols-6 gap-1 h-32 overflow-y-auto border rounded p-1 bg-gray-50">
        {iconNames.slice(0, 100).map((name) => {
          const Icon = (LucideIcons as any)[name];
          return (
            <button
              key={name}
              type="button"
              onClick={() => onChange(name)}
              className={`p-1 rounded flex items-center justify-center hover:bg-white hover:shadow-sm ${
                value === name ? "bg-white shadow-sm ring-1 ring-blue-500" : ""
              }`}
              title={name}
            >
              <Icon size={16} />
            </button>
          );
        })}
      </div>
      {value && (
        <div className="flex items-center space-x-2 text-[10px] text-gray-500">
          <span>Selected:</span>
          <span className="font-mono">{value}</span>
        </div>
      )}
    </div>
  );
};
