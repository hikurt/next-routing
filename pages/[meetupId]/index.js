// /[meetupId]
// query

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail 
      image='https://ychef.files.bbci.co.uk/976x549/p09xr9sn.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
  );
}

export default MeetupDetails;