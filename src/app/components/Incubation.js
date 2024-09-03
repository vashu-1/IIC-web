import React from "react";
import Image from "next/image";

const Incubation = () => {
  return (
    <section className="flex flex-row mx-28">
      <div className="basis-2/5 my-8 mx-auto">
        <h1 className=" text-5xl headline mb-12">Incubation Center</h1>
        <p className="design text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae
          aperiam optio quasi fuga recusandae itaque facilis non eum. Laudantium
          dolore hic culpa quaerat ratione, itaque accusantium libero eius minus
          alias cum voluptates fugit doloribus iusto. Corrupti modi enim ipsa?
        </p>
      </div>
      <div className="basis-2/5 mx-auto">
        <Image src="/back.jpg" height={480} width={450} className="wrapper" />
      </div>
    </section>
  );
};

export default Incubation;
