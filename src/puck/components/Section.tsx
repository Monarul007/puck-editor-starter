import React from "react";
import { DropZone } from "@measured/puck";

export interface SectionProps {
  columns: number;
  gap: number;
  minHeight?: string;
  padding?: any;
  background?: string;
}

export const Section: React.FC<SectionProps> = ({
  columns = 1,
  gap = 20,
  minHeight,
  padding,
  background,
}) => {
  const paddingStyle = padding
    ? `${padding.top}${padding.unit} ${padding.right}${padding.unit} ${padding.bottom}${padding.unit} ${padding.left}${padding.unit}`
    : "0";

  return (
    <section
      className="w-full"
      style={{
        minHeight,
        padding: paddingStyle,
        backgroundColor: background,
      }}
    >
      <div
        className="grid mx-auto max-w-7xl"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: `${gap}px`,
        }}
      >
        <DropZone zone="content" />
      </div>
    </section>
  );
};
