import Image from "next/image";

export default function RightImageSpan(props: {
  image: string;
  title: string;
  description: string;
  vertical?: boolean;
}) {
  const { image, title, description, vertical } = props;

  let firstHalf = "";
  let secondHalf = "";

  if (title.length > 16) {
    const indexToSplit = title.indexOf(" ", 15);

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
            <h1 className="text-h1 font-bold leading-10 text-white">{title}</h1>
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row mb-32">
          <div className="flex flex-col pt-10 pr-10 content-center">
            {title.length > 16 ? (
              <>
                <h1 className="text-h1 -mb-4 font-bold text-white">
                  {firstHalf}
                </h1>
                <h1 className="text-h1 font-bold text-white">{secondHalf}</h1>
              </>
            ) : (
              <h1 className="text-h1 font-bold text-white">{title}</h1>
            )}
            <p className="w-96 text-base leading-5 text-white">{description}</p>
          </div>

          <video
            className="rounded-md drop-shadow-lg w-spanVideo"
            autoPlay
            loop
            muted={true}
            playsInline={true}
          >
            <source src={image} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
}
