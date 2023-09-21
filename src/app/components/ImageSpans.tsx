import Image from "next/image";
import LeftImageSpan from "./LeftImageSpan";
import RightImageSpan from "./RightImageSpan";

export default function ImageSpans(props: { vertical?: boolean }) {
  const { vertical } = props;
  return (
    <>
      <RightImageSpan
        title="Police Simulator"
        description="Step into the gritty world of law enforcement in DCOP, a
            groundbreaking full motion video (FMV) police simulator that thrusts
            players into the heart-pounding action of a newly graduated police
            officer facing off against a ruthless criminal syndicate."
        image="/walky.gif"
        vertical={vertical}
      />

      <LeftImageSpan
        title="On Rails Action"
        description="Buckle up as you ride shotgun through the mean streets of the city,
            chasing suspects, engaging in shootouts. With cinematic camera
            angles and action packed sequences, you'll feel like
            you're right in the middle of a blockbuster action movie."
        image="/hatguy.gif"
        vertical={vertical}
      />

      <RightImageSpan
        title="Stunning Visuals and Sound"
        description="Immerse yourself in a visually striking urban landscape, complete
            with detailed environments and lifelike character performances. The
            game's cinematic score enhances the tension and emotion,
            creating a truly immersive experience."
        image="/stairs.gif"
        vertical={vertical}
      />
    </>
  );
}
