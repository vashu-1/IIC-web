import React from "react";
import { LuLink } from "react-icons/lu";

const Spotlight = () => {
  return (
    <section className="text-center mt-32">
      <h4 className="text-gray-400">WITNESS THE AWESOMENESS</h4>
      <h1 className="headline text-5xl py-4">Spotlight</h1>
      <p className="text-gray-400 mb-4">
        IIC 6.0 brings ton\ its participants a host of events, ranging from
        immersive talks to exciting competition!
      </p>
      <div className="flex max-w-7xl m-auto flex-wrap;">
        <div>
          <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <img src="./g1.jpeg" className="w-80" alt="" />

            <div className="layer absolute  top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-80">
              <div className="flex items-center  gap-40 w-full opacity-0 absolute top-12 md:left-7 left-3 text-white text-2xl translate-y-4">
                <h3 className="xl:text-3xl lg:text-2xl text-xl ">Rudra</h3>
                <LuLink className="p-2 xl:size-10 md:size-8 size-7 rounded-xl hover:bg-white hover:text-black border-2 cursor-pointer border-white mb-8" />
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <img src="./g2.jpeg" className="w-96" alt="" />

            <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
              <div className="flex items-center gap-40 w-full opacity-0 absolute  top-12 md:left-7 left-1 text-white  translate-y-4">
                <h3 className="xl:text-3xl md:text-2xl sm  text-sm">
                  Innovathon
                </h3>
                <LuLink className="p-2 xl:size-10 md:size-8 mb-7 size-7 rounded-xl hover:bg-white hover:text-black border-2 cursor-pointer border-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <img src="./g3.jpg" className="w-96" alt="" />

            <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-80">
              <div className="flex items-center   gap-40 w-full opacity-0 absolute  top-12 md:left-7 left-1 text-white text-2xl translate-y-4">
                <h3 className="xl:text-3xl md:text-2xl  text-sm">Ceremony</h3>
                <LuLink className="p-2 mb-8 rounded-xl hover:bg-white hover:text-black border-2 cursor-pointer xl:size-10 md:size-8 size-7  border-white" />
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <img src="./g4.jpeg" className="w-96" alt="" />

            <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
              <div className="flex items-center gap-40 w-full opacity-0 absolute  top-12 md:left-7 left-3 text-white text-2xl translate-y-4">
                <h3 className="xl:text-3xl lg:text-2xl text-xl">ppt</h3>
                <LuLink className="p-2 xl:size-10 md:size-8 size-7 rounded-xl hover:bg-white hover:text-black border-2 cursor-pointer mb-4 border-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="./prerena.jpeg" className="w-8/12" alt="" />

            <div className="layer absolute top-0 w-8/12 h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
              <div className="flex items-center gap-40 w-full opacity-0 absolute  top-12 md:left-7 left-3 text-white  translate-y-4">
                <h3 className="xl:text-3xl lg:text-2xl text-xl ">Our team</h3>
                <LuLink className="p-2 mb-8 xl:size-10 md:size-8 size-7 rounded-xl hover:bg-white hover:text-black  cursor-pointer border-2 border-white" />
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="./g6.jpeg" className="w-8/12" alt="" />

            <div className="layer absolute top-0 w-8/12 h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
              <div className="flex items-center gap-40 w-full opacity-0 absolute  top-12 md:left-7 left-3 text-white translate-y-4">
                <h3 className="xl:text-3xl lg:text-2xl text-xl ">prena</h3>
                <LuLink className="p-2 mb-4 xl:size-10 md:size-8 size-7 cursor-pointer rounded-xl hover:bg-white hover:text-black border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
