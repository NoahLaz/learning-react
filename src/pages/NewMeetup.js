import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    const response = await fetch(
      "https://react-meetup-6e0d9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) navigate("/", { replace: true });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
