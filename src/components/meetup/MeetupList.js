import MeetupItem from "./MeetupItem";
import Classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={Classes.list}>
      {props.meetups.map((item) => (
        <MeetupItem key={item.id} meetup={item} />
      ))}
    </ul>
  );
}

export default MeetupList;
