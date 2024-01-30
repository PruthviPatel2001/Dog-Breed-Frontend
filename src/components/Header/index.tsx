import React from "react";

const Header = () => {
  return (
    <div className="p-12">
      <div className="border rounded-xl shadow-xl p-4">
        <h1 className="  text-3xl font-bold  text-center text-[#FFE7C1]">
          Welcome To Dog Breed Classification App
        </h1>
        <h3 className="text-center text-base text-[#F3B95F] mt-2">
          Powered by Machine Learning Technology.{" "}
          <span className="text-2xl">🦾</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
