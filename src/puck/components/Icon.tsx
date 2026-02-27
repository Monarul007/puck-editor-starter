import React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps {
  icon: string;
  size?: number;
  color?: string;
  href?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon = "Activity",
  size = 24,
  color = "currentColor",
  href,
}) => {
  const LucideIcon = (LucideIcons as any)[icon] || LucideIcons.Activity;

  const content = <LucideIcon size={size} color={color} />;

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};
