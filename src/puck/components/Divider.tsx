import React from "react";

export interface DividerProps {
  style: "solid" | "dashed" | "dotted" | "double";
  color: string;
  thickness: number;
  width: string;
}

export const Divider: React.FC<DividerProps> = ({
  style = "solid",
  color = "#e5e7eb",
  thickness = 1,
  width = "100%",
}) => {
  return (
    <hr
      style={{
        border: "none",
        borderTop: `${thickness}px ${style} ${color}`,
        width,
      }}
    />
  );
};
