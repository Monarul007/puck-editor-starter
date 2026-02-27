import React from "react";
import { DropZone } from "@measured/puck";

export interface FlexItemProps {
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  puck?: any;
}

export const FlexItem: React.FC<FlexItemProps> = ({
  flexGrow = 0,
  flexShrink = 1,
  flexBasis = "auto",
  puck,
}) => {
  return (
    <div
      ref={puck?.dragRef}
      style={{
        flexGrow,
        flexShrink,
        flexBasis,
      }}
    >
      <DropZone zone="item-content" disallow={["FlexItem"]} />
    </div>
  );
};
