import React from "react";
import Form from "../components/form";
// import "./contact.css";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row my-40">
        <div className="basis-5/12 mx-28 my-24">
          <h1 className="rated text-6xl font-bold">Get in Touch</h1>
          <p className="text-white">
            Just fill this simple form in and we will contact you promptly by
            clicking on message button
          </p>
          <button>Message</button>
        </div>
        <div className="basis-5/12">
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
