import { Link } from "react-router-dom";

import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";
import Classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>Add New Meetup</Link>
          </li>
          <li>
            <Link style={{ position: "relative" }} to={"favorite"}>
              Favorite
              <span className={Classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
