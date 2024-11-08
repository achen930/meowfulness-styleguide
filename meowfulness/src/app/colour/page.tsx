import Nav from "@/components/NavBar";

export default function Colour() {
	const colors = [
		{
			name: "Primary",
			hex: "#344E41",
			description: "Main background color, conveying a calm, grounded feel.",
			reasoning:
				"Passes AA for text on primary background due to good contrast ratio with light text.",
		},
		{
			name: "Secondary",
			hex: "#3A5A40",
			description:
				"Used for secondary accents, supporting a natural, balanced aesthetic.",
			reasoning:
				"Passes AA for text on secondary background, providing a balanced contrast.",
		},
		{
			name: "Tertiary",
			hex: "#588157",
			description:
				"Highlights sections for added visual interest without overwhelming the design.",
			reasoning:
				"Passes AA for text on tertiary background with adequate contrast.",
		},
		{
			name: "Accent",
			hex: "#A3B18A",
			description:
				"Accent for interactive elements like buttons, providing a fresh and vibrant touch.",
			reasoning:
				"Passes AA for text on accent background; ensures readability and clarity.",
		},
	];

	const getTextColor = (hex: string) => {
		return hex === "#A3B18A" || hex === "#FFFFFF" ? "text-black" : "text-white";
	};

	return (
		<div className="bg-tertiary min-h-screen w-full text-white px-8 py-12">
			<Nav />
			<section className="mt-8 flex flex-col items-center text-white px-2">
				<h1 className="font-bold text-5xl mb-4 underline decoration-accent">
					Colour Style Guide
				</h1>

				<p className="text-lg mb-8 text-center italic">
					This guide details the colour palette and accessibility considerations
					to ensure a visually cohesive and inclusive design.
				</p>

				{/* Palette Explanation */}
				<h2 className="text-3xl font-bold underline decoration-accent mb-4">
					Color Palette Rationale
				</h2>
				<p className="text-lg mb-8 text-center">
					Our color palette centers around green tones to bring a sense of
					nature, balance, and calmness to our app, creating a soothing
					environment that promotes relaxation and reduces anxiety. Green&apos;s
					natural associations with growth and renewal subtly reinforce themes
					of personal growth and healing, making our app feel grounded and
					supportive.
				</p>
				<p className="text-lg mb-8 text-center">
					Psychologically, green promotes balance and harmony, helping users
					feel centered as they navigate mental health challenges. It&apos;s
					also gentle on the eyes, making it comfortable for prolonged use, and
					symbolically aligns with health and well-being, reinforcing positive,
					wellness-focused interactions within the app.
				</p>

				{/* Color Palette Cards */}
				<div className="w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					{colors.map((color) => (
						<div
							key={color.name}
							className="p-6 rounded-lg shadow-lg text-center space-y-4"
							style={{ backgroundColor: color.hex }}
						>
							<div className="font-bold text-2xl underline decoration-white">
								{color.name}
							</div>
							<p
								className={`text-sm font-light italic ${getTextColor(
									color.hex
								)}`}
							>
								{color.description}
							</p>
							<div
								className={`text-sm font-medium mt-2 ${getTextColor(
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
						<div className="flex space-x-4 bg-white rounded">
							<button className="px-4 py-2 bg-secondary text-white font-bold rounded">
								Primary Button
							</button>
							<button className="px-4 py-2 bg-primary text-white font-bold rounded">
								Secondary Button
							</button>
							<button className="px-4 py-2 bg-white text-secondary text-opacity-60 border-2 border-opacity-60 border-secondary bg-opacity-60 font-bold rounded cursor-not-allowed">
								Disabled Button
							</button>
						</div>
					</div>

					{/* Text on Solid Color Backgrounds */}
					<div className="space-y-4">
						<p className="text-lg font-semibold">Text on Colour Backgrounds</p>
						<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2">
							<div className="p-4 bg-primary text-white font-medium rounded">
								Text on Primary Background
							</div>
							<div className="p-4 bg-secondary text-white font-medium rounded">
								Text on Secondary Background
							</div>
							<div className="p-4 bg-tertiary text-black font-medium rounded shadow-md">
								Text on Tertiary Background
							</div>
							<div className="p-4 bg-accent text-black font-medium rounded">
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

				<div className="mt-8 w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					{/* Replace placeholders with actual contrast check screenshots */}
					{colors.map((color) => (
						<div key={color.name} className="space-y-2 text-center">
							<img
								src={`/contrast-checks/${color.name.toLowerCase()}-contrast.png`}
								alt={`${color.name} contrast check`}
								className="w-full rounded-lg"
							/>
							<p className="text-lg font-medium">{color.name} Contrast</p>
							<p className="text-sm italic">{color.reasoning}</p>
						</div>
					))}
					<div className="space-y-2 text-center">
						<img
							src="/contrast-checks/navicons-contrast.png"
							alt="Nav Icons contrast check"
							className="w-full rounded-lg"
						/>
						<p className="text-lg font-medium">Nav Icon Contrast</p>
						<p className="text-sm italic">
							Used as the accent color for the background, with icons in the
							primary color for contrast.
						</p>
						<p className="text-sm italic">
							While this combination does not meet the AA contrast ratio
							standards for text, the WCAG guidelines do not specifically
							account for icons and stroke width, which may still provide
							sufficient visibility depending on the design and context.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
