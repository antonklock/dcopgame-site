import Image from "next/image";
import GraphicElements from "./GraphicElements";

export default function DcopBackground() {
  return (
    <>
      <div className={"w-full h-full flex justify-center items-center"}>
        <GraphicElements />
        <Image
          //   src="/dcop_poster_full_ref.png"
          src="/dcop_bg.jpg"
          alt="dcop background"
          width={1920}
          height={1080}
          style={imageStyle}
        />
      </div>
    </>
  );
}

const imageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "1920px",
  maxHeight: "1050px",
};
