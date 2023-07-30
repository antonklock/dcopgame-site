"use client";

import Image from "next/image";

export default function SteamButton() {
  const handleOpenSteam = () => {
    window.open("https://store.steampowered.com/");
  };

  return (
    <>
      <button
        style={buttonStyle}
        className="flex justify-around items-center px-4"
        onClick={handleOpenSteam}
      >
        <p>Get the game</p>
        <Image
          src="/SVG/windows_icon.svg"
          alt="windows icon"
          width={30}
          height={30}
        />
      </button>
    </>
  );
}

const buttonStyle = {
  background: "linear-gradient(0deg, #284054 0%, #396283 100%)",
  color: "white",
  width: "250px",
  height: "60px",
  borderRadius: "3px",
  fontSize: "1.5em",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
};
