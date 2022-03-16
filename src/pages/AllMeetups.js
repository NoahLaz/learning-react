import MeetupList from "../components/meetup/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [getMeetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetup-6e0d9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setMeetups(meetups);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <section>
        <div>Loading...</div>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={getMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
