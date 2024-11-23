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
              <div className="hover:bg-secondary rounded-[100px] w-fit h-full px-8 cursor-pointer">
                <svg
                  width="71"
                  height="72"
                  viewBox="0 0 71 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.5552 60.9375C47.2594 61.0875 46.9265 61.2375 46.5937 61.3875C45.4844 61.875 44.375 62.2875 43.2286 62.625C29.8792 66.6 15.938 59.8125 10.4651 47.25C11.6484 45.525 13.2015 44.025 14.8286 42.7875C14.5328 39.825 15.1984 36.825 17.3062 33.675C20.7083 34.6875 23.6297 36.525 25.9594 39.225C29.7312 38.5125 33.3552 39.075 36.8312 40.5375C39.9005 38.9625 42.8219 38.1 45.5583 38.2125C45.8541 38.175 46.15 38.4 46.2239 38.7375C46.8156 42 46.5198 45.0375 45.2255 47.8125C47.1854 52.125 48.4797 56.7 47.5552 60.9375Z"
                    stroke="#2B3A64"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1135 51.15C23.3389 51.15 24.3323 50.1427 24.3323 48.9C24.3323 47.6574 23.3389 46.65 22.1135 46.65C20.8881 46.65 19.8948 47.6574 19.8948 48.9C19.8948 50.1427 20.8881 51.15 22.1135 51.15Z"
                    fill="#2B3A64"
                  />
                  <path
                    d="M37.1271 53.2875C38.3525 53.2875 39.3458 52.2801 39.3458 51.0375C39.3458 49.7948 38.3525 48.7875 37.1271 48.7875C35.9017 48.7875 34.9083 49.7948 34.9083 51.0375C34.9083 52.2801 35.9017 53.2875 37.1271 53.2875Z"
                    fill="#2B3A64"
                  />
                  <path
                    d="M47.5552 60.9375C47.2594 61.0875 46.9266 61.2375 46.5938 61.3875C45.4844 61.875 44.375 62.2875 43.2287 62.625C29.8792 66.6 15.938 59.8125 10.4651 47.25C10.2802 46.8 10.0953 46.35 9.91044 45.8625C9.68857 45.1875 9.42971 44.5125 9.24482 43.8375C4.99221 29.1375 13.2755 13.725 27.7714 9.37502C42.2672 5.06252 57.4656 13.425 61.7552 28.1625C65.5641 41.325 59.3146 55.0875 47.5552 60.9375Z"
                    stroke="#2B3A64"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M45.3734 48.225L52.5843 43.9875V27.75L38.7172 19.6125L24.85 27.75V36.975"
                    stroke="#2B3A64"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
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
