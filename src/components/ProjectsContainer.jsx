import React from "react";



const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <h4 className="front">Front-End</h4>
      <br></br>
      <ul>
        <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/StarWars/" target="_blank">Star Wars</a></li>
        <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/Front-End-Online-Store/" target="_blank">Online Store</a></li>
        <li><a className="linkProj" href="https://gabrieldevtrybe.github.io/TrybeTunes/" target="_blank">Trybetunes</a></li>
      </ul>
      {/* <a href="#" className="btn">
        Ver Projetos
      </a> */}
    </section>
  );
};

export default ProjectsContainer;