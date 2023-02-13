import { useState, useEffect } from "react";

const MoneyStuff = () => {
  const [count, setCount] = useState(
    Number(sessionStorage.getItem("count")) || 0
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  const doClick = (e) => {
    if (value === "") {
      return;
    }
    const noNumber = parseInt(value);
    if (isNaN(noNumber)) {
      setError("write numbers");
      return;
    }

    setCount(count + parseInt(value));
    setValue("");
    setError(null);
  };

  const moneyClear = () => {
    setCount(0);
    setValue("");
    setError(null);
  };

  return (
    <>
      <h1>Money</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add money"
        className="AddMInput"
      />
      <div>
        <button
          className="AddM"
          onClick={doClick}
          style={{ cursor: "pointer" }}
        >
          Add
        </button>
        <button className="ClearM" onClick={moneyClear}>
          Clear Money
        </button>
      </div>
      <div>
        <br />
        <div className="YourMoney">your money : {count}</div>
      </div>
      <div className="setError">{error && <p style={{ color: "red" }}> {error} </p>}</div>
    </>
  );
};

//  <button onClick={doClick} style={{color: "crimson",backgroundColor: "black",cursor: "pointer",}} Add </button>

export default MoneyStuff;
