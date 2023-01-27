import Link from "next/link";

export default () => {
  return (
    <header className="fixed w-full top-0 left-0 z-20 bg-orange-500 shadow-lg">
      <div className="container px-10 py-3 flex items-center justify-between">
        <h2 className="text-3xl text-white">
          Meetups <span className="text-sm">NextJs</span>
        </h2>
        <nav>
          <ul className="flex items-center gap-x-12">
            <li>
              <Link href="/" className="px-3 py-2 text-white">
                All Meetups
              </Link>
            </li>
            <li>
              <button className="bg-white text-black p-2 rounded-xl">
                Add Meetup
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
