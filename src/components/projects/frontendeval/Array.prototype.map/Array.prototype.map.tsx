import { useState } from "react";
import styles from "./Array.prototype.map.module.css";

const MyMap = () => {
  const [inputArray, setInputArray] = useState<any[]>([]);
  const [inputCallback, setInputCallback] = useState<any>();
  const [resultArray, setResultArray] = useState<any[]>([]);

  function map(array: Array<string | number>, callback: Function) {
    let result: any[] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }

  const handleSubmit = () => {
    console.log(typeof eval(inputCallback));
    const result = map(inputArray, eval(inputCallback));
    console.log(result);
    setResultArray(result);
    console.log(typeof resultArray);
  };

  // const mappedArray = map([1, 2, 3, 4, 5], (x: any) => x * 2);
  // console.log(mappedArray);
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Array.prototype.map</h1>
      <div className={styles.container}>
        <div className={styles.inputArray}>
          <div>
            <label>Array: </label>
            <input onChange={(e) => setInputArray(e.target.value.split(","))} />
          </div>
          <span className={styles.helperText}>
            Enter comma separated values
          </span>
        </div>
        <div className={styles.inputArray}>
          <label>Callback Function: </label>
          <input onChange={(e) => setInputCallback(e.target.value)} />
        </div>
        <button className={styles.submit} onClick={handleSubmit}>
          Submit
        </button>
        {resultArray.length !== 0 && (
          <div className={styles.result}>
            Result: [&nbsp;
            {resultArray.map((res, i) =>
              i !== resultArray.length - 1 ? `${res}, ` : res
            )}
            &nbsp;]
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMap;
