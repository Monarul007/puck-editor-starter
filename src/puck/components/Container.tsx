import React from "react";
import { DropZone } from "@measured/puck";

export interface ContainerProps {
  display: "block" | "flex" | "grid";
  padding?: any;
  margin?: any;
  background?: string;
  width?: string;
}

export const Container: React.FC<ContainerProps> = ({
  display = "block",
  padding,
  margin,
  background,
  width = "100%",
}) => {
  const getSpacingStyle = (spacing: any) =>
    spacing
      ? `${spacing.top}${spacing.unit} ${spacing.right}${spacing.unit} ${spacing.bottom}${spacing.unit} ${spacing.left}${spacing.unit}`
      : "0";

  return (
    <div
      style={{
        display,
        padding: getSpacingStyle(padding),
        margin: getSpacingStyle(margin),
        backgroundColor: background,
        width,
      }}
    >
      <DropZone zone="content" />
    </div>
  );
};
