import Link from "next/link";
import Image from "next/image";

export default function Meetups({ meetups }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 px-4 sm:px-0">
      {meetups.map((meetup) => (
        <div className="w-96 p-6 border-2 border-slate-200 rounded-xl flex flex-col items-center gap-y-4" key={meetup.id}>
          <Image src={`${process.env.NEXT_PUBLIC_CMS_API}${meetup.image}`} width={300} height={100} alt="meetup" className="rounded-xl"/>
          <h3 className="font-bold text-lg">{meetup.title}</h3>
          <address className="text-gray-400">{meetup.address}</address>
          <Link href={`/meetup/${meetup.id}`} className="px-4 py-2 rounded-lg bg-amber-400 font-bold">See Meetup</Link>
        </div>
      ))}
    </div>
  );
};
