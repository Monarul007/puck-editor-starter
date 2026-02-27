import React from "react";
import type { TypographyValue } from "../fields/TypographyField";

export interface HeadingProps {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  typography?: TypographyValue;
}

export const Heading: React.FC<HeadingProps> = ({
  text = "Heading",
  level = "h2",
  typography,
}) => {
  const Tag = level;
  const style: React.CSSProperties = typography
    ? {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontWeight: typography.fontWeight,
        lineHeight: typography.lineHeight,
        letterSpacing: typography.letterSpacing,
        color: typography.color,
        textAlign: typography.textAlign,
        textTransform: typography.textTransform,
      }
    : {};

  return <Tag style={style}>{text}</Tag>;
};
