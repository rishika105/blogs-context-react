import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <h1
        className="font-bold text-3xl uppercase text-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        Codehelp - Blogs
      </h1>
    </div>
  );
};

export default Header;
