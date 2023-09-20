"use client";

import SiteContent from "./components/SiteContent";
import { useState, useLayoutEffect, useEffect } from "react";
import SiteContentVertical from "./components/SiteContentVertical";
import Image from "next/image";
import ImageSpans from "./components/ImageSpans";

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
        <div>Hello</div>
      </div>
    );
  } else {
    return (
      <div className=" w-screen flex flex-col items-center justify-center bg-black">
        <div className="mt-10 w-screen bg-black z-50">
          <SiteContent />
        </div>

        <div className="h-20 w-full bg-gradient-to-b from-black to-transparent opacity-100 z-10"></div>

        <div className="pt-32 z-20">
          <ImageSpans />
        </div>

        <div className="fixedz-10 opacity-60">
          <div className="fixed top-1/3 left-1/4 rotate-45">
            <div className="h-20 w-96 bg-red-500 rounded-full blur-super animate-pulseSine-2 opacity-100 mix-blend-multiply"></div>
          </div>

          <div className="fixed top-1/4 left-1/4 rotate-45 ">
            <div className="h-20 w-96 bg-blue-500 rounded-full blur-super animate-pulseSine-3 opacity-100 mix-blend-multiply"></div>
          </div>

          <div className="fixed top-1/4 left-3/4 -rotate-45 mr-20">
            <div className="h-20 w-96 bg-red-500 rounded-full blur-super animate-pulseSine-3 opacity-100 mix-blend-multiply"></div>
          </div>
          <div className="fixed top-80 left-3/4 -rotate-45 ml-20">
            <div className="h-20 w-96 bg-blue-500 rounded-full blur-super animate-pulseSine-5 opacity-100 mix-blend-multiply"></div>
          </div>

          <div className="fixed top-3/4 left-1/4 rotate-12 ml-40">
            <div className="h-20 w-96 bg-blue-500 rounded-full blur-super animate-pulseSine-2 opacity-100 mix-blend-multiply"></div>
          </div>
          <div className="fixed top-3/4 left-1/4 rotate-12 ml-96">
            <div className="h-20 w-96 bg-red-500 rounded-full blur-super animate-pulseSine-5 opacity-100 mix-blend-multiply"></div>
          </div>
        </div>
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
