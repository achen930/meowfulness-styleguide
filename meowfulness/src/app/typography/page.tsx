import Nav from "@/components/NavBar";
import { FaQuoteLeft } from "react-icons/fa";

export default function Typography() {
  return (
    <div className="bg-primary text-white px-8 py-12 text-center">
      <Nav />
      <section className="mt-8 flex flex-col items-center text-white px-2">
        <h1 className="font-bold text-5xl mb-4 underline decoration-tertiary">
          Typography Style Guide
        </h1>
        <p className="text-lg mb-8 text-center italic text-white">
          A guide showcasing the typography styles and creative choices that
          give our application its unique character.
        </p>

        {/* Font Overview */}
        <div className="w-full space-y-12 text-start">
          {/* Headers Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 underline decoration-tertiary">
              Headers
            </h2>
            <div className="space-y-3 bg-tertiary bg-opacity-20 rounded-lg p-6 shadow-lg">
              <h1 className="text-[28px] font-semibold text-white">
                H1 - DM Sans Semibold 28px
              </h1>
              <h2 className="text-[24px] font-medium text-white">
                H2 - DM Sans Medium 24px
              </h2>
              <h3 className="text-[20px] font-semibold text-white">
                H3 - DM Sans SemiBold 20px
              </h3>
              <h4 className="text-[18px] font-medium text-white">
                H4 - DM Sans Medium 18px
              </h4>
              <h5 className="text-[16px] font-medium text-white">
                H5 - DM Sans Medium 16px
              </h5>
              <h6 className="text-[15px] font-medium text-white">
                H6 - DM Sans Medium 15px
              </h6>
              <p className="text-[12px] font-normal text-white">Subtitle</p>
              <p className="text-[16px] font-semibold text-white">
                Button Text
              </p>
            </div>
          </div>

          {/* Paragraphs Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 underline decoration-tertiary">
              Paragraphs
            </h2>
            <p className="text-[14px] font-medium bg-tertiary bg-opacity-20 p-6 rounded-lg shadow-lg text-white">
              This is a sample paragraph styled with "DM Sans" in medium weight.
              The choice of DM Sans offers a clean and modern look, perfect for
              easy readability across devices.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 underline decoration-tertiary">
              Links
            </h2>
            <div className="bg-tertiary bg-opacity-20 p-6 rounded-lg shadow-lg">
              <a
                href="#"
                className="text-white font-medium text-lg hover:underline hover:text-accent transition duration-200"
              >
                This is a styled link with a smooth hover effect
              </a>
              <p className="text-sm italic mt-2 text-white">
                Hover over the link to see the rollover style.
              </p>
            </div>
          </div>

          {/* Navigation Menu Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 underline decoration-tertiary">
              Navigation Menu
            </h2>
            <nav className="text-lg space-x-8 bg-tertiary bg-opacity-20 rounded-lg p-4 shadow-lg">
              <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
                <a className="font-semibold text-white hover:text-accent transition duration-200">
                  Home
                </a>
                <a className="font-semibold text-white hover:text-accent transition duration-200">
                  About
                </a>
                <a className="font-semibold text-white hover:text-accent transition duration-200">
                  Contact
                </a>
              </div>
              <p className="text-sm italic mt-2 text-white text-left sm:text-left">
                Hover over the link to see the rollover style.
              </p>
            </nav>
          </div>

          {/* Blockquotes Section */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4 underline decoration-tertiary">
              Blockquotes
            </h2>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-lg font-light bg-tertiary bg-opacity-20 p-4 rounded-lg shadow-lg flex items-center text-white">
              <FaQuoteLeft className="text-accent mr-3" />
              &quot;This is a blockquote styled for emphasis and
              readability.&quot;
            </blockquote>
          </div>

          {/* Lists Section */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4 underline decoration-tertiary">
              Lists
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base bg-tertiary bg-opacity-20 rounded-lg p-4 shadow-lg">
              <li className="text-white">First item</li>
              <li className="text-white">Second item</li>
              <li className="text-white">Third item</li>
            </ul>
          </div>

          {/* Tables Section */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4 underline decoration-tertiary">
              Tables
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-tertiary text-base bg-primary rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-tertiary bg-opacity-40 text-white">
                    <th className="border border-tertiary px-4 py-2">
                      Column 1
                    </th>
                    <th className="border border-tertiary px-4 py-2">
                      Column 2
                    </th>
                    <th className="border border-tertiary px-4 py-2">
                      Column 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-tertiary px-4 py-2 text-white">
                      Row 1, Col 1
                    </td>
                    <td className="border border-tertiary px-4 py-2 text-white">
                      Row 1, Col 2
                    </td>
                    <td className="border border-tertiary px-4 py-2 text-white">
                      Row 1, Col 3
                    </td>
                  </tr>
                  <tr className="bg-tertiary bg-opacity-10">
                    <td className="border border-tertiary px-4 py-2 text-white">
                      Row 2, Col 1
                    </td>
                    <td className="border border-tertiary px-4 py-2 text-white">
                      Row 2, Col 2
                    </td>
                    <td className="border border-tertiary px-4 py-2 text-white">
                      Row 2, Col 3
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Forms Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 underline decoration-tertiary">
              Forms
            </h2>
            <form className="space-y-4 bg-tertiary bg-opacity-20 p-6 rounded-lg shadow-lg">
              <label className="block text-lg font-medium text-white">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-tertiary bg-white text-primary px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                placeholder="Enter your name"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
