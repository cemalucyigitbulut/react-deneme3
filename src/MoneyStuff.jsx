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

  const moneyClear = () =>{
    setCount(0);
    setValue("")
    setError(null)
  }

  return (
    <>
      <h1>Money</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add money"
      />
      <button onClick={doClick} style={{ cursor: "pointer"  }}>Add</button>
      <button onClick={moneyClear} style={{ color:"crimson"  ,backgroundColor: "black" ,cursor: "pointer" }}>Clear Money</button>
      {error && <p style={{ color: "red" }}> {error} </p>}
      <div>your money : {count}</div>

    </>
  );
};

export default MoneyStuff;
