import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://ychef.files.bbci.co.uk/976x549/p09xr9sn.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup!',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://ychef.files.bbci.co.uk/976x549/p09xr9sn.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a asd meetup!',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image: 'https://ychef.files.bbci.co.uk/976x549/p09xr9sn.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a hjk meetup!',
  },
  {
    id: 'm4',
    title: 'A fourth meetup',
    image: 'https://ychef.files.bbci.co.uk/976x549/p09xr9sn.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a uiui meetup!',
  },
];

function HomePage(props) {
  return (
      <MeetupList meetups={props.meetups} />
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
  
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default HomePage;