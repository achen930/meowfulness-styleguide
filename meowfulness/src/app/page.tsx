"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleIndicatorClick = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = window.innerWidth;
      scrollContainerRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: "smooth",
      });
      setCurrentSection(index);
    }
  };

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const sectionWidth = window.innerWidth;

    if (scrollContainer) {
      const scrollLeft = scrollContainer.scrollLeft;
      const index = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const sectionWidth = window.innerWidth;
        let nextSection = (currentSection + 1) % 5;
        scrollContainerRef.current.scrollTo({
          left: nextSection * sectionWidth,
          behavior: "smooth",
        });
        setCurrentSection(nextSection);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSection]);

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll no-scrollbar h-screen bg-primary text-white"
        onScroll={handleScroll} // Attach the onScroll handler
      >
        <section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center">
          <Image
            src="/logos/full-color-logo.png"
            alt="Calm Cat"
            width={300}
            height={300}
            className="w-300 h-300 rounded-md object-fit"
          />
          <h1 className="text-4xl font-bold mt-4">Meowfulness</h1>
          <p className="mt-4 text-center max-w-sm">
            Your guide to staying calm, cute, and happy!
          </p>
          <Link
            href="/logo"
            className="mt-6 bg-accent text-primary font-semibold py-2 px-4 rounded-lg hover:bg-tertiary"
          >
            Explore Style Guide
          </Link>
        </section>
        <section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-secondary text-primary">
          <h2 className="text-3xl font-semibold">Logo</h2>
          <p className="mt-2 text-center max-w-md">
            Our logo reflects the calm and nurturing spirit of a cat.
          </p>
          <Link
            href="/logo"
            className="mt-4 bg-tertiary text-primary font-semibold py-2 px-4 rounded-lg hover:bg-accent hover:text-primary"
          >
            See Logo
          </Link>
        </section>
        <section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-primary">
          <h2 className="text-3xl font-semibold">Typography</h2>
          <p className="mt-2 text-center max-w-md">
            Find out the fonts that make our app both professional and playful.
          </p>
          <Link
            href="/typography"
            className="mt-4 bg-tertiary text-primary font-semibold py-2 px-4 rounded-lg"
          >
            See Typography
          </Link>
        </section>
        <section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-tertiary text-primary">
          <h2 className="text-3xl font-semibold">Graphics</h2>
          <p className="mt-2 text-center max-w-md">
            Playful illustrations that bring peace and joy.
          </p>
          <Link
            href="/graphics"
            className="mt-4 bg-primary text-white py-2 px-4 rounded-lg"
          >
            See Graphics
          </Link>
        </section>
        <section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-accent text-primary">
          <h2 className="text-3xl font-semibold">Colours</h2>
          <p className="mt-2 text-center max-w-md">
            Soothing, pastel colors that create a serene experience.
          </p>
          <Link
            href="/colour"
            className="mt-4 bg-tertiary text-primary font-semibold py-2 px-4 rounded-lg"
          >
            See Colors
          </Link>
        </section>
      </div>

      <div className="absolute flex justify-center gap-6 w-auto p-3 z-10 bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-full shadow-lg">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-4 h-4 rounded-full transform transition-all duration-300 ease-in-out ${
              currentSection === index
                ? "bg-tertiary scale-125 shadow-xl ring-[3px] ring-accent"
                : "bg-gray-300 hover:bg-gray-400 scale-100 hover:scale-110 hover:shadow-xl"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
