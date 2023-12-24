import Image from "next/image";
import Header from "./Header";

// Hero component
function Hero() {
  return (
    // Hero section with background image and styling
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      {/* Header component */}
      <Header />

      {/* Logo and main heading */}
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Pokemon Magic
        </h1>
      </div>

      {/* Image section */}
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/random.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
