import Image from "next/image";

export default function DcopBackground() {
  return (
    <>
      <div
        className={
          "absolute top-0 left-0 w-full h-full justify-center items-center flex"
        }
      >
        <Image
          // src="/dcop_poster_full_ref.png"
          src="/dcop_bg.jpg"
          alt="dcop background"
          width={2888}
          height={1174}
          style={imageStyle}
        />
      </div>
    </>
  );
}

const imageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "2088px",
  maxHeight: "1174px",
};

const logoPositions = {
  top: "90%",
  left: "10%",
};
