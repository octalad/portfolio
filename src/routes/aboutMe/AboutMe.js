import React, { Fragment } from "react";
import portImg from "../aboutMe/images/portImg.jpeg";
import "../aboutMe/AboutMe.css";
import SkillsCard from "../../components/skillsCard/SkillsCard";

function AboutMe() {
  return (
    <Fragment>
      <div className="aboutMeContainer">
        <div className="resume">
          <img className="resumeImg" src={portImg} />
          <div className="resumeInfos">
            <h2 className="resumeName">Octavio Ladeira</h2>
            <p className="resumeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at
              fringilla leo ex quis nisi. Etiam nec varius leo, vitae vehicula
              lacus. Mauris blandit erat a dui pulvinar, et laoreet lorem
              pretium. Phasellus semper, magna quis porttitor mollis, nisl augue
              condimentum est, eget porta nisi eros eget turpis. Aliquam
              facilisis rutrum mi, vel pretium arcu aliquam in. Cras et tellus
              consectetur, suscipit augue in, mattis risus. Aliquam cursus arcu
              eu efficitur congue. Nullam turpis turpis, porttitor eu odio a,
              ullamcorper ullamcorper mauris. Integer a tortor non ex bibendum.
              Cras et tellus consectetur, suscipit augue in, mattis risus.
              Aliquam cursus arcu eu efficitur congue. Nullam turpis turpis,
              porttitor eu odio a, ullamcorper ullamcorper mauris. Integer a
              tortor non ex bibendum.Cras et tellus consectetur, suscipit augue
              in, mattis risus. Aliquam cursus arcu eu efficitur congue. Nullam
              turpis turpis, porttitor eu odio.
            </p>
            <a href="mailto:ladeiraoctavio@gmail.com">
              ladeiraoctavio@gmail.com
            </a>
          </div>
        </div>
        <div className="skills">
          <h2 className="skillsTitle">Minhas habilidades</h2>
          <div className="skillsCards">
            <div className="cards1">
              <SkillsCard
                title="Responsive Design"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at fringilla leo ex quis nisi."
                svg="responsive"
              />
              <SkillsCard
                title="HTML, CSS, e JS"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at fringilla leo ex quis nisi."
                svg="html"
              />
              <SkillsCard
                title="Cooworking"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at fringilla leo ex quis nisi."
                svg="cooworking"
              />
            </div>

            <div className="cards2">
              <SkillsCard
                title="Comunicação"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at fringilla leo ex quis nisi."
                svg="comunicacao"
              />
              <SkillsCard
                title="Pixel Perfect"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at fringilla leo ex quis nisi."
                svg="pixel"
              />
              <SkillsCard
                title="Interação"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, nibh non laoreet volutpat, mi nisi molestie arcu, at fringilla leo ex quis nisi."
                svg="interacao"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutMe;
