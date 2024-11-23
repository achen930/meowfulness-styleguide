import Nav from "@/components/NavBar";
export default function Graphics() {
  return (
    <div className="space-y-8 px-8 py-12 bg-tertiary text-primary">
      <Nav />

      <h1 className="text-5xl font-bold text-center underline decoration-accent">
        Graphics
      </h1>
      <section>
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Inclusivity and Accessibility
        </h2>
        <div className="space-y-3 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Representation and Customizability
            </h3>
            <p>
              The cat mascot can be customized in terms of fur color, size, and
              accessories, which helps represent a diverse user base. By
              offering these variations, we cater to different preferences and
              cultural representations, ensuring that users see themselves in
              the mascot and feel welcomed.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Clear Iconography for All Users
            </h3>
            <p>
              Icons will have simple, recognizable shapes (e.g., home icon,
              journal, profile) and is visually appealing while passing contrast
              ratio to ensure readability and usability for users with vision
              impairments. Using vector-based icons ensures they remain sharp
              and recognizable even at small sizes.
            </p>
          </div>
          <div></div>
          <h3 className="text-2xl font-semibold text-primary">
            Figma Wireframing Kit
          </h3>
          <p>
            Using vector-based icons from a Figma wireframing kit ensures that
            icons can be scaled up or down without losing quality. This will
            help users with low vision who may rely on zooming in on elements
          </p>
          <p>
            Ensures icons are legible at various sizes ensuring that fine
            details aren't lost when icons are smaller and that icons are clear
            and distinct even at lower resolutions.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Labeling
        </h2>
        <div className="space-y-3 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <p>
            For any icons used for interactive elements such as the nav bar, we
            provide clear labels instead of solely relying on visual appearance.
            Labels and accessible hints like "Home" or "Profile" help users
            understand each icon's function.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Hover and Focus States
        </h2>
        <div className="space-y-3 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <div className="mt-8 flex flex-col items-center text-primary px-2">
            <div className="flex gap-1x justify-center bg-white rounded-lg p-4">
              <div className="flex justify-center items-center">
                <div className="hover:bg-secondary rounded-[100px] w-full h-full px-8 cursor-pointer">
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
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Consistent Feedback
            </h3>
            <p>
              We include visible states (hover, focus, active) to indicate
              interactivity. This helps users with cognitive or motor
              disabilities know that an icon is clickable or interactive. For
              example, applying a border or colour change for visual feedback.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Visual Appeal and Usability
        </h2>
        <div className="space-y-3 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Designed Elements for Better Focus
            </h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Consistent and Scalable Sizing
            </h3>
          </div>
        </div>
      </section>
      <section className="space-y-8 flex flex-col items-start">
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Icons
        </h2>
      </section>
      <section className="space-y-8 flex flex-col items-start">
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Moods
        </h2>
      </section>
    </div>
  );
}
