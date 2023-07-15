import styles from "./PasswordGenerator.module.css";
import { useState } from "react";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(4);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState("");
  const [error, setError] = useState("");

  // console.log(typeof crypto.getRandomValues(new Uint32Array(4)));
  //   console.log(Array.from(crypto.getRandomValues(new Uint32Array(4))));
  //   let req = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  //   console.log("ABCDEFGHJKLMNPQRSTUVWXYZ"[258606595 % 26]);

  const generateRandomValue = (requiredCondition: string, len: number) => {
    console.log(Array.from(crypto.getRandomValues(new Uint32Array(0))));
    if (len > 0) {
      return Array.from(crypto.getRandomValues(new Uint32Array(len)))
        .map((x) => requiredCondition[x % len])
        .join("");
    } else {
      return "";
    }
  };

  const generatePassword = () => {
    let condition = "";
    let atLeastOne = "";
    let pwdLength = passwordLength;
    if (!upperCase && !lowerCase && !numbers && !symbols) {
      setError("Please select atleast one checkbox");
      return;
    }
    if (upperCase) {
      condition += "ABCDEFGHJKLMNPQRSTUVWXYZ";
      atLeastOne += generateRandomValue("ABCDEFGHJKLMNPQRSTUVWXYZ", 1);
      pwdLength = pwdLength > 0 ? pwdLength - 1 : 0;
    }
    if (lowerCase) {
      condition += "abcdefghjkmnpqrstuvwxyz";
      atLeastOne += generateRandomValue("abcdefghjkmnpqrstuvwxyz", 1);
      pwdLength = pwdLength > 0 ? pwdLength - 1 : 0;
    }
    if (numbers) {
      condition += "1234567890";
      atLeastOne += generateRandomValue("1234567890", 1);
      pwdLength = pwdLength > 0 ? pwdLength - 1 : 0;
    }
    if (symbols) {
      condition += "%^&@*#(){}!$~";
      atLeastOne += generateRandomValue("%^&@*#(){}!$~", 1);
      pwdLength = pwdLength > 0 ? pwdLength - 1 : 0;
    }
    setError("");
    const randomValue = generateRandomValue(condition, pwdLength);
    console.log(randomValue);
    const combineString = atLeastOne + randomValue;
    setPassword([...combineString].sort(() => 0.5 - Math.random()).join(""));
    calculateStrength();
  };

  const handleCopyPassword = async () => {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(password);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.log("Failed to copy: ", error);
      setCopied(false);
    }
  };

  const calculateStrength = () => {
    if (passwordLength < 1) {
      setStrength("");
    } else if (passwordLength < 4) {
      setStrength("Very Week");
    } else if (passwordLength < 8) {
      setStrength("Poor");
    } else if (passwordLength < 12) {
      setStrength("Medium");
    } else if (passwordLength < 16) {
      setStrength("Strong");
    } else {
      setStrength("Very Strong");
    }
  };

  return (
    <div className={styles.main}>
      <h1>Password Generator</h1>
      <div className={styles.container}>
        {password !== "" && (
          <div className={styles.header}>
            {/* PQ3#@!de */}
            <span>{password}</span>
            <button onClick={handleCopyPassword}>
              {copied ? "Copied 🗸" : "Copy"}
            </button>
          </div>
        )}
        <div className={styles.charLength}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <div>Character Length</div>
            <div>{passwordLength}</div>
          </div>
          <input
            type="range"
            style={{ width: "100%" }}
            min={4}
            max={20}
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </div>
        <div className={styles.checkboxes}>
          <div>
            <input
              type="checkbox"
              checked={upperCase}
              onChange={() => setUpperCase((upperCase) => !upperCase)}
            />
            <label>Include Uppercase Letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={lowerCase}
              onChange={() => setLowerCase((lowerCase) => !lowerCase)}
            />
            <label>Include Lowercase Letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((numbers) => !numbers)}
            />
            <label>Include Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols((symbols) => !symbols)}
            />
            <label>Include Symbols</label>
          </div>
          {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
        </div>
        {strength && (
          <div className={styles.strength}>
            <span>Strength: </span>
            <span>{strength}</span>
          </div>
        )}
        <button className={styles.generatePassword} onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
