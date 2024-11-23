import Nav from "@/components/NavBar";

export default function Logo() {
  return (
    <div className="space-y-8 px-8 py-12 bg-secondary text-primary">
      <Nav />
      <h1 className="text-5xl font-bold text-center underline decoration-white">
        Logo Design
      </h1>
      <p className="text-lg mb-8 text-center italic">
        This guide outlines the design principles and usage rules for our logo,
        ensuring consistent and effective brand representation.
      </p>

      {/* Design Rationale */}
      <section className="space-y-8 flex flex-col items-start">
        <h2 className="text-3xl font-semibold underline decoration-white">
          Design Rationale
        </h2>
        <div className="space-y-3 bg-white rounded-lg p-6 shadow-lg w-full">
          <p className="text-lg">
            The logo for our app combines a cute cat with a calming green color
            palette, carefully chosen to communicate comfort, trust, and warmth.
          </p>
          <ol className="space-y-4">
            <li>
              <p className="text-xl font-medium">1. Choice of Shape</p>
              <p className="mx-5">
                The cat represents qualities of comfort, affection, and
                emotional support, making it approachable and non-threatening,
                which is key for a mental health app.
              </p>
              <p className="mx-5">
                Its simple, friendly shape ensures easy recognition and
                scalability across various platforms.
              </p>
            </li>
            <li>
              <p className="text-xl font-medium ">2. Colour Palette</p>
              <p className="mx-5">
                Green is linked to healing, calmness, and nature, making it
                ideal for promoting mental wellness. The soft, gentle shade of
                green creates a peaceful and soothing atmosphere.
              </p>
            </li>
            <li>
              <p className="text-xl font-medium ">3. Font</p>
              <p className="mx-5">
                The Gaegu font features soft, rounded letterforms that are both
                friendly and approachable. It maintains readability while
                evoking a sense of warmth and comfort, aligning perfectly with
                the app’s goal to provide mental health support in a
                non-intimidating, welcoming manner.
              </p>
            </li>
            <li>
              <p className="text-xl font-medium ">4. Audience Connection</p>
              <p className="mx-5">
                The friendly, universal design appeals to users of all ages and
                backgrounds, fostering an emotional connection and promoting
                trust, essential for users seeking mental health support.
              </p>
            </li>
            <li>
              <p className="text-xl font-medium ">5. Adaptability</p>
              <p className="mx-5">
                The logo is scalable and works well in both large and small
                sizes, ensuring legibility in app icons, favicons, and other
                formats. Adequate clearspace around the logo maintains its
                visual integrity.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold underline decoration-white">
          Logo Variations
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Full Color Logo */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium ">1. Full-Color Logo</h3>
            <img
              src="/logos/full-color-logo.png"
              alt="Full Color Logo"
              className="w-64 mx-auto"
            />
          </div>

          {/* Black and White Logo */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium ">2. Black and White Logo</h3>
            <img
              src="/logos/black-white-logo.png"
              alt="Black and White Logo"
              className="w-64 mx-auto"
            />
          </div>

          {/* Greyscale Logo */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium ">3. Greyscale Logo</h3>
            <img
              src="/logos/greyscale-logo.png"
              alt="Greyscale Logo"
              className="w-64 mx-auto"
            />
          </div>

          {/* Monochrome Logo */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium ">4. Monochrome Logo</h3>
            <img
              src="/logos/monochrome-logo.png"
              alt="Monochrome Logo"
              className="w-64 mx-auto"
            />
          </div>

          {/* Stacked/Vertical Version */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium ">
              5. Stacked/Vertical Version
            </h3>
            <img
              src="/logos/full-color-logo.png"
              alt="Stacked Version of Full-Color Logo"
              className="w-64 mx-auto"
            />
          </div>

          {/* Horizontal Version */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg items-center">
            <div className="flex-1">
              <h3 className="text-xl font-medium ">6. Horizontal Version</h3>
            </div>
            <div className="flex-grow justify-center items-center">
              <img
                src="/logos/horizontal-logo.png"
                alt="Horizontal Version of Full-Color Logo"
                className="w-64 mx-auto"
              />
            </div>
          </div>

          {/* Favicon Variations */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium ">7. Favicon Variations</h3>
            <div className="flex space-x-6 justify-center">
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold ">16x16px</h4>
                <img
                  src="/favicons/favicon-16x16.png"
                  alt="Favicon 16x16"
                  className="w-4 h-4"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold ">32x32px</h4>
                <img
                  src="/favicons/favicon-32x32.png"
                  alt="Favicon 32x32"
                  className="w-8 h-8"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold ">48x48px</h4>
                <img
                  src="/favicons/favicon-48x48.png"
                  alt="Favicon 48x48"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
