"use client";

import SiteContent from "./components/SiteContent";
import { useState, useLayoutEffect, useEffect } from "react";
import SiteContentVertical from "./components/SiteContentVertical";

export default function Home() {
  const [width, height] = useWindowSize();
  const [displayVertical, setDisplayVertical] = useState(false);

  useEffect(() => {
    if (isVertical(width, height)) {
      setDisplayVertical(true);
      console.log("Vertical");
    } else {
      setDisplayVertical(false);
      console.log("Horizontal");
    }
  }, [width, height]);

  if (displayVertical) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <SiteContentVertical />
      </div>
    );
  } else {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <SiteContent />
      </div>
    );
  }
}

function isVertical(width: number, height: number) {
  if (width < 1050) {
    return true;
  } else {
    return false;
  }
}

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
