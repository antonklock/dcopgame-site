import Image from "next/image";

export default function LeftImageSpan(props: {
  image: string;
  title: string;
  description: string;
  vertical?: boolean;
}) {
  const { image, title, description, vertical } = props;
  return (
    <>
      {vertical ? (
        <div className="flex flex-col mb-32">
          <Image
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
            src={image}
            alt="walky"
          />

          <div className="flex flex-col pt-10">
            <h1 className="text-4xl mb-2">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row mb-32">
          <Image
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
            src={image}
            alt="walky"
          />

          <div className="flex flex-col pt-10 pl-10">
            <h1 className="text-4xl mb-2">{title}</h1>
            <p className="w-96 text-sm">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
