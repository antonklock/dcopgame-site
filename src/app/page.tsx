"use client";

import SiteContent from "./components/SiteContent";
import { useState, useLayoutEffect, useEffect } from "react";
import SiteContentVertical from "./components/SiteContentVertical";
import Image from "next/image";
import ImageSpans from "./components/ImageSpans";
import SirensBackground from "./components/SirensBackground";
import Footer from "./components/Footer";
import DcopVideo from "./components/DcopVideo";

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
      <div className="flex flex-col items-center justify-center bg-black">
        <div className="mt-10 w-screen bg-black z-50">
          <SiteContentVertical />
        </div>

        <div className="h-20 w-full bg-gradient-to-b from-black to-transparent opacity-100 z-10"></div>

        <DcopVideo />

        <div className="pt-32 z-20 w-4/5">
          <ImageSpans vertical={true} />
        </div>

        <SirensBackground />

        <Footer />
      </div>
    );
  } else {
    return (
      <div className=" w-screen flex flex-col items-center justify-center bg-black">
        <div className="mt-10 w-screen bg-black z-50">
          <SiteContent />
        </div>

        <div className="h-20 w-full bg-gradient-to-b from-black to-transparent opacity-100 z-10"></div>

        <DcopVideo />

        <div className="pt-32 z-20">
          <ImageSpans vertical={false} />
        </div>

        <SirensBackground />

        <Footer />
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

const styles = {
  blob: {
    animation: "fadeIn 200ms linear",
  },
};
