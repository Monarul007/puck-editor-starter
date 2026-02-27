import React from "react";
import { DropZone } from "@measured/puck";

export interface GridProps {
  columns: number;
  gap?: string;
  puck?: any;
}

export const Grid: React.FC<GridProps> = ({ columns = 3, gap = "16px", puck }) => {
  return (
    <div className="p-4" style={{ padding: puck?.isEditing ? "16px" : "0" }}>
      <DropZone
        zone="grid-content"
        allow={["GridItem"]}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      />
    </div>
  );
};
