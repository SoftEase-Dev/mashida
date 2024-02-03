import Header from "@/sections/header";
import TokenAllocation from "@/sections/token-allocation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto">
      {/* Header Section */}
      <section>
        <Header />
      </section>

      <section> 
        <TokenAllocation />
      </section>
    </div>
  );
}
