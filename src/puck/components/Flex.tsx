import React from "react";
import { DropZone } from "@measured/puck";

export interface FlexProps {
  direction?: "row" | "column";
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  puck?: any;
}

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  gap = "16px",
  justifyContent = "start",
  alignItems = "stretch",
  puck,
}) => {
  return (
    <div className="p-4" style={{ padding: puck?.isEditing ? "16px" : "0" }}>
      <DropZone
        zone="flex-content"
        allow={["FlexItem"]}
        style={{
          display: "flex",
          flexDirection: direction,
          flexWrap: "wrap",
          gap,
          justifyContent,
          alignItems,
        }}
      />
    </div>
  );
};
