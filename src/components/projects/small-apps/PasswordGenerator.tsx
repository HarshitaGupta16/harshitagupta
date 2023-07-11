import { useState } from "react";
import styles from "./PasswordGenerator.module.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.log("Failed to copy: ", error);
    }
  };

  const getRandomValue = (requiredCondition: string, len: number) => {
    console.log(requiredCondition);
    console.log(len);
    return Array.from(crypto.getRandomValues(new Uint32Array(len)))
      .map((x) => requiredCondition[x % requiredCondition.length])
      .join("");
  };

  const generatePassword = () => {
    let condition = "";
    if (upperCase) {
      console.log("upper");
      condition += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowerCase) {
      condition += "abcdefghijklmnopqrstuvwxyz";
    }

    if (number) {
      condition += "0123456789";
    }

    if (symbols) {
      condition += "~!@-#$";
    }

    const randomValue = getRandomValue(condition, passwordLength);
    setPassword(randomValue);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Password Generator</h1>
      </div>
      <div className={styles.container}>
        <div className={styles["sub-header"]}>
          <span>{password}</span>
          <button onClick={copyContent}>{copied ? "copied 🗸" : "Copy"}</button>
        </div>
        <div className={styles.charLength}>
          <span className={styles.charLengthLabel}>
            <label>Character Length</label>
            <label>{passwordLength}</label>
          </span>
          <input
            type="range"
            min={4}
            max={20}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </div>
        <div className={styles.checkboxes}>
          <div>
            <input
              type="checkbox"
              onChange={() => {
                setUpperCase((upperCase) => !upperCase);
              }}
              checked={upperCase}
            />
            <label>Uppercase</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => {
                setLowerCase((lowerCase) => !lowerCase);
              }}
              checked={lowerCase}
            />
            <label>Lowercase</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => {
                setNumber((number) => !number);
              }}
              checked={number}
            />
            <label>Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => {
                setSymbols((symbols) => !symbols);
              }}
            />
            <label>Symbols</label>
          </div>
        </div>
        <div className={styles.strength}>
          <span>Strength: </span>
          <span>Medium</span>
        </div>
        <button className={styles.genPasswordBtn} onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
