import Image from "next/image";

export default function ImageSpans() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col pt-10 pr-10">
          <h1 className="text-4xl mb-2">Police Simulator</h1>
          <p className="w-96 text-sm">
            Step into the gritty world of law enforcement in DCOP, a
            groundbreaking full motion video (FMV) police simulator that thrusts
            players into the heart-pounding action of a newly graduated police
            officer facing off against a ruthless criminal syndicate.
          </p>
        </div>

        <Image
          className="rounded-md drop-shadow-lg"
          width="500"
          height="500"
          src="/GIF/walky.gif"
          alt="walky"
        />
      </div>

      <div className="flex flex-row mt-32">
        <Image
          className="rounded-md drop-shadow-lg"
          width="500"
          height="500"
          src="/GIF/hatguy.gif"
          alt="walky"
        />

        <div className="flex flex-col pt-10 pl-10">
          <h1 className="text-4xl mb-2">On-Rails Action</h1>
          <p className="w-96 text-sm">
            Buckle up as you ride shotgun through the mean streets of the city,
            chasing suspects, engaging in shootouts. With cinematic camera
            angles and action packed sequences, you&apos;ll feel like
            you&apos;re right in the middle of a blockbuster action movie.
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-32 mb-32">
        <div className="flex flex-col pt-10 pr-10">
          <h1 className="text-4xl mb-2">Stunning Visuals and Sound</h1>
          <p className="w-96 text-sm">
            Immerse yourself in a visually striking urban landscape, complete
            with detailed environments and lifelike character performances. The
            game&apos;s cinematic score enhances the tension and emotion,
            creating a truly immersive experience.
          </p>
        </div>

        <Image
          className="rounded-md drop-shadow-lg"
          width="500"
          height="500"
          src="/GIF/stairs.gif"
          alt="walky"
        />
      </div>
    </>
  );
}
