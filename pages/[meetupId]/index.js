import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          title='describtion'
          contennt={props.meetupData.describtion}
        />
      </Head>
    <MeetupDetail
      image = {props.meetudData.image}
      title={props.meetudData.title}
      address={props.meetudData.address}
      description={props.meetudData.description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    'mongodb+srv://david:6iFyfMmbfHIroWy5@nexttest.nahth7p.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://david:6iFyfMmbfHIroWy5@nexttest.nahth7p.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ 
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;