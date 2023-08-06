"use client";

import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import DcopBackground from "./DcopBackground";
import GraphicElements from "./GraphicElements";
import Image from "next/image";
import SteamButton from "./SteamButton";

export default function SiteContent() {
  return (
    <>
      <div
        className="h-full w-full flex items-center justify-center"
        style={bgStyle}
      >
        <div className="h-full flex flex-col justify-between px-20 max-w-3xl py-10">
          <div className="flex flex-col items-center pt-20">
            <div className="flex justify-center">
              <Image
                src="/SVG/dcop_logo_01.svg"
                alt="dcop logo"
                width={1000}
                height={1080}
                style={dcopLogoStyle}
              />
            </div>

            <div className="py-10">
              <Image
                src="/credits.png"
                alt="dcop credits"
                width={1300}
                height={205}
              />
            </div>

            <div className="pt-4">
              <SteamButton />
            </div>
          </div>

          <div className="flex flex-row justify-center mt-10 mb-24">
            <Image
              src="/SVG/unity_logo.svg"
              alt="unity logo"
              width={120 / 1.5}
              height={100 / 1.5}
              className="opacity-50"
            />
            <Image
              src="/SVG/steam_logo.svg"
              alt="unity logo"
              width={150 / 1.5}
              height={100 / 1.5}
              className="opacity-50 ml-7"
            />
            <Image
              src="/SVG/arduino_logo.svg"
              alt="unity logo"
              width={65 / 1.5}
              height={50 / 1.5}
              className="opacity-50 ml-7"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const bgStyle = {
  //add background image
  backgroundImage: "url(/dcop_bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const dcopLogoStyle = {
  filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))",
};
