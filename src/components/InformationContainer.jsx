import "../styles/components/informationcontainer.sass";
import React from "react";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FiDownload } from "react-icons/fi"; // Novo ícone de download

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(19)98235-7897</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>gabrielcoelhodev1995@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Campinas / SP</p>
        </div>
      </div>

      {/* Seção de download do currículo */}
      <div className="info-card">
        <div className="download-icon">
          <FiDownload id="download-icon" /> {/* Novo ícone de download */}
        </div>
        <div>
          <h3>Currículo</h3>
          <a 
            href="/Curriculo-Gabriel-Backend.pdf" 
            download="Curriculo-Gabriel-Backend" 
            className="download-link"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
