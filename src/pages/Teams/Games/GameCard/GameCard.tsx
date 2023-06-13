import { NavLink } from "react-router-dom";
import styles from "./GameCard.module.css";

export interface Game {
  name: string;
  shortName: string;
}

interface Props {
  games: Game[];
  onSelectGame: (game: string) => void;
}

const GameCard = ({ games, onSelectGame }: Props) => {
  return (
    <>
      {games.map((game) => (
        <NavLink
          key={game.shortName}
          className={({ isActive }) =>
            isActive
              ? [styles.game__card, styles.active].join(" ")
              : styles.game__card
          }
          style={{
            backgroundImage: `url(src/assets/backgrounds/${game.shortName}-background.png)`,
          }}
          to={game.shortName}
          onClick={() => onSelectGame(game.shortName)}
        >
          <span className={styles.game__card__name}>
            {game.shortName === "csgo" ? "CS:GO" : game.name}
          </span>
        </NavLink>
      ))}
    </>
  );
};

export default GameCard;
