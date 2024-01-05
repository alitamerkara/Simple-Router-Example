import React from "react";
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigator = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button
        onClick={() => {
          navigator(-1);
        }}
      >
        Geri Dön
      </button>
    </>
  );
};

export default Mission;
