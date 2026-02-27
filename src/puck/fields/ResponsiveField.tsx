import React from "react";

export type ResponsiveValue<T> = {
  desktop?: T;
  tablet?: T;
  mobile?: T;
};

interface ResponsiveFieldProps {
  label?: string;
  children: (props: {
    value: any;
    onChange: (value: any) => void;
    breakpoint: "desktop" | "tablet" | "mobile";
  }) => React.ReactNode;
  value: ResponsiveValue<any>;
  onChange: (value: ResponsiveValue<any>) => void;
}

export const ResponsiveField: React.FC<ResponsiveFieldProps> = ({
  label,
  children,
  value = {},
  onChange,
}) => {
  const [breakpoint, setBreakpoint] = React.useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");

  const handleChange = (newValue: any) => {
    onChange({
      ...value,
      [breakpoint]: newValue,
    });
  };

  return (
    <div className="puck-responsive-field space-y-2">
      <div className="flex items-center justify-between">
        {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
        <div className="flex space-x-1 bg-gray-100 p-0.5 rounded">
          {(["desktop", "tablet", "mobile"] as const).map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBreakpoint(b)}
              className={`p-1 rounded text-[10px] uppercase transition-colors ${
                breakpoint === b
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {b.charAt(0)}
            </button>
          ))}
        </div>
      </div>
      {children({
        value: value[breakpoint],
        onChange: handleChange,
        breakpoint,
      })}
    </div>
  );
};
