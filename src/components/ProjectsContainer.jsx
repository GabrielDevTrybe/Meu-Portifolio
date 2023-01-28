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
          <br></br> <p>Aplicação de filtro</p>
          <br></br><p>Tenologias: React, Hooks </p></li>
          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/Front-End-Online-Store/" target="_blank">Online Store</a>
          <br></br> <p>Aplicação de carrinho de compras</p>
          <br></br><p>Tenologias: React, LocalStorage </p> </li>
    
          <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/TrybeTunes/" target="_blank">Trybetunes</a>
          
          <br></br> <p>Aplicação de Musicas</p>
          <br></br><p>Tenologias: React, Api, Fetch </p></li>
        </ul>
        {/* <a href="#" className="btn">
        Ver Projetos
      </a> */}

      </section>
      <section className="back-end">
        <h4 className="back">Back-End</h4>
        <ul className="list-back">
          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Store-Manager/blob/main/README.md" target="_blank">Store Manager</a>
          <br></br> <p>Arquitetura MSC</p>
          <br></br></li>
      
          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/Talker-Manager/blob/main/README.md" target="_blank">Talker Manager</a>
          <br></br> <p>Api CRUD (Create, Read, Update e Delete)</p>
          <br></br>
          </li>
          <li><a className="linkProj" href="https://github.com/GabrielDevTrybe/All-For-One" target="_blank">All For One</a>
          <br></br> <p>Banco de Dados MySQL</p>
          <br></br>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectsContainer;