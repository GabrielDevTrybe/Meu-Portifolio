import React from "react";



const ProjectsContainer = () => {
  return (
    <div className="projetos-container">

      <section className="projects-container">
        <h2>Projetos</h2>
        <h4 className="front">Front-End</h4>
        <br></br>
        <ul>
          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/StarWars/" target="_blank">Star Wars</a>
            <br></br> <p>Neste projeto pude desenvolver uma lista com filtros de planetas do universo de
              Star Wars usando Context API e Hooks para
              controlar os estados globais.</p>
          </li>
          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/Front-End-Online-Store/" target="_blank">Online Store</a>
            <br></br> <p>Nesse projeto foi desenvolvido uma aplicação Online Store, onde fui capaz de desenvolver as seguintes habilidades:<br></br>

              Entender o que são Métodos Ágeis;<br></br>
              Entender o que é Kanban;<br></br>
              Entender o que é Scrum;<br></br>
              Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz;<br></br>
              Praticar todas as habilidades desenvolvidas até agora no módulo de Front-end.</p>
          </li>

          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/TrybeTunes/" target="_blank">Trybetunes</a>

            <br></br> <p>Neste projeto, desenvolvi as seguintes habilidades:<br></br>

Fazer requisições e consumir dados vindos de uma API;<br></br>

Utilizar os ciclos de vida de um componente React;<br></br>

Utilizar a função setState de forma a garantir que um determinado código só é executado após o estado ser atualizado

Utilizar o componente BrowserRouter corretamente;<br></br>

Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;<br></br>

Utilizar o Switch do React Router<br></br>

Criar links de navegação na aplicação com o componente Link;<br></br></p>
          </li>
        </ul>
        {/* <a href="#" className="btn">
        Ver Projetos
      </a> */}

      </section>
      <section className="back-end">
        <h4 className="back">Back-End</h4>
        <ul className="list-back">
          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Store-Manager" target="_blank">Trybers-And-Dragons</a>
            <br></br> <p>Neste projeto,
              desenvolvido em Typescript pude aplicar os princípios da arquitetura SOLID
              e os princípios de POO em uma estrutura de jogos de interpretação de papéis,
              mais conhecidos como jogos RPG (Role Playing Game).</p>
            <br></br></li>

          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Trybe-FutebolClube" target="_blank">TFC</a>
            <br></br> <p>Nesse projeto, pude construir um
              back-end dockerizado utilizando modelagem
              de dados através do Sequelize</p>
            <br></br>
          </li>
          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Trybe-FutebolClube" target="_blank">Trybesmith</a>
            <br></br> <p>Neste projeto, pude criar uma loja de itens medievais, no formato de uma API, utilizando Typescript.</p>
            <br></br>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectsContainer;