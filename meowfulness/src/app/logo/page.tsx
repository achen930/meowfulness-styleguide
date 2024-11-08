import Nav from "@/components/NavBar";

export default function Logo() {
	return (
		<div className="space-y-12 p-8 py-12 bg-secondary text-white">
			<Nav />

			<h1 className="text-5xl font-bold text-center underline decoration-accent">
				Logo Design
			</h1>

			{/* Design Rationale */}
			<section className="space-y-8 flex flex-col items-center">
				<h2 className="text-3xl font-semibold text-gray-200">
					Design Rationale
				</h2>
				<p className="text-lg text-gray-300">
					The logo for our app combines a cute cat with a calming green color
					palette, carefully chosen to communicate comfort, trust, and warmth.
				</p>
				<ol className="space-y-4 pl-6">
					<li>
						<p className="text-xl font-medium text-gray-200">
							1. Choice of Shape
						</p>
						<p className="text-gray-300">
							The cat represents qualities of comfort, affection, and emotional
							support, making it approachable and non-threatening, which is key
							for a mental health app.
						</p>
						<p className="text-gray-300">
							Its simple, friendly shape ensures easy recognition and
							scalability across various platforms.
						</p>
					</li>
					<li>
						<p className="text-xl font-medium text-gray-200">
							2. Colour Palette
						</p>
						<p className="text-gray-300">
							Green is linked to healing, calmness, and nature, making it ideal
							for promoting mental wellness. The soft, gentle shade of green
							creates a peaceful and soothing atmosphere.
						</p>
					</li>
					<li>
						<p className="text-xl font-medium text-gray-200">3. Font</p>
						<p className="text-gray-300">
							The Gaegu font features soft, rounded letterforms that are both
							friendly and approachable. It maintains readability while evoking
							a sense of warmth and comfort, aligning perfectly with the app’s
							goal to provide mental health support in a non-intimidating,
							welcoming manner.
						</p>
					</li>
					<li>
						<p className="text-xl font-medium text-gray-200">
							4. Audience Connection
						</p>
						<p className="text-gray-300">
							The friendly, universal design appeals to users of all ages and
							backgrounds, fostering an emotional connection and promoting
							trust, essential for users seeking mental health support.
						</p>
					</li>
					<li>
						<p className="text-xl font-medium text-gray-200">5. Adaptability</p>
						<p className="text-gray-300">
							The logo is scalable and works well in both large and small sizes,
							ensuring legibility in app icons, favicons, and other formats.
							Adequate clearspace around the logo maintains its visual
							integrity.
						</p>
					</li>
				</ol>
			</section>

			{/* Logo Variations */}
			<section className="space-y-8">
				<h2 className="text-3xl font-semibold text-gray-200">
					Logo Variations
				</h2>

				{/* Full Color Logo */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						1. Full-Color Logo
					</h3>
					<img
						src="/logos/full-color-logo.png"
						alt="Full Color Logo"
						className="w-64 mx-auto"
					/>
				</div>

				{/* Black and White Logo */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						2. Black and White Logo
					</h3>
					<img
						src="/logos/black-white-logo.png"
						alt="Black and White Logo"
						className="w-64 mx-auto"
					/>
				</div>

				{/* Greyscale Logo */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						3. Greyscale Logo
					</h3>
					<img
						src="/logos/greyscale-logo.png"
						alt="Greyscale Logo"
						className="w-64 mx-auto"
					/>
				</div>

				{/* Monochrome Logo */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						4. Monochrome Logo
					</h3>
					<img
						src="/logos/monochrome-logo.png"
						alt="Monochrome Logo"
						className="w-64 mx-auto"
					/>
				</div>

				{/* Horizontal Version */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						5. Horizontal Version
					</h3>
					<img
						src="/logos/horizontal-logo.png"
						alt="Horizontal Version of Full-Color Logo"
						className="w-64 mx-auto"
					/>
				</div>

				{/* Stacked/Vertical Version */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						6. Stacked/Vertical Version
					</h3>
					<img
						src="/logos/full-color-logo.png"
						alt="Stacked Version of Full-Color Logo"
						className="w-64 mx-auto"
					/>
				</div>

				{/* Favicon Variations */}
				<div>
					<h3 className="text-xl font-medium text-gray-200">
						7. Favicon Variations
					</h3>
					<div className="flex space-x-6 justify-center">
						<div>
							<h4 className="text-lg font-semibold text-gray-200">16x16px</h4>
							<img
								src="/favicons/favicon-16x16.png"
								alt="Favicon 16x16"
								className="w-4 h-4"
							/>
						</div>
						<div>
							<h4 className="text-lg font-semibold text-gray-200">32x32px</h4>
							<img
								src="/favicons/favicon-32x32.png"
								alt="Favicon 32x32"
								className="w-8 h-8"
							/>
						</div>
						<div>
							<h4 className="text-lg font-semibold text-gray-200">48x48px</h4>
							<img
								src="/favicons/favicon-48x48.png"
								alt="Favicon 48x48"
								className="w-12 h-12"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
