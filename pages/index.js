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

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;