import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log({ state });
  const addBtn = () => {
    dispatch({
      type: "increment"
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement"
    });
  };

  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addBtn}> increase</button>
      <button onClick={subBtn}> decrease</button>
    </div>
  );
};

export default Home;
