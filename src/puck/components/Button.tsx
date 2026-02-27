import React from "react";
import * as LucideIcons from "lucide-react";

export interface ButtonProps {
  text: string;
  href?: string;
  variant: "solid" | "outline" | "ghost";
  color?: string;
  textColor?: string;
  borderRadius?: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  text = "Button",
  href,
  variant = "solid",
  color = "#3b82f6",
  textColor = "#ffffff",
  borderRadius = "4px",
  icon,
  iconPosition = "left",
}) => {
  const Icon = icon ? (LucideIcons as any)[icon] : null;

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 16px",
    borderRadius,
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.2s",
    cursor: "pointer",
    border: "1px solid transparent",
  };

  const variants: Record<string, React.CSSProperties> = {
    solid: {
      backgroundColor: color,
      color: textColor,
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: color,
      color: color,
    },
    ghost: {
      backgroundColor: "transparent",
      color: color,
    },
  };

  const Component = href ? "a" : "button";

  return (
    <Component href={href} style={{ ...baseStyles, ...variants[variant] }}>
      {Icon && iconPosition === "left" && <Icon size={16} className="mr-2" />}
      {text}
      {Icon && iconPosition === "right" && <Icon size={16} className="ml-2" />}
    </Component>
  );
};
