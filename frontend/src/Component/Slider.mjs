import React from "react";
import "../App.css";

export default function Slider() {
  return (
    <>
      <div className="slider">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active sha">
              <img src="https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_960_720.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item sha">
              <img src="img1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item sha">
              <img src="img2.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="/carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="/carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
