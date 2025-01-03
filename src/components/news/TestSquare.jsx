import React from "react";

const SquareImage = ({ src, size = 200, backgroundColor = "#f0f0f0", alt = "Image" }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        overflow: "hidden", // Ensures the image doesn't overflow the container
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default SquareImage;
