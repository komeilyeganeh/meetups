import Head from 'next/head'
import Meetups from '../components/Meetups/Meetups';
import { getMeetups } from '../lib/meetups';

export default function Home({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetups - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meetups meetups={meetups} />
    </>
  )
}

export async function getStaticProps() {
  // fetch data
  const meetups_data = await getMeetups();

  // return data
  return {
    props: {
      meetups: meetups_data
    },
    revalidate: 1
  }
}
