import React from "react";

export interface BadgeProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  href?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text = "Badge",
  color = "#374151",
  backgroundColor = "#f3f4f6",
  borderRadius = "9999px",
  href,
}) => {
  const styles: React.CSSProperties = {
    display: "inline-block",
    padding: "2px 10px",
    fontSize: "12px",
    fontWeight: "500",
    color,
    backgroundColor,
    borderRadius,
    textDecoration: "none",
  };

  if (href) {
    return <a href={href} style={styles}>{text}</a>;
  }

  return <span style={styles}>{text}</span>;
};
