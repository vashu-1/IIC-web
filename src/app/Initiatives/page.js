import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

const initiatives = () => {
  return (
    <div className="sm:mx-16 my-24">
      <h1 className="headline md:text-6xl text-4xl text-center my-16">
        Our Events
      </h1>
      <div>
        <div className="flex justify-around w-10/12 m-auto">
          <div className="basis-7/12">
            <h2 className="text-4xl text-white font-semibold my-6">
              ISEDE 2022
            </h2>
            <h3 className="text-2xl text-white font-semibold mb-4">
              21st January, 2022
            </h3>
            <p className="text-lg design leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis qui optio omnis in explicabo laudantium autem,
              recusandae esse, consequatur, cupiditate dolores doloremque iste
              ex magni magnam distinctio earum quo?
            </p>
          </div>
          <div className="basis-4/12">
            <img src="./g4.jpeg" className=" w-4/5" alt="" />
          </div>
        </div>
        <hr className="my-12" />
      </div>
      <div>
        <div className="flex justify-around w-10/12 m-auto">
          <div className="basis-4/12">
            <img src="./innovathon.jpeg" className=" w-4/5" alt="" />
          </div>
          <div className="basis-7/12">
            <h2 className="text-4xl text-white font-semibold my-6">
              Innovathon 2024
            </h2>
            <h3 className="text-2xl text-white font-semibold mb-4">
              29th January, 2024
            </h3>
            <p className="text-lg design leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis qui optio omnis in explicabo laudantium autem,
              recusandae esse, consequatur, cupiditate dolores doloremque iste
              ex magni magnam distinctio earum quo?
            </p>
          </div>
        </div>
        <hr className="my-12" />
      </div>
      <div>
        <div className="flex justify-around w-10/12 m-auto">
          <div className="basis-7/12">
            <h2 className="text-4xl text-white font-semibold my-6">
              Weekly case study
            </h2>
            <h3 className="text-2xl text-white font-semibold mb-4">
              7th August, 2024
            </h3>
            <p className="text-lg design leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis qui optio omnis in explicabo laudantium autem,
              recusandae esse, consequatur, cupiditate dolores doloremque iste
              ex magni magnam distinctio earum quo?
            </p>
          </div>
          <div className="basis-4/12">
            <img src="./case.png" className=" w-4/5" alt="" />
          </div>
        </div>
        <hr className="my-12" />
      </div>
      <div>
        <div className="flex justify-around w-10/12 m-auto">
          <div className="basis-4/12">
            <img src="./p org.jpeg" className=" w-4/5" alt="" />
          </div>
          <div className="basis-7/12">
            <h2 className="text-4xl text-white font-semibold my-6">Prerena</h2>
            <h3 className="text-2xl text-white font-semibold mb-4">
              16th March, 2024
            </h3>
            <p className="text-lg design leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis qui optio omnis in explicabo laudantium autem,
              recusandae esse, consequatur, cupiditate dolores doloremque iste
              ex magni magnam distinctio earum quo?
            </p>
          </div>
        </div>
        <hr className="my-12" />
      </div>
      <div>
        <div className="flex justify-around w-10/12 m-auto">
          <div className="basis-7/12">
            <h2 className="text-4xl text-white font-semibold my-6">Arpan</h2>
            <h3 className="text-2xl text-white font-semibold mb-4">
              29th February, 2024
            </h3>
            <p className="text-lg design leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis qui optio omnis in explicabo laudantium autem,
              recusandae esse, consequatur, cupiditate dolores doloremque iste
              ex magni magnam distinctio earum quo?
            </p>
          </div>
          <div className="basis-4/12">
            <img src="./arpan.jpeg" className=" w-4/5" alt="" />
          </div>
        </div>
        <hr className="my-12" />
      </div>
      <div>
        <div className="flex justify-around w-10/12 m-auto">
          <div className="basis-4/12">
            <img src="./kriti.jpeg" className=" w-4/5" alt="" />
          </div>
          <div className="basis-7/12">
            <h2 className="text-4xl text-white font-semibold my-6">Kriti</h2>
            <h3 className="text-2xl text-white font-semibold mb-4">
              8th March, 2024
            </h3>
            <p className="text-lg design leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis qui optio omnis in explicabo laudantium autem,
              recusandae esse, consequatur, cupiditate dolores doloremque iste
              ex magni magnam distinctio earum quo?
            </p>
          </div>
        </div>
        <hr className="my-12" />
      </div>
      <div>
        // <h1>Glimpse</h1>
        // <Swiper
        //   effect={"coverflow"}
        //   grabCursor={true}
        //   centeredSlides={true}
        //   loop={true}
        //   slidesPerView={"auto"}
        //   coverflowEffect={{
        //     rotate: 0,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 2.5,
        //   }}
        //   className="swiper_container"
        // >
        //   <SwiperSlide>
        //     <img src="./c1.png" alt="" />
        //   </SwiperSlide>
        //   <SwiperSlide>
        //     <img src="./c2.png" alt="" />
        //   </SwiperSlide>
        //   <SwiperSlide>
        //     <img src="./c3.png" alt="" />
        //   </SwiperSlide>
        //   <SwiperSlide>
        //     <img src="./c4.png" alt="" />
        //   </SwiperSlide>
        //   <SwiperSlide>
        //     <img src="./c5.png" alt="" />
        //   </SwiperSlide>
        //   <SwiperSlide>
        //     <img src="./c6.png" alt="" />
        //   </SwiperSlide>
        //   <SwiperSlide>
        //     <img src="./c7.png" alt="" />
        //   </SwiperSlide>

        //   <div className="slider-controler">
        //     <div className="swiper-button-prev slider-arrow">
        //       <ion-icon name="arrow-back-outline"></ion-icon>
        //     </div>
        //     <div className="swiper-button-next slider-arrow">
        //       <ion-icon name="arrow-forward-outline"></ion-icon>
        //     </div>
        //     <div className="swiper-pagination"></div>
        //   </div>
        // </Swiper>
      </div>
    </div>
  );
};

export default initiatives;
