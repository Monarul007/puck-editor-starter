import React from "react";

export interface SpacerProps {
  height: string;
}

export const Spacer: React.FC<SpacerProps> = ({ height = "20px" }) => {
  return <div style={{ height }} />;
};
