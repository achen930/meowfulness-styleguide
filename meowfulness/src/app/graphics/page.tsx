"use client";

import NavExample from "@/components/AppNavBarExample";
import Nav from "@/components/NavBar";
import { useState } from "react";
export default function Graphics() {
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  return (
    <div className="space-y-8 px-8 py-12 bg-tertiary text-primary">
      <Nav />

      <section>
        <h1 className="text-5xl font-bold text-center underline decoration-accent">
          Graphics
        </h1>
        <p className="text-lg mb-8 text-center italic text-primary mt-2">
          A guide detailing the graphic elements and design patterns that
          reinforce our visual identity and enhance the user experience.
        </p>
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
          <NavExample />
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
            <p>
              We designed components for better focus by prioritizing clarity
              and relevance. Our approach includes a hierarchical layout that
              directs attention to key information, while minimizing
              distractions to avoid overwhelming the user with unnecessary
              content. We use a simple layout to enhance the user experience by
              keeping the interface clean and straightforward. This allows users
              to navigate with minimal effort.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Consistent and Scalable Sizing
            </h3>
            <p>
              We use a consistent sizing that is also scalable across all our
              components. This ensures that the application adapts seamlessly to
              different screen sizes and devices. This approach maintains
              clarity and usability, regardless of the user's device.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Icons
        </h2>
        <div className="space-y-3 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="text-2xl font-semibold text-primary self-start">
              Icons with States
            </h3>
            <div className="flex bg-white shadow-md rounded-lg bg-opacity-80 p-4 my-4">
              <div
                className="mx-1 hover:cursor-pointer"
                onClick={() => setLiked(!liked)}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill={liked ? "#ED2939" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52 33.5253L32 53.3333L12 33.5253C10.6808 32.2416 9.6417 30.6987 8.94812 28.9937C8.25453 27.2887 7.92149 25.4585 7.96996 23.6185C8.01842 21.7784 8.44736 19.9683 9.22974 18.3022C10.0121 16.6361 11.131 15.15 12.516 13.9375C13.9009 12.7251 15.5219 11.8125 17.2768 11.2573C19.0318 10.702 20.8827 10.5162 22.713 10.7115C24.5433 10.9067 26.3133 11.4788 27.9117 12.3917C29.51 13.3047 30.902 14.5387 32 16.016C33.1027 14.5494 34.4964 13.3262 36.0936 12.4229C37.6908 11.5197 39.4573 10.9558 41.2825 10.7667C43.1076 10.5776 44.9522 10.7672 46.7007 11.3237C48.4492 11.8802 50.0641 12.7916 51.4441 14.001C52.8242 15.2103 53.9398 16.6914 54.7211 18.3517C55.5024 20.012 55.9326 21.8157 55.9848 23.6499C56.037 25.4841 55.71 27.3093 55.0243 29.0113C54.3387 30.7133 53.3091 32.2555 52 33.5413"
                    stroke={liked ? "#ED2939" : "#2B3A64"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="mx-1 hover:cursor-pointer"
                onClick={() => setBookmarked(!bookmarked)}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill={bookmarked ? "#FADA5E" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3334 13.3333C13.3334 10.3878 15.7212 8 18.6667 8H45.3334C48.2789 8 50.6667 10.3878 50.6667 13.3333V56L32 46.6667L13.3334 56V13.3333Z"
                    stroke={bookmarked ? "#FADA5E" : "#2B3A64"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-primary self-start">
              Additional Icon Examples
            </h3>
            <div className="flex bg-white shadow-md rounded-lg bg-opacity-80 p-4 my-4">
              <div className="mx-1">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 24V32M32 32V40M32 32H40M32 32H24M56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32Z"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mx-1">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.6193 13.9526L50.0474 23.3807M44.6193 9.95262C47.2228 7.34913 51.4439 7.34913 54.0474 9.95262C56.6508 12.5561 56.6508 16.7772 54.0474 19.3807L17.3335 56.0946H8.00012V46.5718L44.6193 9.95262Z"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mx-1">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 18.6667V8M42.6667 18.6667V8M18.6667 29.3333H45.3333M13.3333 56H50.6667C53.6122 56 56 53.6122 56 50.6667V18.6667C56 15.7211 53.6122 13.3333 50.6667 13.3333H13.3333C10.3878 13.3333 8 15.7211 8 18.6667V50.6667C8 53.6122 10.3878 56 13.3333 56Z"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mx-1">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5323 11.5128C28.6694 6.82906 35.3306 6.82906 36.4677 11.5128C37.2022 14.5385 40.6687 15.9743 43.3275 14.3543C47.4435 11.8464 52.1536 16.5565 49.6457 20.6725C48.0257 23.3313 49.4615 26.7978 52.4872 27.5323C57.1709 28.6694 57.1709 35.3306 52.4872 36.4677C49.4615 37.2022 48.0257 40.6687 49.6457 43.3275C52.1536 47.4435 47.4435 52.1536 43.3275 49.6457C40.6687 48.0257 37.2022 49.4615 36.4677 52.4872C35.3306 57.1709 28.6694 57.1709 27.5323 52.4872C26.7978 49.4615 23.3314 48.0257 20.6725 49.6457C16.5565 52.1536 11.8464 47.4435 14.3543 43.3275C15.9743 40.6687 14.5385 37.2022 11.5128 36.4677C6.82906 35.3306 6.82906 28.6694 11.5128 27.5323C14.5385 26.7978 15.9743 23.3313 14.3543 20.6725C11.8464 16.5565 16.5565 11.8464 20.6725 14.3543C23.3313 15.9743 26.7978 14.5385 27.5323 11.5128Z"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 32C40 36.4183 36.4183 40 32 40C27.5817 40 24 36.4183 24 32C24 27.5817 27.5817 24 32 24C36.4183 24 40 27.5817 40 32Z"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mx-1">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.8758 27.1242C32.7102 22.9586 25.9565 22.9586 21.7909 27.1242L11.1242 37.7909C6.9586 41.9565 6.9586 48.7102 11.1242 52.8758C15.2898 57.0414 22.0435 57.0414 26.2091 52.8758L29.1466 49.9383M27.1242 36.8758C31.2898 41.0414 38.0435 41.0414 42.2091 36.8758L52.8758 26.2091C57.0414 22.0435 57.0414 15.2898 52.8758 11.1242C48.7102 6.9586 41.9565 6.9586 37.7909 11.1242L34.8586 14.0565"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mx-1">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.6666 18.6667L48.3538 51.0467C48.1544 53.8376 45.8321 56 43.034 56H20.9659C18.1679 56 15.8455 53.8376 15.6461 51.0467L13.3333 18.6667M26.6666 29.3333V45.3333M37.3333 29.3333V45.3333M40 18.6667V10.6667C40 9.19391 38.8061 8 37.3333 8H26.6666C25.1939 8 24 9.19391 24 10.6667V18.6667M10.6666 18.6667H53.3333"
                    stroke="#2B3A64"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Style and Design Choice
            </h3>
            <p>
              We chose an icon set with a minimalist style for icon simplicity
              and ease of recognition. The clean design makes it instantly
              recognizable, while familiar shapes ensure users can quickly
              understand the meaning. This enhances clarity and improves the
              overall user experience.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold underline decoration-accent mb-4">
          Moods
        </h2>
        <div className="space-y-3 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-semibold text-primary"></h3>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}
