import React from "react";

const Form = () => {
  return (
    <div className="p-4 rounded-2xl white w-72 h-60 flex flex-col">
      <h1 className="text-4xl text-white font-bold my-5">Connect with us</h1>
      <h3 className="text-black text-xl my-3">Name</h3>
      <input
        type="text"
        className="py-3 px-4 rounded-xl w-full"
        placeholder="enter name"
      />
      <h3 className="text-black text-xl my-3">Email</h3>
      <input
        className="py-3 w-full px-4 rounded-xl"
        type="text"
        placeholder="email"
      />
      <h3 className="text-black w-full text-xl my-3">Message</h3>
      <textarea
        name="Message"
        className="py-3 px-4 rounded-xl"
        rows={12}
      ></textarea>
    </div>
  );
};

export default Form;
