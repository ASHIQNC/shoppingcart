import React, { useEffect, useState } from "react";
import "./singledetail.css";

import { Link, useParams } from "react-router-dom";

const SingleProductDetail = () => {
  // create a state to hold data
  const [singleData, setSingleData] = useState("");
  const { id } = useParams();

  //   const singleFoodData = async () => {
  //     const result = await getsingleFoodDetails(id);
  //     // console.log("result", result);
  //     setSingleData(result.data);
  //   };

  //   console.log(singleData);

  //   useEffect(() => {
  //     singleFoodData();
  //   }, []);

  return (
    <div className="single__page__wrapper">
      {/* single card section */}
      <div className="header__section">
        <h1 className="w-100 mx-auto">Product Detail</h1>
      </div>

      <div className="single__card__content">
        <div className="single__container__left-section">
          <img
            className="single__image__style"
            src="https://i.postimg.cc/tRr1tP4P/iphone8.jpg"
            alt="food"
          />
        </div>
        <div className="single__container__right-section">
          <h6 className="mt-3 flavour-section__style">cat</h6>

          <h2 className="single__heading-style">name</h2>
          <p className="single__para-style">discriot</p>

          <div style={{ display: "flex" }}>
            <h6 style={{ marginTop: "6px", marginRight: "17px" }}>$10000</h6>
            <h4 style={{ color: "orangered" }}>$80.00</h4>
          </div>
          <Link to={"/menu"}>
            <button className="single-page__button__style__wrapper">
              View Our Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
