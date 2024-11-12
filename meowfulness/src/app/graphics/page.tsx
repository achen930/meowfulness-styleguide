import Nav from "@/components/NavBar";
export default function Graphics() {
	return (
		<div className="space-y-8 px-8 py-12 bg-accent text-primary h-screen">
			<Nav />

			<h1 className="text-5xl font-bold text-center underline decoration-accent">
				Graphics
			</h1>

			<section className="space-y-8 flex flex-col items-center">
				<h2 className="text-3xl font-semibold">Icons</h2>
			</section>
			<section className="space-y-8 flex flex-col items-center">
				<h2 className="text-3xl font-semibold">Moods</h2>
			</section>
		</div>
	);
}
