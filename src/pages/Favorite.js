import { useContext } from "react";

import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetup/MeetupList";

function FavoritePage() {
  const favoritesCtx = useContext(FavoriteContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>There is no favorites to show you.</p>;
  } else content = <MeetupList meetups={favoritesCtx.favorites} />;

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritePage;
