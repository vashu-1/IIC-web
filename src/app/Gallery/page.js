"use client";
import React from "react";
import "./gallery.css";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <section className="max-w-7xl m-auto">
        <h1 className="headline md:text-5xl text-4xl text-center mt-16">
          IIC Gallery
        </h1>
        <p className="text-center text-white my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in, ad
          facilis officiis dignissimos voluptatum sequi eius est ducimus,
          quibusdam at cumque quis, veniam maxime consequatur dolores debitis.
          Inventore, dolor.
        </p>

        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href="/g3.jpg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./g3.jpg"
              alt=""
            />
          </a>
          <a href="./g4.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./g4.jpeg"
              alt=""
            />
          </a>
          <a href="./g6.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./g6.jpeg"
              alt=""
            />
          </a>
          <a href="./katy.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500  aspect-square"
              src="./katy.jpeg"
              alt=""
            />
          </a>
          <a href="./bhatia.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./bhatia.jpeg"
              alt=""
            />
          </a>
          <a href="./Ronaldo.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./Ronaldo.jpeg"
              alt=""
            />
          </a>
          <a href="./urfi.jpg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./urfi.jpg"
              alt=""
            />
          </a>
          <a href="./virat.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./virat.jpeg"
              alt=""
            />
          </a>
          <a href="./prerena.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./prerena.jpeg"
              alt=""
            />
          </a>
          <a href="./arpan.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./arpan.jpeg"
              alt=""
            />
          </a>
          <a href="./arpan.jpeg">
            <img
              className="w-full border-4 border-white hover:scale-105 duration-500 aspect-square"
              src="./arpan.jpeg"
              alt=""
            />
          </a>
        </LightGallery>
      </section>
    </>
  );
};

export default Gallery;
