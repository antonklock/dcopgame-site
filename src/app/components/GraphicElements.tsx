import Image from "next/image";

export default function GraphicElements() {
  return (
    <div className="absolute w-full h-full flex place-content-stretch max-h-1050 max-w-1920">
      <div className="LEFT w-full h-full"></div>
      <div className="RIGHT w-full h-full flex flex-col justify-center ml-40 -translate-y-20">
        <div className="bg-green-400 flex justify-center">
          <h2>KLOCKWORKS</h2>
          <h2>CLAIRSTYLER</h2>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/SVG/dcop_logo_01.svg"
            alt="dcop logo"
            width={1000}
            height={1080}
            style={logoStyles}
          />
        </div>
      </div>
    </div>
  );
}

const logoStyles = {
  width: "60%",
  height: "auto",
};
