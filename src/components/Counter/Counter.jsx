import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = (plusOrMinus) => {
    if (plusOrMinus === "+") {
      setCount(count + 1);
    } else if (plusOrMinus === "-" && count > 0) {
      setCount(count - 1);
    } else return count === 0;
  };

  return (
    <div className="counter">
      <p className="counter__minus" onClick={() => updateCount("-")}>
        -
      </p>
      <p className="counter__number">{count}</p>
      <p className="counter__plus" onClick={() => updateCount("+")}>
        +
      </p>
    </div>
  );
};

export default Counter;