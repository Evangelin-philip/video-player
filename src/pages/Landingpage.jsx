import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Landingpage() {
  // -------------------------------------------------------HOOK for NAvigate------------------------------------------
  // useNavigate() returns method for navigation.......holded in variable navigate_to_url
  const navigate_to_url = useNavigate();

  // -------------------------------------------function invoked when get started btn clicked
  const navigate = () => {
    navigate_to_url("/home");
  };
  return (
    <>
      {/* ----------------------------------------------------------------------------------------First section----------------------------------- */}
      <Row className="mt-5 mb-5 align-items-center justify-content-between">
        <Col></Col>
        <Col lg={4}>
          <h3 className="mb-3">
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "center" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            quos eveniet pariatur harum rem ipsam iusto amet molestias nihil
            necessitatibus debitis cumque. Consequuntur vel dolores deserunt
            obcaecati eligendi facere aperiam.
          </p>
          {/* ------------------------------------cLICK EVENT To redirect to home page------------------------------------------- */}
          <button className="btn btn-primary mt-5 fw-bolder" onClick={navigate}>
            Get Started
          </button>
        </Col>
        <Col></Col>
        <Col className="ps-5" lg={6}>
          <img
            className="img-fluid ms-5 ps-5"
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt="music beat "
          />
        </Col>
      </Row>

      {/* -------------------------------------------------------------------------------------Features section----------------------------------- */}
      <div className="container d-flex justify-content-center align-items-center flex-column mt-5 mb-5">
        <h3>Features</h3>
        <div className="cards mt-5 d-flex align-items-center justify-content-between w-100">
          {/* ----------------------------------CARD 1-------------------------------- */}
          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img
              height={"300px"}
              width={"300px"}
              variant="top"
              src="https://clipart-library.com/images/pc7reEGKi.gif"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button>----------------------------------------------not needed---------------------------- */}
            </Card.Body>
          </Card>

          {/* ----------------------------------CARD 2-------------------------------- */}
          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img
              height={"300px"}
              width={"300px"}
              variant="top"
              src="https://media.tenor.com/vqpt7EB_tooAAAAj/music-clu.gif"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button>----------------------------------------------not needed---------------------------- */}
            </Card.Body>
          </Card>

          {/* ----------------------------------CARD 3-------------------------------- */}
          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img
              height={"300px"}
              width={"300px"}
              variant="top"
              src="https://i.gifer.com/origin/e3/e3121f8243df543e609c5129cdea64be_w200.webp"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button>----------------------------------------------not needed---------------------------- */}
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------Last Section-------------------------------------- */}
      <div className="container w-100 border rounded border-primary mt-5 mb-5 d-flex justify-content-between align-items-center p-3">
        <div className="text-content w-50">
          <h3 className="text-warning mb-5 mt-5">Simple, Fast and Powerful</h3>
          <h6>
            <span className="fs-5 fw-bolder text-primary">
              {" "}
              Play Everything{" "}
            </span>{" "}
            : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur porro sint harum obcaecati perspiciatis reprehenderit
            sit molestias?
          </h6>

          <h6 className="mt-5">
            <span className="fs-5 fw-bolder text-primary">
              {" "}
              Categorise Videos{" "}
            </span>
            : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur porro sint harum obcaecati perspiciatis reprehenderit
            sit molestias?
          </h6>

          <h6 className="mt-5">
            <span className="fs-5 fw-bolder text-primary">
              Managing History
            </span>
            : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur porro sint harum obcaecati perspiciatis reprehenderit
            sit molestias?
          </h6>
        </div>
        <div className="video-content ms-5">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/ebfboqfPYGk"
            title="8D Music Mix ⚡ Best 8D Audio Songs [7 Million Subs Special] 🎧"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
