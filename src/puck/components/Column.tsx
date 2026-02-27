import React from "react";
import { DropZone } from "@measured/puck";

export interface ColumnProps {
  span?: number;
}

export const Column: React.FC<ColumnProps> = ({ span = 1 }) => {
  return (
    <div style={{ gridColumn: `span ${span} / span ${span}` }}>
      <DropZone zone="content" />
    </div>
  );
};
