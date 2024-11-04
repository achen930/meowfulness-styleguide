import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul className="flex justify-between mx-4">
        <Link href="/logo">
          <li>Logo</li>
        </Link>
        <Link href="/colour">
          <li>Colour</li>
        </Link>
        <Link href="/typography">
          <li>Typography</li>
        </Link>
        <Link href="/graphics">
          <li>Graphics</li>
        </Link>
        <Link href="/references">
          <li>References</li>
        </Link>
      </ul>
    </div>
  );
}
