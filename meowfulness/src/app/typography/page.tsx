import Nav from "@/components/NavBar";
import { FaQuoteLeft } from "react-icons/fa";

export default function Typography() {
	return (
		<div className="bg-primary min-h-screen text-white px-8 py-12">
			<Nav />
			<section className="mt-8 flex flex-col items-center text-white">
				<h1 className="font-bold text-5xl mb-4 underline decoration-accent">
					Typography Style Guide
				</h1>
				<p className="text-lg mb-8 text-center max-w-xl italic text-white">
					A guide showcasing the typography styles and creative choices that
					give our application its unique character.
				</p>

				{/* Font Overview */}
				<div className="w-full max-w-3xl space-y-12 text-center">
					{/* Headers Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Headers
						</h2>
						<div className="space-y-3 bg-secondary bg-opacity-20 rounded-lg p-6 shadow-lg">
							<h1 className="text-5xl font-bold text-white">
								H1 - DM Sans Bold 5xl
							</h1>
							<h2 className="text-4xl font-semibold text-white">
								H2 - DM Sans SemiBold 4xl
							</h2>
							<h3 className="text-3xl font-semibold text-white">
								H3 - DM Sans SemiBold 3xl
							</h3>
							<h4 className="text-2xl font-medium text-white">
								H4 - DM Sans Medium 2xl
							</h4>
							<h5 className="text-xl font-medium text-white">
								H5 - DM Sans Medium xl
							</h5>
							<h6 className="text-lg font-medium text-white">
								H6 - DM Sans Medium lg
							</h6>
						</div>
					</div>

					{/* Paragraphs Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Paragraphs
						</h2>
						<p className="text-base font-normal bg-tertiary bg-opacity-20 p-6 rounded-lg shadow-lg text-white">
							This is a sample paragraph styled with "DM Sans" in normal weight.
							The choice of DM Sans offers a clean and modern look, perfect for
							easy readability across devices.
						</p>
					</div>

					{/* Links Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Links
						</h2>
						<div className="bg-secondary bg-opacity-20 p-6 rounded-lg shadow-lg">
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
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Navigation Menu
						</h2>
						<nav className="text-lg space-x-8 bg-secondary bg-opacity-20 rounded-lg p-4 shadow-lg">
							<a
								href="#"
								className="font-semibold text-white hover:text-accent transition duration-200"
							>
								Home
							</a>
							<a
								href="#"
								className="font-semibold text-white hover:text-accent transition duration-200"
							>
								About
							</a>
							<a
								href="#"
								className="font-semibold text-white hover:text-accent transition duration-200"
							>
								Contact
							</a>
							<p className="text-sm italic mt-2 text-white">
								Hover over the link to see the rollover style.
							</p>
						</nav>
					</div>

					{/* Blockquotes Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Blockquotes
						</h2>
						<blockquote className="border-l-4 border-secondary pl-4 italic text-lg font-light bg-secondary bg-opacity-20 p-4 rounded-lg shadow-lg flex items-center text-white">
							<FaQuoteLeft className="text-accent mr-3" />
							"This is a blockquote styled for emphasis and readability."
						</blockquote>
					</div>

					{/* Lists Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Lists
						</h2>
						<ul className="list-disc list-inside space-y-2 text-base bg-secondary bg-opacity-20 rounded-lg p-4 shadow-lg">
							<li className="text-white">First item</li>
							<li className="text-white">Second item</li>
							<li className="text-white">Third item</li>
						</ul>
					</div>

					{/* Tables Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Tables
						</h2>
						<table className="w-full border-collapse border border-secondary text-base bg-primary rounded-lg shadow-lg">
							<thead>
								<tr className="bg-secondary text-white">
									<th className="border border-secondary px-4 py-2">
										Column 1
									</th>
									<th className="border border-secondary px-4 py-2">
										Column 2
									</th>
									<th className="border border-secondary px-4 py-2">
										Column 3
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border border-secondary px-4 py-2 text-white">
										Row 1, Col 1
									</td>
									<td className="border border-secondary px-4 py-2 text-white">
										Row 1, Col 2
									</td>
									<td className="border border-secondary px-4 py-2 text-white">
										Row 1, Col 3
									</td>
								</tr>
								<tr className="bg-secondary bg-opacity-10">
									<td className="border border-secondary px-4 py-2 text-white">
										Row 2, Col 1
									</td>
									<td className="border border-secondary px-4 py-2 text-white">
										Row 2, Col 2
									</td>
									<td className="border border-secondary px-4 py-2 text-white">
										Row 2, Col 3
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Forms Section */}
					<div>
						<h2 className="text-3xl font-semibold text-accent mb-4 underline decoration-white">
							Forms
						</h2>
						<form className="space-y-4 bg-tertiary bg-opacity-20 p-6 rounded-lg shadow-lg">
							<label className="block text-lg font-medium text-white">
								Name
							</label>
							<input
								type="text"
								className="w-full border border-secondary bg-white text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
								placeholder="Enter your name"
							/>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
