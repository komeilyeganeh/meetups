import Image from "next/image";
import { getByIdMeetup, getMeetups } from "../../lib/meetups";

export default function MeetupPage({ meetup }) {
  return (
    <div className="mt-28">
      <div className="container">
        <div className="w-9/12 flex flex-col gap-y-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_CMS_API}${meetup.image}`}
            width={500}
            height={100}
            alt="meetup"
            className="rounded-xl"
          />
          <h2 className="font-bold text-2xl ">{meetup.title}</h2>
          <p className="text-lg text-gray-700">{meetup.desc}</p>
          <address className="text-gray-500">{meetup.address}</address>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // fetch data
  const meetups_data = await getMeetups();

  return {
    paths: meetups_data.map((meetup) => ({
      params: { id: meetup.id.toString() },
    })),
    fallback: false
  };
}

export async function getStaticProps({ params: { id } }) {
  // fetch data
  const meetup_data = await getByIdMeetup(id);

  return {
    props: {
      meetup: meetup_data,
    },
  };
}
