import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          navigator("/mission");
        }}
      >
        Missiona git
      </button>
    </>
  );
};

export default Home;
