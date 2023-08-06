import Image from "next/image";
import SteamButton from "./SteamButton";

type GraphicElementsProps = {
  width: number;
  height: number;
};

export default function GraphicElements(props: GraphicElementsProps) {
  const { width, height } = props;

  return (
    <div className="flex flex-row" style={{ width: width, height: height }}>
      <div className="LEFT relative flex-1 mb-32">
        <div className="h-full">
          <div
            className="relative flex flex-row items-end justify-start"
            style={{ height: height * 0.9, marginLeft: width * 0.1 }}
          >
            <Image
              src="/SVG/unity_logo.svg"
              alt="unity logo"
              width={120 * (width * 0.0004)}
              height={100 * (width * 0.0004)}
              className="opacity-50"
            />
            <Image
              src="/SVG/steam_logo.svg"
              alt="unity logo"
              width={150 * (width * 0.0004)}
              height={100 * (width * 0.0004)}
              className="opacity-50 ml-7"
            />
            <Image
              src="/SVG/arduino_logo.svg"
              alt="unity logo"
              width={65 * (width * 0.0004)}
              height={50 * (width * 0.0004)}
              className="opacity-50 ml-7"
            />
          </div>
        </div>
      </div>
      <div
        className="RIGHT flex-1 relative pr-20 flex flex-col items-center justify-center"
        style={{
          height: height * 0.75,
          marginTop: height * 0.1,
          // marginBottom: height / 10,
        }}
      >
        <div className="px-10 flex justify-center">
          <Image
            src="/SVG/dcop_logo_01.svg"
            alt="dcop logo"
            width={1000 / 1.88}
            height={1080 / 1.88}
            style={dcopLogoStyle}
            // layout="fill"
          />
        </div>

        <div className="px-10 py-10">
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
    </div>
  );
}

const dcopLogoStyle = {
  filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))",
};

// const logoPositions = {
//   top: "90%",
//   left: "10%",
// };
