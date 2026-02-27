import React from "react";

export interface ImageProps {
  src: string;
  alt?: string;
  objectFit?: "cover" | "contain" | "fill";
  borderRadius?: string;
  width?: string;
  height?: string;
}

export const Image: React.FC<ImageProps> = ({
  src = "https://via.placeholder.com/800x450",
  alt = "",
  objectFit = "cover",
  borderRadius = "0px",
  width = "100%",
  height = "auto",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
        objectFit,
        borderRadius,
      }}
    />
  );
};
