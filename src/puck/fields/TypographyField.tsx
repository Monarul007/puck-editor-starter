import React from "react";
import { ColorField } from "./ColorField";

export interface TypographyValue {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  color: string;
  textAlign: "left" | "center" | "right" | "justify";
  textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
}

interface TypographyFieldProps {
  value: TypographyValue;
  onChange: (value: TypographyValue) => void;
  label?: string;
}

export const TypographyField: React.FC<TypographyFieldProps> = ({
  value = {
    fontFamily: "inherit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0",
    color: "#000000",
    textAlign: "left",
    textTransform: "none",
  },
  onChange,
  label,
}) => {
  const updateField = (field: keyof TypographyValue, newValue: string) => {
    onChange({ ...value, [field]: newValue });
  };

  return (
    <div className="space-y-4 border-t pt-4 mt-4">
      {label && <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">{label}</div>}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase">Font Size</label>
          <input
            type="text"
            value={value.fontSize}
            onChange={(e) => updateField("fontSize", e.target.value)}
            className="w-full text-xs border rounded p-1"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase">Weight</label>
          <select
            value={value.fontWeight}
            onChange={(e) => updateField("fontWeight", e.target.value)}
            className="w-full text-xs border rounded p-1"
          >
            {["100", "200", "300", "400", "500", "600", "700", "800", "900"].map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase">Line Height</label>
          <input
            type="text"
            value={value.lineHeight}
            onChange={(e) => updateField("lineHeight", e.target.value)}
            className="w-full text-xs border rounded p-1"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase">Letter Spacing</label>
          <input
            type="text"
            value={value.letterSpacing}
            onChange={(e) => updateField("letterSpacing", e.target.value)}
            className="w-full text-xs border rounded p-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase">Align</label>
          <div className="flex border rounded overflow-hidden">
            {(["left", "center", "right", "justify"] as const).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => updateField("textAlign", a)}
                className={`flex-1 p-1 text-[10px] capitalize ${
                  value.textAlign === a ? "bg-blue-600 text-white" : "bg-gray-50 text-gray-500"
                }`}
              >
                {a.charAt(0)}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase">Transform</label>
          <select
            value={value.textTransform}
            onChange={(e) => updateField("textTransform", e.target.value)}
            className="w-full text-xs border rounded p-1"
          >
            {["none", "uppercase", "lowercase", "capitalize"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <ColorField
        label="Text Color"
        value={value.color}
        onChange={(color) => updateField("color", color)}
      />
    </div>
  );
};
