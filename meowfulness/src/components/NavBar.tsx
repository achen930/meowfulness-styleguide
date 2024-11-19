"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<div>
			<ul className="flex justify-between mx- font-medium">
				<Link
					href="/logo"
					className={
						pathname === "/logo"
							? "text-accent"
							: "hover:underline hover:decoration-accent hover:text-accent"
					}
				>
					<li>Logo</li>
				</Link>
				<Link
					href="/colour"
					className={
						pathname === "/colour"
							? "text-accent"
							: "hover:underline hover:decoration-accent hover:text-accent"
					}
				>
					<li>Colour</li>
				</Link>
				<Link
					href="/typography"
					className={
						pathname === "/typography"
							? "text-accent"
							: "hover:underline hover:decoration-accent hover:text-accent"
					}
				>
					<li>Typography</li>
				</Link>
				<Link
					href="/graphics"
					className={
						pathname === "/graphics"
							? "text-accent"
							: "hover:underline hover:decoration-accent hover:text-accent"
					}
				>
					<li>Graphics</li>
				</Link>
				<Link
					href="/references"
					className={
						pathname === "/references"
							? "text-accent"
							: "hover:underline hover:decoration-accent hover:text-accent"
					}
				>
					<li>References</li>
				</Link>
			</ul>
		</div>
	);
}
