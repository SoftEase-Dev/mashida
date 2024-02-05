import Header from "@/sections/header";
import Partnership from "@/sections/partnership";
import Roadmap from "@/sections/roadmap";
import Features from "@/sections/scroll-video";
import Team from "@/sections/team";
import TokenAllocation from "@/sections/token-allocation";
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
      <section>
        <TokenAllocation />
      </section>

      {/* Roadmap Section */}
      <section>
        <Roadmap />
      </section>

      {/* Team Section */}
      <section>
        <Team />
      </section>

      {/* Partner Section */}
      <section>
        <Partnership />
      </section>
    </>
  );
}
