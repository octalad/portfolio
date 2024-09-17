import React, { Fragment } from "react";
import "../skillsCard/SkillsCard.css";

function SkillsCard({ title, text, svg }) {
  let svgType;

  if (svg === "responsive") {
    svgType = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 37.5H25.0208M16.6667 43.75H33.3333C35.6345 43.75 37.5 41.8845 37.5 39.5833V10.4167C37.5 8.11548 35.6345 6.25 33.3333 6.25H16.6667C14.3655 6.25 12.5 8.11548 12.5 10.4167V39.5833C12.5 41.8845 14.3655 43.75 16.6667 43.75Z"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (svg === "html") {
    svgType = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.8334 41.6667L29.1667 8.33333M37.5 16.6667L45.8334 25L37.5 33.3333M12.5 33.3333L4.16669 25L12.5 16.6667"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (svg === "cooworking") {
    svgType = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 18.75V25M37.5 25V31.25M37.5 25H43.75M37.5 25H31.25M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833ZM6.25 41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75H6.25V41.6667Z"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (svg === "comunicacao") {
    svgType = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9167 12.2545V40.0837C22.9167 42.1085 21.2752 43.75 19.2504 43.75C17.7009 43.75 16.3188 42.776 15.7977 41.3168L11.326 28.506M37.5 27.0833C40.9518 27.0833 43.75 24.2851 43.75 20.8333C43.75 17.3816 40.9518 14.5833 37.5 14.5833M11.326 28.506C8.34229 27.2377 6.25 24.2799 6.25 20.8333C6.25 16.231 9.98095 12.5 14.5833 12.5H18.4002C26.9432 12.5 34.2852 9.92897 37.5 6.25L37.5 35.4167C34.2852 31.7377 26.9432 29.1667 18.4002 29.1667L14.5833 29.1666C13.4275 29.1666 12.3266 28.9313 11.326 28.506Z"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (svg === "pixel") {
    svgType = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33331 10.4166C8.33331 9.26605 9.26605 8.33331 10.4166 8.33331H39.5833C40.7339 8.33331 41.6666 9.26605 41.6666 10.4166V14.5833C41.6666 15.7339 40.7339 16.6666 39.5833 16.6666H10.4166C9.26605 16.6666 8.33331 15.7339 8.33331 14.5833V10.4166Z"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.33331 27.0833C8.33331 25.9327 9.26605 25 10.4166 25H22.9166C24.0672 25 25 25.9327 25 27.0833V39.5833C25 40.7339 24.0672 41.6666 22.9166 41.6666H10.4166C9.26605 41.6666 8.33331 40.7339 8.33331 39.5833V27.0833Z"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.3333 27.0833C33.3333 25.9327 34.266 25 35.4166 25H39.5833C40.7339 25 41.6666 25.9327 41.6666 27.0833V39.5833C41.6666 40.7339 40.7339 41.6666 39.5833 41.6666H35.4166C34.266 41.6666 33.3333 40.7339 33.3333 39.5833V27.0833Z"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (svg === "interacao") {
    svgType = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5833 22.9167H10.4167M39.5833 22.9167C41.8845 22.9167 43.75 24.7821 43.75 27.0833V39.5833C43.75 41.8845 41.8845 43.75 39.5833 43.75H10.4167C8.11548 43.75 6.25 41.8845 6.25 39.5833V27.0833C6.25 24.7821 8.11548 22.9167 10.4167 22.9167M39.5833 22.9167V18.75C39.5833 16.4488 37.7179 14.5833 35.4167 14.5833M10.4167 22.9167V18.75C10.4167 16.4488 12.2821 14.5833 14.5833 14.5833M14.5833 14.5833V10.4167C14.5833 8.11548 16.4488 6.25 18.75 6.25H31.25C33.5512 6.25 35.4167 8.11548 35.4167 10.4167V14.5833M14.5833 14.5833H35.4167"
          stroke="#A0A0A1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  return (
    <Fragment>
      <div className="cardContainer">
        {svgType}
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{text}</p>
      </div>
    </Fragment>
  );
}

export default SkillsCard;
