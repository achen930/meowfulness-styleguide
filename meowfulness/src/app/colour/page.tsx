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
		<div className="bg-tertiary min-h-screen w-full px-8 py-12">
			<Nav />
			<section className="mt-8 flex flex-col items-center text-primary px-2">
				<h1 className="font-bold text-5xl mb-4 underline decoration-accent">
					Colour Style Guide
				</h1>

				<p className="text-lg mb-8 text-center italic">
					This guide details the colour palette and accessibility considerations
					to ensure a visually cohesive and inclusive design.
				</p>

				{/* Palette Explanation */}
				<h2 className="text-3xl font-bold underline decoration-accent mb-4">
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
							className="p-6 rounded-lg shadow-lg text-center space-y-4"
							style={{ backgroundColor: color.hex }}
						>
							<div
								className={`font-bold text-2xl underline decoration-${getTextColor} text-${getTextColor(
									color.hex
								)}`}
							>
								{color.name}
							</div>
							<p
								className={`text-sm font-light italic text-${getTextColor(
									color.hex
								)}`}
							>
								{color.description}
							</p>
							<div
								className={`text-sm font-medium mt-2 text-${getTextColor(
									color.hex
								)}`}
							>
								{color.hex}
							</div>
						</div>
					))}
				</div>

				{/* Usage Examples */}
				<h2 className="text-3xl font-bold mt-16 mb-4 underline decoration-accent">
					Usage Examples
				</h2>
				<div className="flex flex-col items-center space-y-8">
					{/* Button Variations */}
					<div className="space-y-4">
						<p className="text-lg font-semibold">Button Variations</p>
						<div className="flex space-x-4 bg-white rounded-lg p-4 shadow-lg">
							<button className="px-4 py-2 bg-primary text-white font-bold rounded">
								Primary Button
							</button>
							<button className="px-4 py-2 bg-secondary text-primary font-bold rounded">
								Secondary Button
							</button>
							<button className="px-4 py-2 bg-white text-primary border-2 border-primary font-bold rounded">
								Outlined Button
							</button>
						</div>
						<p className="text-lg font-semibold">Disabled Button Variations</p>
						<div className="flex space-x-4 bg-white rounded-lg p-4 shadow-lg">
							<button className="px-4 py-2 bg-primary bg-opacity-70 text-white font-bold rounded cursor-not-allowed">
								Primary Button
							</button>
							<button className="px-4 py-2 bg-secondary bg-opacity-70 text-primary font-bold rounded cursor-not-allowed">
								Secondary Button
							</button>
							<button className="px-4 py-2 bg-white text-primary text-opacity-70 border-2 border-primary border-opacity-70 font-bold rounded cursor-not-allowed">
								Outlined Button
							</button>
						</div>
					</div>

					{/* Text on Solid Color Backgrounds */}
					<div className="space-y-4">
						<p className="text-lg font-semibold">Text on Colour Backgrounds</p>
						<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 bg-white rounded-lg shadow-lg p-4">
							<div className="p-4 bg-primary text-white font-medium rounded">
								Text on Primary Background
							</div>
							<div className="p-4 bg-secondary text-primary font-medium rounded">
								Text on Secondary Background
							</div>
							<div className="p-4 bg-tertiary text-primary font-medium rounded shadow-md">
								Text on Tertiary Background
							</div>
							<div className="p-4 bg-accent text-primary font-medium rounded">
								Text on Accent Background
							</div>
						</div>
					</div>

					{/* Nav Icon Examples  */}
					<div className="mt-12">
						<p className="text-lg font-semibold mb-4">Nav Icons</p>
						<div className="flex gap-1x justify-center bg-white rounded-lg">
							<div className="flex justify-center items-center">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
										stroke="#344E41"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="flex justify-center items-center">
								<svg
									width="24"
									height="24"
									viewBox="0 0 32 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<ellipse cx="16" cy="14" rx="16" ry="14" fill="#A3B18A" />
									<path
										d="M7 14L9 12M9 12L16 5L23 12M9 12V22C9 22.5523 9.44772 23 10 23H13M23 12L25 14M23 12V22C23 22.5523 22.5523 23 22 23H19M13 23C13.5523 23 14 22.5523 14 22V18C14 17.4477 14.4477 17 15 17H17C17.5523 17 18 17.4477 18 18V22C18 22.5523 18.4477 23 19 23M13 23H19"
										stroke="#344E41"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Accessibility and Contrast Check */}
				<h2 className="text-3xl font-bold mt-16 mb-4 underline decoration-accent">
					Colour Accessibility
				</h2>
				<p className="text-lg text-center">
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
							<p className="text-sm">{color.reasoning}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
