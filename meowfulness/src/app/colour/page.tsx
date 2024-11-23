import NavExample from "@/components/AppNavBarExample";
import Nav from "@/components/NavBar";

export default function Colour() {
  const colors = [
    {
      name: "Primary",
      hex: "#2B3A64",
      description: "Main background color, conveying a calm, grounded feel.",
      reasoning:
        "Chosen for its deep, balanced tone that contrasts effectively with light text, meeting AA standards for readability and providing a calming, stable background.",
    },
    {
      name: "Secondary",
      hex: "#CCD5AE",
      description:
        "Secondary accents supporting a natural, balanced aesthetic.",
      reasoning:
        "Selected for its soft, earthy hue, adding a natural touch that complements the primary color. Its contrast with primary text also meets AA requirements, ensuring readability.",
    },
    {
      name: "Tertiary",
      hex: "#93B5F0",
      description:
        "Highlight color used to draw attention to important sections without overwhelming.",
      reasoning:
        "Offers a gentle contrast that is visually engaging, enhancing focus on highlighted areas. The color pairs well with primary text to meet AA standards for legibility.",
    },
    {
      name: "Accent",
      hex: "#FFEBED",
      description:
        "Accent color for interactive elements, bringing a fresh, vibrant touch.",
      reasoning:
        "Selected for its soft warmth, the accent color stands out subtly, providing a clear visual cue without overpowering. Meets AA contrast standards with primary text for clarity and usability.",
    },
  ];

  const getTextColor = (hex: string) => {
    return hex === "#2B3A64" ? "white" : "primary";
  };
  return (
    <div className="bg-accent min-h-screen w-full px-8 py-12 text-primary">
      <Nav />
      <section className="mt-8 flex flex-col items-center text-primary px-2">
        <h1 className="font-bold text-5xl mb-4 underline decoration-tertiary">
          Colour Style Guide
        </h1>

        <p className="text-lg mb-8 text-center italic">
          This guide details the colour palette and accessibility considerations
          to ensure a visually cohesive and inclusive design.
        </p>

        {/* Palette Explanation */}
        <h2 className="text-3xl font-bold underline decoration-tertiary mb-4 self-start">
          Colour Palette Rationale
        </h2>
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4 mb-8">
          <p className="text-lg text-center bg-primary text-white rounded-lg shadow-lg	px-2 py-4">
            Our primary colour, a rich, deep blue, creates a sense of stability
            and trust, which is essential in an app focused on wellness. The
            darker tone provides strong contrast for readability, while evoking
            calmness and security, essential for a mental health-focused
            application.
          </p>
          <p className="text-lg text-center bg-secondary text-primary rounded-lg shadow-lg px-2 py-4">
            Our secondary colour, a soft sage green, introduces a touch of
            nature-inspired calmness and balance to the palette. This green is
            welcoming and gentle on the eyes, reinforcing a soothing atmosphere.
            It subtly highlights elements without overpowering them, creating a
            cohesive, calming user experience.
          </p>
          <p className="text-lg text-center bg-tertiary text-primary rounded-lg shadow-lg px-2 py-4">
            Our tertiary colour, a soft light blue, adding a layer of freshness
            and lightness to the palette. Blue tones are often associated with
            relaxation and mental clarity, making it an ideal choice to
            reinforce themes of well-being and emotional support. It provides a
            gentle contrast that harmonizes well with both the primary and
            secondary colours.
          </p>
          <p className="text-lg text-center bg-accent text-primary rounded-lg shadow-lg px-2 py-4">
            Our accent color, a soft, warm pink, adds a touch of warmth and
            approachability. This color complements the coolness of the primary
            and tertiary tones, balancing the palette and bringing subtle visual
            interest. It is used sparingly to highlight interactive elements or
            calls to action, making the app feel more welcoming and emotionally
            engaging.
          </p>
        </div>

        {/* Color Palette Cards */}
        <div className="w-full grid gap-8 sm:grid-cols-2 md:grid-cols-2 bg-white p-4 rounded-lg shadow-lg">
          {colors.map((color) => (
            <div
              key={color.name}
              className="min-w-0 w-full p-6 rounded-lg shadow-lg text-center space-y-4 overflow-hidden"
              style={{ backgroundColor: color.hex }}
            >
              <div
                className={`font-bold text-2xl sm:text-xl md:text-2xl underline decoration-${getTextColor} text-${getTextColor(
                  color.hex
                )} break-words`}
              >
                {color.name}
              </div>
              <p
                className={`text-sm sm:text-base font-light italic text-${getTextColor(
                  color.hex
                )} break-words`}
              >
                {color.description}
              </p>
              <div
                className={`text-sm sm:text-base font-medium mt-2 text-${getTextColor(
                  color.hex
                )} break-words`}
              >
                {color.hex}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <h2 className="text-3xl font-bold mt-16 mb-4 underline decoration-tertiary self-start">
          Usage Examples
        </h2>
        {/* Button Variations */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-lg space-y-3 mb-4 md:mb-0 md:mr-4">
            <p className="text-lg font-semibold self-start">
              Button Variations
            </p>
            <div className="flex flex-row flex-wrap w-full justify-center gap-4">
              <div className="min-w-[206px] flex justify-center items-center bg-white p-4 rounded">
                <button className="px-4 py-2 bg-primary text-white font-bold rounded w-full">
                  Primary Button
                </button>
              </div>
              <div className="min-w-[206px] flex justify-center items-center bg-white p-4 rounded">
                <button className="px-4 py-2 bg-secondary text-primary font-bold rounded w-full">
                  Secondary Button
                </button>
              </div>
              <div className="min-w-[206px] flex justify-center items-center bg-primary p-4 rounded">
                <button className="px-4 py-2 bg-primary text-white border-2 border-white font-bold rounded w-full">
                  Outlined Button
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-lg space-y-3 mt-4 md:mt-0 md:ml-4">
            <p className="text-lg font-semibold self-start">
              Disabled Button Variations
            </p>
            <div className="flex flex-row flex-wrap w-full justify-center gap-4">
              <div className="bg-white p-4 rounded min-w-[206px]">
                <button className="px-4 py-2 bg-primary bg-opacity-70 text-white font-bold rounded cursor-not-allowed w-full">
                  Primary Button
                </button>
              </div>
              <div className="bg-white p-4 rounded min-w-[206px]">
                <button className="px-4 py-2 bg-secondary bg-opacity-70 text-primary font-bold rounded cursor-not-allowed w-full">
                  Secondary Button
                </button>
              </div>
              <div className="bg-primary p-4 rounded min-w-[206px]">
                <button className="px-4 py-2 bg-primary text-white text-opacity-70 border-2 border-white border-opacity-70 font-bold rounded cursor-not-allowed w-full">
                  Outlined Button
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Text on Solid Color Backgrounds */}
        <div className="flex flex-col bg-white rounded-lg p-6 justify-center w-full mt-8 shadow-lg">
          <p className="text-lg font-semibold">Text on Colour Backgrounds</p>
          <div className="mt-6 grid grid-rows-4 gap-4">
            <div className="p-4 bg-primary text-white font-medium rounded shadow-md">
              Text on Primary Background
            </div>
            <div className="p-4 bg-secondary text-primary font-medium rounded shadow-md">
              Text on Secondary Background
            </div>
            <div className="p-4 bg-tertiary text-primary font-medium rounded shadow-md">
              Text on Tertiary Background
            </div>
            <div className="p-4 bg-accent text-primary font-medium rounded shadow-md">
              Text on Accent Background
            </div>
          </div>
        </div>

        {/* Nav Icon Examples  */}
        <div className="mt-12 w-full flex">
          <div className="w-full flex-col gap-1x justify-center bg-white rounded-lg p-4">
            <p className="text-lg font-semibold mb-4">Nav Icons</p>
            <div className="flex justify-center items-center">
              <NavExample />
            </div>
          </div>
        </div>

        {/* Accessibility and Contrast Check */}
        <h2 className="text-3xl font-bold mt-16 mb-4 underline decoration-tertiary self-start">
          Colour Accessibility
        </h2>
        <p className="text-lg text-left self-start">
          Below are screenshots and results from our contrast checks, ensuring
          accessible text and background combinations. Each combination has been
          tested for a minimum contrast ratio of 4.5:1 to meet WCAG AA
          guidelines for normal text.
        </p>

        <div className="mt-8 w-full grid gap-4 grid-cols-2">
          {colors.map((color) => (
            <div
              key={color.name}
              className="space-y-4 text-center bg-white shadow-lg rounded-lg p-4"
            >
              <p className="text-lg font-bold">{color.name} Contrast</p>
              <img
                src={`/contrast-checks/${color.name.toLowerCase()}-contrast.png`}
                alt={`${color.name} contrast check`}
                className="w-full rounded-lg"
              />
              <p className="text-sm text-primary">{color.reasoning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
