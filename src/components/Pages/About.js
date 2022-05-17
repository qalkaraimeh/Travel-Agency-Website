import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="text-center display-5 my-4">About Us</h1>
      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          vitae aliquid dignissimos voluptatum. Aspernatur earum saepe quas
          facere voluptatum. Beatae praesentium totam distinctio temporibus
          culpa, neque laborum nemo illo cumque libero? Dignissimos, quas quo
          adipisci aliquid id accusantium alias. Modi praesentium cum minus
          doloremque illum quasi placeat sit quas consectetur?
        </p>
      </div>

      <h1 className="text-center my-4">Our Team</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card my-4">
              <img
                src="images/about-1.jpg"
                alt=""
                className=" img card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title"> Jane Doe</h4>
                <h5 className="text-muted">CEO and Co-founder</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos eaque exercitationem dolorum, suscipit maxime
                  harum odit quaerat nisi doloribus? Sint.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card my-4">
              <img
                src="images/about-2.jpg"
                alt=""
                className=" img card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title"> John Doe</h4>
                <h5 className="text-muted">Art Director and Co-founder</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos eaque exercitationem dolorum, suscipit maxime
                  harum odit quaerat nisi doloribus? Sint.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card my-4">
              <img src="images/about-3.jpg" alt="" className=" card-img-top" />
              <div className="card-body">
                <h4 className="card-title"> Jamie Doe</h4>
                <h5 className="text-muted">GM and Co-founder</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos eaque exercitationem dolorum, suscipit maxime
                  harum odit quaerat nisi doloribus? Sint.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quos eligendi ea veniam sed quam impedit, quia laudantium nemo tempora
          quibusdam voluptatibus delectus aliquid voluptatem temporibus optio
          adipisci voluptatum error? Eius iste fuga nesciunt ex asperiores saepe
          nemo eaque esse nihil officiis ipsa, odit velit? Ipsam odio magnam
          officiis tenetur, voluptatum, maiores laboriosam, numquam
          necessitatibus blanditiis architecto officia eius nesciunt! Quidem
          vero cumque beatae, omnis ratione tenetur quia ullam odio at a eum
          facere, mollitia sint voluptatibus quam veritatis excepturi voluptates
          saepe praesentium iusto quo possimus vel aspernatur? Quos, voluptatem.
          Omnis quae illum labore repellat nisi, enim possimus perferendis, quo
          nesciunt reprehenderit recusandae voluptate maxime temporibus est
          obcaecati soluta eaque, facere ullam minus id deserunt accusamus.
          Itaque, ea? Magni, culpa! Dolore quae laboriosam, porro, nihil optio,
          minus excepturi veniam illo atque aperiam quibusdam? Placeat ea
          tempore blanditiis officia a voluptatum, alias consectetur sunt
          debitis accusantium perferendis ullam, quos quidem optio.
        </p>
      </div>
    </div>
  );
};

export default About;
