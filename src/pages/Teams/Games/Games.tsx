import { NavLink } from "react-router-dom";

export interface Game {
  name: string;
  shortName: string;
}

interface Props {
  games: Game[];
  isSelected: boolean;
  handleClickGame: (game: string) => void;
}

const Games = ({ games, isSelected, handleClickGame }: Props) => {
  return (
    <div
      className={
        isSelected
          ? "grid mb-8"
          : "grid gap-4 grid-cols-1 lg:grid-cols-4 sm:grid-cols-2"
      }
    >
      {games.map((game) => (
        <NavLink
          key={game.shortName}
          className={`${
            isSelected
              ? "h-48 outline-4 outline-red-700 filter-none before:mix-blend-color"
              : "h-32 outline-1 outline-zinc-600 lg:h-96 md:h-44 sm:h-60 sm:bg-center"
          } group relative bg-cover bg-[center_25%] saturate-150 outline before:content-[''] before:absolute before:w-full before:h-full before:mix-blend-hue before:bg-red-700 hover:outline-red-700 hover:filter-none hover:before:mix-blend-color`}
          style={{
            backgroundImage: `url(src/assets/backgrounds/background-${game.shortName}.png)`,
          }}
          to={game.shortName}
          onClick={() => handleClickGame(game.name)}
        >
          <span
            className={
              isSelected
                ? "hidden"
                : "[writing-mode:normal] absolute bg-zinc-950 p-2 m-3 uppercase whitespace-nowrap text-xs md:text-sm text-zinc-300 outline outline-1 outline-zinc-600 group-hover:outline-red-700 lg:[writing-mode:vertical-rl] lg:-translate-y-6 lg:group-hover:translate-y-0 lg:text-base lg:py-4 lg:px-2 max-lg:bottom-0 sm:max-lg:group-hover:translate-x-2"
            }
          >
            {game.name.length > 20 ? game.shortName : game.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default Games;
