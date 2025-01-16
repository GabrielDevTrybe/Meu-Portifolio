import React from "react";

const ProjectsContainer = () => {
  return (
    <div className="projects-container">
      <h2>Projetos Pessoais</h2>

      {/* Back-End Section */}
      <section className="back-end">
        <h4 className="back">Back-End</h4>
        <ul className="list-back">
          {/* Projeto 1 */}
          <li>
            <a
              className="linkProj"
              href="https://github.com/GabrielDevTrybe/Store-Manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              Store-Manager
            </a>
            <p className="project-description">
              Neste projeto de Back-End, desenvolvi minha primeira API utilizando a arquitetura MSC (Model-Service-Controller). <br />
              A API implementada é um sistema de gerenciamento de vendas no modelo dropshipping, permitindo funcionalidades essenciais como criação, visualização, atualização e exclusão de produtos e vendas. <br />
              Utilizei o MySQL como banco de dados para garantir a gestão eficiente dos dados, e a API foi projetada para ser RESTful, seguindo as melhores práticas de construção de APIs. <br />
              Através dessa experiência, pude aprofundar meus conhecimentos em arquitetura de sistemas, banco de dados relacionais e a criação de APIs escaláveis e performáticas.
            </p>
            <p style={{ color: "pink" }}>Stacks Utilizadas:</p>
            <p>TypeScript</p>
          </li>

          {/* Projeto 2 */}
          <li>
            <a
              className="linkProj"
              href="https://github.com/GabrielDevTrybe/Trybe-FutebolClube"
              target="_blank"
              rel="noopener noreferrer"
            >
              TFC (Trybe Futebol Clube)
            </a>
            <p className="project-description">
              O TFC é uma plataforma informativa que fornece dados sobre partidas e classificações de futebol! ⚽️ <br />
              Fui parte da equipe de desenvolvimento responsável pela criação de uma API utilizando a metodologia TDD (Test-Driven Development). Além disso, nossa squad integrou as aplicações usando Docker Compose, garantindo que todos os componentes funcionassem de forma eficiente ao consumir um banco de dados. <br />
              Durante o desenvolvimento deste projeto, construímos um back-end dockerizado, utilizando Sequelize para a modelagem de dados. A API foi projetada para ser consumida por um front-end já existente no projeto, respeitando todas as regras de negócio estabelecidas. Essa experiência me permitiu aprofundar meus conhecimentos em containers, TDD, modelagem de dados e integração de sistemas.
            </p>
            <p style={{ color: "pink" }}>Stacks Utilizadas:</p>
            <p>TypeScript / Docker / Sequelize / Express / MySQL</p>
          </li>

          {/* Projeto 3 */}
          <li>
            <a
              className="linkProj"
              href="https://github.com/GabrielDevTrybe/Trybesmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trybesmith
            </a>
            <p className="project-description">
              Neste projeto, desenvolvi uma API para uma loja de itens medievais utilizando TypeScript. <br />
              Fui responsável por construir todas as camadas da aplicação, incluindo Models, Services e Controllers. Através dessa API, é possível realizar as operações básicas em um banco de dados, como Criação, Leitura, Atualização e Exclusão (CRUD), também conhecidos pelos entusiastas como Create, Read, Update e Delete. <br />
              Além disso, implementei endpoints que permitem ler e escrever dados em um banco de dados MySQL, garantindo o correto fluxo de informações entre a aplicação e o banco. Esse projeto me proporcionou a oportunidade de aprofundar meus conhecimentos em TypeScript, modelagem de dados e no desenvolvimento de APIs RESTful com MySQL.
            </p>
            <p style={{ color: "pink" }}>Stacks Utilizadas:</p>
            <p>TypeScript / Docker / Express / MySQL</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectsContainer;
