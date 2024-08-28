import React, { Fragment } from "react";
import "../home/Home.css";
import portImg from "./images/portImg.jpeg";
import { Link, useNavigate } from "react-router-dom";
import cv from "./images/CVOctavioLadeira.pdf";

function Home() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CVOctavioLadeira.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailLink = () => {
    window.location.href = "mailto:ladeiraoctavio@gmail.com";
  };

  return (
    <Fragment>
      <div className="homeContainer">
        <div className="homeIntro">
          <div className="homeTitle">
            <h1 className="title">
              Sou <span className="name">Octavio Ladeira. </span>
            </h1>
          </div>
          <div className="contactButtons">
            <button onClick={handleEmailLink} className="buttonSolid">
              Entrar em contato
            </button>
            <button onClick={handleDownload} className="buttonOutlined">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                  fill="white"
                />
              </svg>
              <span>Baixar Cv</span>
            </button>
          </div>
        </div>
        <div className="aboutMe">
          <div className="aboutMeCard">
            <img className="cardImg" alt="" src={portImg} />
            <div className="aboutMeTexts">
              <h2 className="aboutMeTitle">Sobre mim</h2>
              <p className="aboutMeParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at
                fringilla leo ex quis nisi. Etiam nec varius leo, vitae vehicula
                lacus. Mauris blandit erat a dui pulvinar, et laoreet lorem
                pretium. Phasellus semper, magna quis porttitor mollis, nisl
                augue condimentum est, eget porta nisi eros eget turpis. Aliquam
                facilisis rutrum mi, vel pretium arcu aliquam in. Cras et tellus
                consectetur, suscipit augue in, mattis risus. Aliquam cursus
                arcu eu efficitur congue. Nullam turpis turpis, porttitor eu
                odi.
              </p>
              <button
                onClick={() => navigate("/AboutMe")}
                className="buttonOutlined moreAboutMe"
              >
                Mais sobre mim
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16667 2.91667L12.25 7.00001M12.25 7.00001L8.16667 11.0833M12.25 7.00001L1.75 7.00001"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
