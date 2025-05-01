import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-center">
      <nav className="flex gap-6 text-purple-700 font-medium text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
