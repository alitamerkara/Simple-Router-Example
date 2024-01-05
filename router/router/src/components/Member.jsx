import React from "react";
import { useSearchParams } from "react-router-dom";

const Member = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>Member</div>
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Aktif üyeler
      </button>
      <button
        onClick={() => {
          setSearchParams();
        }}
      >
        Tüm üyeler
      </button>
      {isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm Üyeler</h2>}
    </>
  );
};

export default Member;
