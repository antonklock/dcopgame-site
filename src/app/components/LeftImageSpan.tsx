import Image from "next/image";
import { Anton } from "next/font/google";

export default function LeftImageSpan(props: {
  image: string;
  title: string;
  description: string;
  vertical?: boolean;
}) {
  const { image, title, description, vertical } = props;

  let firstHalf = "";
  let secondHalf = "";

  if (title.length > 15) {
    const indexToSplit = title.indexOf(" ", 16);

    firstHalf = title.slice(0, indexToSplit);
    secondHalf = title.slice(indexToSplit);
  }

  return (
    <>
      {vertical ? (
        <div className="flex flex-col mb-32">
          <video
            className="rounded-md drop-shadow-lg"
            autoPlay
            loop
            muted={true}
            playsInline={true}
          >
            <source src={image} type="video/mp4" />
          </video>

          <div className="flex flex-col pt-10">
            <h1 className="text-h1 font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row mb-32">
          <video
            className="rounded-md drop-shadow-lg w-spanVideo"
            autoPlay
            loop
            muted={true}
            playsInline={true}
          >
            <source src={image} type="video/mp4" />
          </video>

          <div className="flex flex-col pt-10 pl-12">
            {title.length > 15 ? (
              <>
                <h1 className="text-h1 -mb-2 font-bold">{firstHalf}</h1>
                <h1 className="text-h1 font-bold">{secondHalf}</h1>
              </>
            ) : (
              <h1 className="text-h1 font-bold">{title}</h1>
            )}

            <p className="w-96 text-base leading-5">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
