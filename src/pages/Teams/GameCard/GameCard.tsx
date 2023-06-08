import styles from "./GameCard.module.css";

export interface Game {
  name: string;
  shortName: string;
}

interface Props {
  games: Game[];
}

const GameCard = ({ games }: Props) => {
  return (
    <>
      {games.map((game) => (
        <div
          key={game.shortName}
          className={styles.game__card}
          style={{
            backgroundImage: `url(src/assets/backgrounds/${game.shortName}-background.png)`,
          }}
        >
          <span className={styles.game__card__name}>
            {game.shortName === "csgo" ? "CS:GO" : game.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default GameCard;
