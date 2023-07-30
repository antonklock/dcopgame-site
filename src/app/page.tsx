import DcopBackground from "./components/DcopBackground";

import { Tourney } from "@next/font/google";

const tourney = Tourney({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-tourney",
});

export default function Home() {
  return (
    <main className={tourney.variable}>
      <div className="w-screen h-screen">
        <DcopBackground />
      </div>
    </main>
  );
}
