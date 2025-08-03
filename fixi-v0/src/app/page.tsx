import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <main className="flex flex-col items-center">
        <Hero />
        {/* <HowItWorks /> — aún sin activar */}
      </main>
    </div>
  );
}
