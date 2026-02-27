import React from "react";

interface SpacingValue {
  top: string;
  right: string;
  bottom: string;
  left: string;
  unit: string;
}

interface SpacingFieldProps {
  value: SpacingValue;
  onChange: (value: SpacingValue) => void;
  label?: string;
}

export const SpacingField: React.FC<SpacingFieldProps> = ({
  value = { top: "0", right: "0", bottom: "0", left: "0", unit: "px" },
  onChange,
  label,
}) => {
  const [isLinked, setIsLinked] = React.useState(true);

  const updateSide = (side: keyof Omit<SpacingValue, "unit">, newValue: string) => {
    if (isLinked) {
      onChange({ ...value, top: newValue, right: newValue, bottom: newValue, left: newValue });
    } else {
      onChange({ ...value, [side]: newValue });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
        <button
          type="button"
          onClick={() => setIsLinked(!isLinked)}
          className={`text-[10px] uppercase p-1 rounded ${
            isLinked ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
          }`}
        >
          {isLinked ? "Linked" : "Unlinked"}
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <div key={side} className="space-y-1 text-center">
            <input
              type="text"
              value={value[side]}
              onChange={(e) => updateSide(side, e.target.value)}
              className="w-full text-xs border rounded p-1 text-center"
            />
            <span className="text-[10px] text-gray-400 uppercase">{side}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-[10px] text-gray-400">UNIT</span>
        <select
          value={value.unit}
          onChange={(e) => onChange({ ...value, unit: e.target.value })}
          className="text-[10px] border rounded p-0.5"
        >
          {["px", "%", "rem", "em", "vh", "vw", "auto"].map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
