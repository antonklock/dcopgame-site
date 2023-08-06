import Image from "next/image";
import { useRef, useEffect } from "react";

export default function DcopBackground() {
  return (
    <Image
      // src="/dcop_poster_full_ref.png"
      src="/dcop_bg.jpg"
      alt="dcop background"
      width={2888}
      height={1174}
      style={imageStyle}
    />
  );
}

const imageStyle = {
  width: "100%",
  height: "100%",
  maxWidth: "2088px",
  maxHeight: "1174px",
  layout: "fill",
};

const logoPositions = {
  top: "90%",
  left: "10%",
};
