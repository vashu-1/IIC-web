"use client";
import React from "react";
import data from "../../../util/slider.json";

const Initiatives = () => {
  return (
    <div>
      <h1 className="headline text-5xl text-center mb-16">Our Initiatives</h1>
      <div className="container">
        <div className="card__container">
          {data.map((item) => {
            return (
              <article className="card__article">
                <img src={item.image} className="card__img" alt="" />
                <div className="card__data">
                  <h2 className="headline">{item.event}</h2>
                  <p className="design text-white py-4">{item.details}</p>
                  <button className="rated">Read more</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
