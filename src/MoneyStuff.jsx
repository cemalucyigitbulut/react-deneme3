import { useState, useEffect } from "react";

const MoneyStuff = () => {
  const [count, setCount] = useState(Number(sessionStorage.getItem("count")) || 0);
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {sessionStorage.setItem("count" , count); }, [count]);

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

  return (
    <>
      <h1>Money</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add money"
      />
      <button onClick={doClick}>Add</button>
      {error && <p style={{ color: "red" }}> {error} </p>}
      <div>your money : {count}</div>
    </>
  );
};

export default MoneyStuff;
