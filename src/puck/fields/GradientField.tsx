import React from "react";
import { ColorField } from "./ColorField";

interface GradientStop {
  color: string;
  position: number;
}

interface GradientValue {
  type: "linear" | "radial";
  angle: number;
  stops: GradientStop[];
}

interface GradientFieldProps {
  value: GradientValue;
  onChange: (value: GradientValue) => void;
  label?: string;
}

export const GradientField: React.FC<GradientFieldProps> = ({
  value = { type: "linear", angle: 90, stops: [{ color: "#ffffff", position: 0 }, { color: "#000000", position: 100 }] },
  onChange,
  label,
}) => {
  const updateStop = (index: number, stop: Partial<GradientStop>) => {
    const newStops = [...value.stops];
    newStops[index] = { ...newStops[index], ...stop };
    onChange({ ...value, stops: newStops });
  };

  return (
    <div className="space-y-4">
      {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
      <div className="flex items-center space-x-2">
        <select
          value={value.type}
          onChange={(e) => onChange({ ...value, type: e.target.value as any })}
          className="text-xs border rounded p-1"
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
        {value.type === "linear" && (
          <input
            type="number"
            value={value.angle}
            onChange={(e) => onChange({ ...value, angle: parseInt(e.target.value) })}
            className="w-16 text-xs border rounded p-1"
          />
        )}
      </div>
      {value.stops.map((stop, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ColorField
            value={stop.color}
            onChange={(color) => updateStop(index, { color })}
          />
          <input
            type="number"
            value={stop.position}
            onChange={(e) => updateStop(index, { position: parseInt(e.target.value) })}
            className="w-16 text-xs border rounded p-1"
          />
        </div>
      ))}
    </div>
  );
};
