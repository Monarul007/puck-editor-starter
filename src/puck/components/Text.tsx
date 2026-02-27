import React from "react";
import type { TypographyValue } from "../fields/TypographyField";

export interface TextProps {
  text: string;
  typography?: TypographyValue;
}

export const Text: React.FC<TextProps> = ({
  text = "Enter text here...",
  typography,
}) => {
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

  return <p style={style}>{text}</p>;
};
