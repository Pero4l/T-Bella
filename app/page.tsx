import Image from "next/image";
import HeroPage from "./components/hero-section/page";
import LatestHairPage from "./components/latest-hairs/page";

export default function Home() {
  return (
    <div>
      <HeroPage/>
      <LatestHairPage/>
    </div>
  );
}
