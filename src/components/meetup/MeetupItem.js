import { useContext } from "react";

import Classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoriteContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.meetup.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.meetup.id);
    } else favoriteCtx.addFavorite(props.meetup);
  }

  return (
    <li className={Classes.item}>
      <Card>
        <div className={Classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={Classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={Classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove Item from Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
