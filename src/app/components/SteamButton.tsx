"use client";

import Image from "next/image";

export default function SteamButton() {
  const handleOpenSteam = () => {
    window.open("https://store.steampowered.com/app/2542320/DCOP/");
  };

  //return a button component with an animated hover effect with tailwind css
  return (
    <button
      onClick={handleOpenSteam}
      className="flex items-center justify-center w-56 h-16 text-lg font-semibold text-white rounded-lg transition ease-in-out duration-500 bg-gradient-to-b from-dcopBrightBlue to-dcopDarkBlue hover:scale-105 hover:bg-gradient-to-b hover:from-dcopBrightOrange hover:to-dcopDarkOrange"
    >
      <span className="mr-4">Get the game</span>
      <Image
        src="/SVG/windows_icon.svg"
        alt="windows icon"
        width={30}
        height={30}
      />
    </button>
  );
}
