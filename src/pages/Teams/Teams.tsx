import { useState } from "react";
import Games, { Game } from "./Games/Games";
import { Link, Outlet } from "react-router-dom";

const Teams = () => {
  const [games, setGames] = useState<Game[]>([
    { name: "League of Legends", shortName: "lol" },
    { name: "Valorant", shortName: "val" },
    { name: "Counter-Strike: Global Offensive", shortName: "csgo" },
    { name: "Brawl Stars", shortName: "bs" },
  ]);

  const [selectedGame, setSelectedGame] = useState("");

  const visibleGames = selectedGame
    ? games.filter((game) => game.name === selectedGame)
    : games;

  const isSelected = selectedGame.length > 0 ? true : false;

  return (
    <>
      <div className="font-secondary text-center">
        <h2 className="mb-3 text-left text-zinc-300 text-xl font-semibold tracking-tight sm:text-2xl">
          Quem Somos
        </h2>
        <p className="mb-8 text-justify leading-7 text-sm text-zinc-400 selection:bg-red-700 selection:text-zinc-300 md:text-left sm:text-base sm:leading-7">
          Transformar diversão em competição e depois em resultados positivos,
          sem perder a alegria e o foco. Foi com esse desafio (e inspiração!)
          que a FURIA surgiu em 2017. Se no início a empreitada parecia ousada,
          logo o sarrafo aumentou: a FURIA rapidamente ganhava não só fãs, como
          se tornava um movimento, a expressão de uma geração. A cada nova
          vitória nas arenas e nos jogos, surgiam mais seguidores da pantera. A
          pantera, aliás, é um assunto à parte. Foi um símbolo escolhido e
          construído com minúcia, sem aleatoriedade. Era preciso mostrar para a
          natureza dos esports que um predador chegava na área. Não um predador
          qualquer, que destrói. Pelo contrário. Era uma fera topo de cadeia que
          domina o território para agregar. Um felino imponente que está em todo
          o planeta e que também é 100% brasileiro. E em seu fenômeno mais
          marcante, na cor preta, é um ícone de resistência, de luta e de voz
          ativa. Foi com a pantera negra no peito que milhares de fãs se
          identificaram a ponto de leva-la consigo também no coração. Em pouco
          tempo, a FURIA tornou-se uma mobilização cultural de um nicho sedento
          por representatividade na sociedade. Os resultados esportivos vieram e
          cativaram.
        </p>
      </div>
      {isSelected && (
        <div className="mb-4 text-zinc-400 uppercase">
          <Link
            to="/teams"
            className="hover:underline"
            onClick={() => setSelectedGame("")}
          >
            Teams
          </Link>
          {" / "}
          <span className="text-zinc-300">{selectedGame}</span>
        </div>
      )}
      <Games
        games={visibleGames}
        isSelected={isSelected}
        handleClickGame={(game: string) => setSelectedGame(game)}
      />
      <Outlet />
    </>
  );
};

export default Teams;
