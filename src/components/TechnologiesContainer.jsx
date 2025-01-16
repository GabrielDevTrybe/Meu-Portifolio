import React from "react";

// Importando ícones de tecnologias backend
import { 
  DiNodejsSmall, 
  DiMysql, 
  DiPython 
} from "react-icons/di";
import { 
  SiSequelize, 
  SiTypescript, 
  SiMocha, 
  SiCsharp,
  SiDotnet
} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

// Tecnologias backend
const technologies = [
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "sequelize", name: "Sequelize", icon: <SiSequelize /> },
  { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
  { id: "mocha", name: "Mocha", icon: <SiMocha /> },
  { id: "csharp", name: "C#", icon: <SiCsharp /> }, // Ícone para C#
  { id: "dotnet", name: ".NET", icon: <SiDotnet /> }, // Ícone para .NET

];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
