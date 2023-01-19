import React from 'react'


import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Curriculo from "../curriculo/GABRIELCOELHODEOLIVEIRA-CURRICULUM.pdf"


import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      {/* <a href="../curriculo/GABRIELCOELHODEOLIVEIRA-CURRICULUM.pdf" download className="btn">
        Download currículo
      </a> */}
    </aside>
  );
};


export default Sidebar
