import React from "react";
import "./CardsSection.css";
import CardItem from "../CardItem/CardItem";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const imgSource = {
  chichenItza: "images/chichen-itza.jpg",
  maldives: "images/maldives.jpg",
  petra: "images/petra.jpg",
  prauge: "images/prauge.jpg",
  santorini: "images/santorini.jpg",
};
const CardsSection = () => {
  return (
    <section className="cards-section">
      <h2 className="mb-5">Check Out Our Epic Destinations</h2>
      <div>
        <div className="card-container-lg">
          <Container>
            <CardItem
              cardTitle="Chichen Itza"
              imgSrc={imgSource.chichenItza}
              linkPath="chichen-itza"
              imgAlt="Chichen Itza"
            />

            <CardItem
              cardTitle="Maldives"
              imgSrc={imgSource.maldives}
              linkPath="maldives"
              imgAlt="Maldives"
            />
          </Container>
        </div>

        <div>
          <Container>
            <CardItem
              cardTitle="Petra"
              imgSrc={imgSource.petra}
              linkPath="petra"
              imgAlt="Petra"
            />
            <CardItem
              cardTitle="Prauge"
              imgSrc={imgSource.prauge}
              linkPath="prauge"
              imgAlt="Prauge"
            />
            <CardItem
              cardTitle="Santorini"
              imgSrc={imgSource.santorini}
              linkPath="santorini"
              imgAlt="Santorini"
            />
          </Container>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;

//style={{ width: "18rem" }}
