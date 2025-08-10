import Link from "next/link";
import { auth } from "@/app/_lib/auth";

const navLinks = [
  {
    name: "Cabins",
    href: "/cabins",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-accent-400 transition-colors`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className={`flex items-center gap-4 hover:text-accent-400 transition-colors`}
            >
              <img
                className="h-8 rounded-full"
                alt={session.user.name}
                src={session.user.image}
                referrerPolicy="no-referrer"
              />
              <span>Guest Area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className={`hover:text-accent-400 transition-colors`}
            >
              Guest Area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
