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
          <video className="rounded-md drop-shadow-lg" autoPlay loop muted>
            <source src={image} type="video/mp4" />
          </video>
          {/* <Image
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
            src={image}
            alt="walky"
          /> */}

          <div className="flex flex-col pt-10">
            <h1 className="text-h1 font-blackOpsOne">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row mb-32">
          <div className="flex flex-col pt-10 pr-10 content-center">
            {title.length > 16 ? (
              <>
                <h1 className="text-h1 -mb-4 font-blackOpsOne">{firstHalf}</h1>
                <h1 className="text-h1 font-blackOpsOne">{secondHalf}</h1>
              </>
            ) : (
              <h1 className="text-h1 -mb-2 font-blackOpsOne">{title}</h1>
            )}
            <p className="w-96 text-base leading-5">{description}</p>
          </div>

          <video
            className="rounded-md drop-shadow-lg w-spanVideo"
            autoPlay
            loop
            muted
          >
            <source src={image} type="video/mp4" />
          </video>

          {/* <Image
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
            src={image}
            alt="walky"
          /> */}
        </div>
      )}
    </>
  );
}
