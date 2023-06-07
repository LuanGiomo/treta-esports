import homeImage from "../../assets/home-image.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="content-home">
      <div className="about">
        <h1 className="title">treta esports</h1>
        <img className="image-home" src={homeImage} alt="" />
        <h2 className="subtitle"> Quem Somos</h2>
        <p className="text fs-14">
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
          cativaram. Era chegada a hora de presentear os fãs com algo que
          ultrapassasse a fronteira da significância esportiva. A FURIA já fazia
          parte do lifestyle simbólico dessa geração. Agora o lifestyle FURIA
          ganha também uma matéria física a altura da paixão da fan base.
          Orgulhosamente unimos design e lifestyle aos momentos históricos da
          FURIA em uma coleção completa, com produtos de qualidade perceptível
          nos detalhes e no todo. Muito além de vestir, este é um tributo aos
          fãs tão plurais e únicos que viram a FURIA nascer e ganhar força ao
          longo dessa ainda curta, mas absolutamente frutífera jornada. Um
          resultado positivo que segue unindo pessoas, alimentando o nosso sonho
          fundador, enquanto nos divertimos dentro e fora dos jogos.
        </p>
      </div>
      {/* <div className="next-matches">
            <div className="match"></div>
            <div className="match"></div>
            <div className="match"></div>
          </div> */}
    </div>
  );
};

export default About;