interface Props {
  from: string;
  game: string;
  handleClick: (game: string) => void;
}

const GameBreadcrumbs = ({ from, game, handleClick }: Props) => {
  return (
    <div className="mb-4 font-secondary text-sm md:text-base text-zinc-300">
      <a
        className="cursor-pointer font-semibold hover:underline"
        onClick={() => handleClick("")}
      >
        {from}
      </a>
      <span className="text-zinc-400">{` > ${game}`}</span>
    </div>
  );
};

export default GameBreadcrumbs;
