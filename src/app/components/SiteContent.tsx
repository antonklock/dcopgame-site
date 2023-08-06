"use client";

import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import DcopBackground from "./DcopBackground";
import GraphicElements from "./GraphicElements";
import React, { useLayoutEffect, useState, useEffect } from "react";

export default function SiteContent() {
  const [width, height] = useWindowSize();
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);

  useEffect(() => {
    console.log("width: " + width);
    console.log("height: " + height);

    if (CheckIfScaleOnX(width, height)) {
      setImageX(width);
      setImageY(width / 1.778);
    } else {
      setImageX(height * 1.778);
      setImageY(height);
    }
  }, [width, height]);

  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        <div className="absolute" style={{ width: imageX, height: imageY }}>
          <DcopBackground />
        </div>
        <div className="absolut">
          <GraphicElements width={imageX} height={imageY} />
        </div>
      </div>
    </>
  );
}

const CheckIfScaleOnX = (width: number, height: number) => {
  if (width / 16 < height / 9) {
    return true;
  } else {
    return false;
  }
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
