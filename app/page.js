import Image from "next/image";
import Hero from "./(landingpage)/components/hero";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto">
        <Hero />
      </div>
    </main>
  );
}
