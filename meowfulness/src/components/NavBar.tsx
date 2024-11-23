"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div
      className={
        pathname === "/typography"
          ? "border-tertiary border-2 rounded-lg p-6 shadow-lg"
          : "border-primary border-2 rounded-lg p-6 shadow-lg"
      }
    >
      <ul className="flex flex-wrap sm:flex-row flex-col sm:justify-between gap-2 font-medium text-[24px] mx-2 overflow-auto">
        <Link
          href="/"
          className={
            (pathname === "/logo"
              ? "hover:underline hover:decoration-black hover:text-black"
              : "hover:underline hover:decoration-accent hover:text-accent") +
            (pathname === "/colour" || pathname === "/references"
              ? "hover:underline hover:decoration-tertiary hover:text-tertiary"
              : "")
          }
        >
          <li>Home</li>
        </Link>
        <Link
          href="/logo"
          className={
            (pathname === "/logo"
              ? "text-black"
              : "hover:underline hover:decoration-accent hover:text-accent") +
            (pathname === "/colour" || pathname === "/references"
              ? "hover:underline hover:decoration-tertiary hover:text-tertiary"
              : "")
          }
        >
          <li>Logo</li>
        </Link>
        <Link
          href="/typography"
          className={
            (pathname === "/typography"
              ? "text-accent"
              : "hover:underline hover:decoration-accent hover:text-accent") +
            (pathname === "/colour" || pathname === "/references"
              ? "hover:underline hover:decoration-tertiary hover:text-tertiary"
              : "") +
            (pathname === "/logo"
              ? "hover:underline hover:decoration-black hover:text-black"
              : "")
          }
        >
          <li>Typography</li>
        </Link>
        <Link
          href="/graphics"
          className={
            (pathname === "/graphics"
              ? "text-accent"
              : "hover:underline hover:decoration-accent hover:text-accent") +
            (pathname === "/colour" || pathname === "/references"
              ? "hover:underline hover:decoration-tertiary hover:text-tertiary"
              : "") +
            (pathname === "/logo"
              ? "hover:underline hover:decoration-black hover:text-black"
              : "")
          }
        >
          <li>Graphics</li>
        </Link>
        <Link
          href="/colour"
          className={
            (pathname === "/colour"
              ? "text-tertiary"
              : "hover:underline hover:decoration-accent hover:text-accent") +
            (pathname === "/logo"
              ? "hover:underline hover:decoration-black hover:text-black"
              : "") +
            (pathname === "/references"
              ? "hover:underline hover:decoration-tertiary hover:text-tertiary"
              : "")
          }
        >
          <li>Colour</li>
        </Link>
        <Link
          href="/references"
          className={
            (pathname === "/references"
              ? "text-tertiary"
              : "hover:underline hover:decoration-accent hover:text-accent") +
            (pathname === "/colour"
              ? "hover:underline hover:decoration-tertiary hover:text-tertiary"
              : "") +
            (pathname === "/logo"
              ? "hover:underline hover:decoration-black hover:text-black"
              : "")
          }
        >
          <li>References</li>
        </Link>
      </ul>
    </div>
  );
}
