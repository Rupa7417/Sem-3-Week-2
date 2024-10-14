import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h6 className="card-title fs-1 text fw-lighter">"Shop the Latest Trends: Your Destination for Fashion, Accessories, and More!"</h6>
              <p className="card-text fs-5 d-none d-sm-block ">
              "Discover the latest trends with our new season arrivals! Shop fresh styles in clothing, accessories, and footwear, designed to keep you looking chic and comfortable.
               From vibrant colors to timeless classics, explore our curated collection and elevate your wardrobe. Don’t miss out—grab your favorites before they’re gone!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
