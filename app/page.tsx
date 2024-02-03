import Header from "@/sections/header";
import Partnership from "@/sections/partnership";
import Team from "@/sections/team";
import TokenAllocation from "@/sections/token-allocation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <section className="max-w-screen-2xl m-auto">
        <Header />
      </section>

      {/* Token Section */}
      <section className="max-w-screen-2xl m-auto">
        <TokenAllocation />
      </section>

      {/* Partner Section */}
      <section className="max-w-screen-2xl m-auto">
        <Partnership />
      </section>

      {/* Team Section */}
      <section className="max-w-screen-2xl m-auto">
        <Team  />
      </section>
    </>
  );
}
