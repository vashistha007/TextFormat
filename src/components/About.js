import React from 'react';

export default function About() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active -14">
            <img src="https://images.pexels.com/photos/23169741/pexels-photo-23169741/free-photo-of-a-green-plant-growing-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item -14">
            <img src="https://images.pexels.com/photos/23623513/pexels-photo-23623513/free-photo-of-yard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item m-14">
            <img src="https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-sneaking-cat-on-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
