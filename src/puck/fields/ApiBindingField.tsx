import React from "react";

interface ApiBindingValue {
  url: string;
  method: string;
  headers: Record<string, string>;
  responsePath: string;
}

interface ApiBindingFieldProps {
  value: ApiBindingValue;
  onChange: (value: ApiBindingValue) => void;
  label?: string;
}

export const ApiBindingField: React.FC<ApiBindingFieldProps> = ({
  value = { url: "", method: "GET", headers: {}, responsePath: "" },
  onChange,
  label,
}) => {
  return (
    <div className="space-y-4">
      {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
      <div className="space-y-1">
        <label className="text-[10px] text-gray-400 uppercase">API URL</label>
        <input
          type="text"
          value={value.url}
          onChange={(e) => onChange({ ...value, url: e.target.value })}
          className="w-full text-xs border rounded p-1"
          placeholder="https://api.example.com/data"
        />
      </div>
      <div className="space-y-1">
        <label className="text-[10px] text-gray-400 uppercase">Response Path</label>
        <input
          type="text"
          value={value.responsePath}
          onChange={(e) => onChange({ ...value, responsePath: e.target.value })}
          className="w-full text-xs border rounded p-1"
          placeholder="data.items"
        />
      </div>
    </div>
  );
};
