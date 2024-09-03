import React from "react";

const About = () => {
  return (
    <>
      <section className="flex flex-row flex-wrap h-4/5 mt-12 mb-36">
        <div className="basis-2/5 mx-28">
          <img src="/innovathon.jpeg" className="pic" alt="" />
        </div>
        <div className="basis-2/5 mx-auto my-16">
          <h1 className="headline text-5xl">About Us</h1>
          <p className="design content text-lg my-8 mr-8 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur voluptate animi soluta tenetur ipsum reiciendis neque
            pariatur iure atque ipsa, nesciunt iste placeat ea provident
            necessitatibus nisi nam quam debitis consequuntur. Fugiat alias
            provident nemo doloribus quis impedit? Veritatis, nam natus atque
            harum laborum ut recusandae nemo dolorem. Quod odit aliquam fuga
            autem libero quis facilis dolorem minus, eveniet adipisci itaque
            optio ipsum maiores sequi et mollitia deserunt delectus corrupti
            cupiditate molestiae magnam ullam asperiores impedit? Doloremque
            voluptatum enim illum.
          </p>
          <button className="border-2 px-8 text-xl rounded-3xl py-2 text-white border-white">
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
