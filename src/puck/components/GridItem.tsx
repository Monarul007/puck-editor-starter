import React from "react";
import { DropZone } from "@measured/puck";

export interface GridItemProps {
  columns?: number;
  rows?: number;
  puck?: any;
}

export const GridItem: React.FC<GridItemProps> = ({ columns = 1, rows = 1, puck }) => {
  return (
    <div
      ref={puck?.dragRef}
      style={{
        gridColumn: `span ${columns}`,
        gridRow: `span ${rows}`,
      }}
    >
      <DropZone zone="item-content" disallow={["GridItem"]} />
    </div>
  );
};
