/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import "./componets/Card.mjs";
import Card from "./componets/Card.mjs";
import Nav from "./componets/Nav.mjs";
import Slider from "./componets/Slider.mjs";
import Footer from "./componets/Footer.mjs";
import { useState } from "react";
function App() {
  let [value1, setvalue1] = useState(1);
  let [value2, setvalue2] = useState(2);
  let [value3, setvalue3] = useState(3);
  let [value4, setvalue4] = useState(4);

  function changeImg() {
    setvalue1((value1 % 4) + 1);
    setvalue2((value2 % 4) + 1);
    setvalue3((value3 % 4) + 1);
    setvalue4((value4 % 4) + 1);
  }
  return (
    <>
      <Nav />
      <Slider />
      <div className="heading">Availabale Dogs</div>

      <div className="c">
        <Card
          imge={"dog" + value1 + ".jpg"}
          title="Flake"
          name="Puppy"
          color="white"
          gender="male"
        />
        <Card
          imge={"dog" + value2 + ".jpg"}
          title="Flake"
          name="Boxer"
          color="white"
          gender="male"
        />
        <Card
          imge={"dog" + value3 + ".jpg"}
          title="Flake"
          name="Boxer"
          color="white"
          gender="male"
        />
        <Card
          imge={"dog" + value4 + ".jpg"}
          title="Flake"
          name="Boxer"
          color="white"
          gender="male"
        />
      </div>
      <div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" onClick={changeImg} type="button">
            Click here to change image
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
