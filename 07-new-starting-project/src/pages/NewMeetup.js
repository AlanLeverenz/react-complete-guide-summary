import { useNavigate } from 'react-router-dom';
// useHistory is replaced by useNavigate in react-router-dom v6

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // send http request to post meetup data
    // fetch is a JavaScript built-in function
    // Firebase requires JSON
    fetch('https://react-getting-started-167ee-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;