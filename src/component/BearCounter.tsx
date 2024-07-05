import React from "react";
import useBearStore from "../store/useBearStore";

const BearCounter: React.FC = () => {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);
  const decrease = useBearStore((state) => state.decrease);

  return (
    <div>
      <h1>{bears} Bears</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default BearCounter;
