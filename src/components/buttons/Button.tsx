"use client";

import React from "react";

const Button = () => {
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-lg"
      onClick={() => console.log("hello world")}
    >
      Button
    </button>
  );
};

export default Button;
