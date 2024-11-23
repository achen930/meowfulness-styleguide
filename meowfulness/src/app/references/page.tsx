import Nav from "@/components/NavBar";
export default function References() {
  return (
    <div className="min-h-screen space-y-8 px-8 py-12 bg-white text-primary">
      <Nav />
      <h1 className="text-5xl font-bold text-center underline decoration-secondary">
        References
      </h1>
      <p className="text-lg mb-8 text-center italic"></p>

      <section className="space-y-8 flex justify-center items-start w-full">
        <div className="flex flex-wrap gap-8 w-full">
          <a
            href="https://www.figma.com/community/file/1088059168988686975"
            className="text-primary font-medium text-lg hover:underline hover:text-black transition duration-200 w-full"
          >
            <div className="space-y-3 bg-secondary bg-opacity-80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary underline decoration-white">
                Base UI Components and Icons
              </h2>
              Wireframing Starter Kit - Tiago Gonçalves
            </div>
          </a>
          <a
            href="https://fonts.google.com/specimen/DM+Sans"
            className="text-primary font-medium text-lg hover:underline hover:text-black transition duration-200 w-full"
          >
            <div className="space-y-3 bg-secondary bg-opacity-80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary underline decoration-white">
                App Font
              </h2>
              DM-Sans - Colophon Foundry
            </div>
          </a>
          <a
            href="https://fonts.google.com/specimen/Gaegu"
            className="text-primary font-medium text-lg hover:underline hover:text-black transition duration-200 w-full"
          >
            <div className="space-y-3 bg-secondary bg-opacity-80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary underline decoration-white">
                Logo Font
              </h2>
              Gaegu - JIKJI SOFT
            </div>
          </a>
          <a
            href="https://coolors.co/"
            className="text-primary font-medium text-lg hover:underline hover:text-black transition duration-200 w-full"
          >
            <div className="space-y-3 bg-secondary bg-opacity-80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary underline decoration-white">
                Colours & Colour Inspiration
              </h2>
              Coolors
            </div>
          </a>
          <a
            href="https://www.recraft.ai/"
            className="text-primary font-medium text-lg hover:underline hover:text-black transition duration-200 w-full"
          >
            <div className="space-y-3 bg-secondary bg-opacity-80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary underline decoration-white">
                Mood Icons
              </h2>
              Recraft
            </div>
          </a>
          <a
            href="https://www.svgrepo.com/"
            className="text-primary font-medium text-lg hover:underline hover:text-black transition duration-200 w-full"
          >
            <div className="space-y-3 bg-secondary bg-opacity-80 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary underline decoration-white">
                Other Icons / Graphics
              </h2>
              SVG Repo
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
