import { Button, Jumbotron } from "react-bootstrap";
import React from "react";


const JumbotronComponent = (props) => {
  const redirectToInstagram = () => {
    window.location.assign("https://www.instagram.com/prima_sam");
  };

  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">HI, THIS IS CRUD OPERATION</h1>
        <p className="by">Made by</p>
        <p>
          <Button variant="info" onClick={redirectToInstagram}>
            SAMDEPAUL
          </Button>
        </p>
        <p className="JumText">This website is used to fulfill the final assignment for the Teknologi Web Lanjut course</p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
