"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

export default function Testinomial() {
  return (
    <section className="max-w-full min-h-96 my-40 gap-8 mx-28 flex ">
      <div className="flex-1 ">
        <h1 className="headline text-5xl">Testinomials</h1>
        <p className="design text-md my-8 text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nesciunt qui dolorem sed doloribus dolore porro cumque autem et earum
          voluptates sit, molestiae sunt dolor velit esse reprehenderit officiis
          libero dignissimos illum maxime cum? ex.
        </p>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        s
        className="mySwiper my-6"
      >
        <SwiperSlide>
          <div className="test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" test-bg rounded-3xl py-4 px-16  text-white">
            <p className="design">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              veritatis distinctio nobis quas molestiae ratione eos, sit,
              laudantium delectus veniam consequuntur explicabo. Harum debitis
              beatae eos quibusdam inventore suscipit rem.
            </p>
            <div className="flex my-4">
              <Image
                src="/t4.jpg"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="py-2 px-6">
                <h2>Suraj Tripathi</h2>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
