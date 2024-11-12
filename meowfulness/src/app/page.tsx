import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex overflow-x-scroll no-scrollbar h-screen bg-primary text-white">
			<section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center">
				<Image
					src="/logos/full-color-logo.png"
					alt="Calm Cat"
					width={300}
					height={300}
					className="w-300 h-300 rounded-md object-fit"
				/>
				<h1 className="text-4xl font-bold mt-4">Meowfulness</h1>
				<p className="mt-4 text-center max-w-sm">
					Your guide to staying calm, cute, and happy!
				</p>
				<Link
					href="/logo"
					className="mt-6 bg-accent text-primary py-2 px-4 rounded-lg hover:bg-tertiary"
				>
					Explore Style Guide
				</Link>
			</section>
			<section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-secondary text-primary">
				<h2 className="text-3xl font-semibold">Logo</h2>
				<p className="mt-2 text-center max-w-md">
					Our logo reflects the calm and nurturing spirit of a cat.
				</p>
				<Link
					href="/logo"
					className="mt-4 bg-tertiary text-primary py-2 px-4 rounded-lg hover:bg-accent hover:text-primary"
				>
					See Logo
				</Link>
			</section>
			<section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-primary">
				<h2 className="text-3xl font-semibold">Typography</h2>
				<p className="mt-2 text-center max-w-md">
					Find out the fonts that make our app both professional and playful.
				</p>
				<Link
					href="/typography"
					className="mt-4 bg-tertiary text-primary py-2 px-4 rounded-lg"
				>
					See Typography
				</Link>
			</section>
			<section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-tertiary">
				<h2 className="text-3xl font-semibold">Graphics</h2>
				<p className="mt-2 text-center max-w-md">
					Playful illustrations that bring peace and joy.
				</p>
				<Link
					href="/graphics"
					className="mt-4 bg-primary text-white py-2 px-4 rounded-lg"
				>
					See Graphics
				</Link>
			</section>
			<section className="w-screen flex-shrink-0 p-8 flex flex-col items-center justify-center bg-accent text-primary">
				<h2 className="text-3xl font-semibold">Colours</h2>
				<p className="mt-2 text-center max-w-md">
					Soothing, pastel colors that create a serene experience.
				</p>
				<Link
					href="/colour"
					className="mt-4 bg-tertiary text-primary py-2 px-4 rounded-lg"
				>
					See Colors
				</Link>
			</section>
		</div>
	);
}
