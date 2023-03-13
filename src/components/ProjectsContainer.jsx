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
            {/* <br></br> <p>Descrição: Aplicativo de filtro de planetas, com temática star wars</p><br></br> */}
            <p style={{ color: 'pink' }}>Stacks Utilizadas:</p> <p>React / JavaScript / Hooks</p>          </li>
          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/Front-End-Online-Store/" target="_blank">Online Store</a>
            {/* <br></br> <p>Descrição: Aplicativo de carrinho de compras, e salvando no LocalStorage</p><br></br> */}
            <p style={{ color: 'pink' }}>Stacks Utilizadas:</p> <p>React / JavaScript</p>


          </li>

          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/TrybeTunes/" target="_blank">Trybetunes</a>
            {/* <p>Descrição: Aplicativo de musicas, realizando um fetch na api do Spotify</p> */}
            <br></br>  <p style={{ color: 'pink' }}>Stacks Utilizadas:</p> <p>React / JavaScript / Props</p><br></br>


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
            <br></br><p style={{ color: 'pink' }}>Stacks Utilizadas:</p> <p>TypeScript</p>

            <br></br></li>

          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Trybe-FutebolClube" target="_blank">TFC</a>
            <br></br> <p style={ {color: 'pink'}}>Stacks Utilizadas:</p> <p>TypeScript / Docker / Sequelize / Express / MySQL</p>

            <br></br>
          </li>
          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Trybesmith" target="_blank">Trybesmith</a>
            <br></br> <p style={ {color: 'pink'}}>Stacks Utilizadas:</p> <p>TypeScript / Docker / Express / MySQL</p>
            <br></br>
          </li>
        </ul>
      </section>
    </div >
  );
};

export default ProjectsContainer;