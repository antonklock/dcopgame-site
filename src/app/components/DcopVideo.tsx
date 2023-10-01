export default function DcopVideo() {
  return (
    <div className="px-10 z-50">
      <video
        className="w-dcopVideo mt-10 rounded-xl"
        controls={true}
        src="/MP4/dcop_trailer_01.mp4"
        poster="/PNG/videoThumb.png"
      ></video>
    </div>
  );
}
