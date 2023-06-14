import { NavLink } from "react-router-dom";

interface Game {
  name: string;
  shortName: string;
}

interface Props {
  games: Game[];
}

const Games = ({ games }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
      {games.map((game) => (
        <NavLink
          key={game.shortName}
          className={({ isActive }) =>
            isActive
              ? ""
              : "group relative h-32 bg-cover bg-[center_25%] saturate-150 outline outline-1 outline-zinc-600 before:content-[''] before:absolute before:w-full before:h-full before:mix-blend-hue before:bg-red-700 hover:outline-red-700 hover:filter-none hover:before:mix-blend-color lg:h-96 md:h-44 sm:h-60 sm:bg-center"
          }
          style={{
            backgroundImage: `url(src/assets/backgrounds/${game.shortName}-background.png)`,
          }}
          to={game.shortName}
        >
          <span
            className={
              "[writing-mode:normal] absolute bg-zinc-950 p-2 m-3 uppercase whitespace-nowrap text-xs md:text-sm text-zinc-300 outline outline-1 outline-zinc-600 group-hover:outline-red-700 lg:[writing-mode:vertical-rl] lg:-translate-y-6 lg:group-hover:translate-y-0 lg:text-base lg:py-4 lg:px-2 max-lg:bottom-0 sm:max-lg:group-hover:translate-x-2"
            }
          >
            {game.shortName === "csgo" ? "CS:GO" : game.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default Games;
