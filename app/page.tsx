import Header from "@/sections/header";
import Partnership from "@/sections/partnership";
import Roadmap from "@/sections/roadmap";
import Features from "@/sections/scroll-video";
import Team from "@/sections/team";
import TokenAllocation from "@/sections/token-allocation";
import Modal from "@/sections/utils/modal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <section>
        <Header />
      </section>

      {/* Features Section */}
      <section>
        <Features />
      </section>

      {/* Token Section */}
      <section className="max-w-screen-2xl m-auto">
        <TokenAllocation />
      </section>

      {/* Roadmap Section */}
      <section className="max-w-screen-2xl m-auto">
        <Roadmap />
      </section>

      {/* Team Section */}
      <section className="max-w-screen-2xl m-auto">
        <Team />
      </section>

      {/* Partner Section */}
      <section className="max-w-screen-2xl m-auto">
        <Partnership />
      </section>
    </>
  );
}
