import React from "react";
import Navbar from "../components/Navbar";
import "./about.css";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="sm:mx-16 my-24">
        <h1 className="headline md:text-5xl text-4xl text-center my-16">
          Know, Who we are?
        </h1>
        <div>
          <div className="flex lg:flex-row flex-col my-8 justify-around">
            <div className="basis-5/12">
              <h1 className="rated text-4xl mb-8 text-center">
                About BIT Sindri
              </h1>
              <p className=" text-gray-400 design my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum atque blanditiis similique ex vel beatae id deleniti,
                repellat molestiae tenetur, in rerum iure iusto tempore quos cum
                fuga maiores dolores libero quasi aspernatur eaque! Voluptatem
                hic excepturi ea similique rem. Rerum pariatur quo nobis ea et
                rem nulla ab quod perferendis vel enim voluptatem,
                necessitatibus tempora inventore atque! Accusamus, id.
              </p>
            </div>
            <div className="basis-5/12 lg:my-6 xl:my-0">
              <img src="./BIT-Sindri.jpg" className="rounded-3xl" alt="" />
            </div>
          </div>
          <div className="flex flex-row mt-32 justify-around">
            <div className="mt-20 ">
              <img
                src="./aiic-1.jpg"
                className="rounded-3xl"
                width={609}
                height={406}
                alt=""
              />
            </div>

            <div className="basis-5/12 mt-16">
              <h1 className="rated text-4xl mb-8 text-center">About IIC 6.0</h1>
              <h3 className="text-2xl text-white mb-2 mt-4">MISSION</h3>
              <p className="text-gray-400 design ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam optio non harum laudantium esse, nobis totam mollitia
                aspernatur numquam obcaecati necessitatibus iure facere qui
                aliquid! Quaerat libero repellat eveniet. Nobis nemo laborum sit
                ducimus perferendis iste animi est accusamus, asperiores ipsa
                quas delectus, provident ut recusandae unde necessitatibus
                officiis quia vitae mollitia, commodi excepturi! Sint cum
                dignissimos repellat accusamus est. Consectetur rem quisquam
                quis. Distinctio at laudantium atque magnam quisquam?
              </p>
              <h3 className="text-2xl text-white mb-2 mt-4">VISION</h3>
              <p className="text-gray-400 design ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quisquam a nam saepe amet praesentium earum excepturi sed sit
                quibusdam corrupti soluta possimus odit vitae repellat enim,
                adipisci sunt. Tempora.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-center headline text-5xl mt-28 mb-16">
              Patronages and recognitions
            </h1>
            <div className="flex justify-evenly items-center">
              <div className="w-44">
                <img src="./moe.jpeg" alt="" />
              </div>
              <div className="w-32">
                <img className="images" src="./aicte.png" alt="" />
              </div>
              <div className="w-48">
                <img className="images" src="./MoE-Logo.png" alt="" />
              </div>
              <div className="w-44">
                <img className="images" src="./iic ind.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center headline text-5xl mt-32 mb-16">
              Achievements
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
