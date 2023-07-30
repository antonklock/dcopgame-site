import DcopBackground from "./components/DcopBackground";
import GraphicElements from "./components/GraphicElements";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <DcopBackground />
      <GraphicElements />
    </div>
  );
}
