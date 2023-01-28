import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-20 bg-orange-500 shadow-lg px-3 sm:px-0">
      <div className="container py-3 flex items-center justify-between">
        <h2 className="text-base sm:text-3xl text-white">
          Meetups <span className="text-sm">NextJs</span>
        </h2>
        <nav>
          <ul className="flex items-center gap-x-12">
            <li>
              <Link href="/" className="px-3 py-2 text-white">
                All Meetups
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
