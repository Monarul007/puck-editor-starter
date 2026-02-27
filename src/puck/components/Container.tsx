import React from "react";
import { DropZone } from "@measured/puck";

export interface ContainerProps {
  display: "block" | "flex" | "grid";
  padding?: any;
  margin?: any;
  background?: string;
  width?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: number;
}

export const Container: React.FC<ContainerProps> = ({
  display = "block",
  padding,
  margin,
  background,
  width = "100%",
  position = "static",
  top,
  right,
  bottom,
  left,
  zIndex,
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
        position,
        top,
        right,
        bottom,
        left,
        zIndex,
      }}
    >
      <DropZone zone="content" />
    </div>
  );
};
