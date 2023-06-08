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
        ></div>
      ))}
    </>
  );
};

export default GameCard;
