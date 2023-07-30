import Image from "next/image";
import SteamButton from "./SteamButton";

export default function GraphicElements() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex place-content-stretch max-h-dcopMH max-w-dcopMW">
      <div className="LEFT w-full h-full flex justify-start items-end pl-20 ">
        <div className="flex flex-col justify-end aspect-square">
          <div className="absolute flex" style={logoPositions}>
            <Image
              src="/SVG/unity_logo.svg"
              alt="unity logo"
              width={120}
              height={100}
              className="opacity-50"
            />
            <Image
              src="/SVG/steam_logo.svg"
              alt="unity logo"
              width={150}
              height={100}
              className="opacity-50 ml-7"
            />
            <Image
              src="/SVG/arduino_logo.svg"
              alt="unity logo"
              width={65}
              height={50}
              className="opacity-50 ml-7"
            />
          </div>
        </div>
      </div>
      <div className="RIGHT w-full h-full flex flex-col justify-center ml-40 -translate-y-20">
        <div className="flex flex-col justify-center">
          <Image
            src="/SVG/dcop_logo_01.svg"
            alt="dcop logo"
            width={1000}
            height={1080}
            style={dcopLogoStyle}
          />
        </div>
        <div className="w-full flex ml-40 mt-40">
          <SteamButton />
        </div>
      </div>
    </div>
  );
}

const dcopLogoStyle = {
  width: "60%",
  height: "auto",
  filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))",
};

const logoPositions = {
  top: "90%",
  left: "10%",
};
