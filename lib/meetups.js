const CMS_API = process.env.NEXT_PUBLIC_CMS_API;

const meetupData = (meetup) => {
  return {
    id: meetup.id,
    title: meetup.attributes.title,
    address: meetup.attributes.address,
    desc: meetup.attributes.description,
    image: meetup.attributes.image.data.attributes.url
  };
};

export const getMeetups = async () => {
  const meetups_res = await fetch(`${CMS_API}/api/meetups?populate=image`);
  const meetups = await meetups_res.json();
  return meetups.data.map(meetupData);
};

export const getByIdMeetup = async (id) => {
const meetups_res = await fetch(`${CMS_API}/api/meetups/${id}?populate=image`);
  const meetup = await meetups_res.json();
  return meetupData(meetup.data);
}
