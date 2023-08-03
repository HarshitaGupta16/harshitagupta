import styles from "./MortgageCalculator.module.css";
import { useState } from "react";

const MortgageCalculator = () => {
  const [principalAmt, setPrincipalAmt] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [loanLength, setLoanLength] = useState<number>(0);
  const [mortgage, setMortgage] = useState<number>();
  const [error, setError] = useState("");

  const calculateMortgage = () => {
    if (!principalAmt || !interestRate || !loanLength) {
      setError("Please fill all the fields");
      return;
    }
    // P(r(1+r)^n/((1+r)^n)-1))
    const value1 =
      Math.pow(1 + interestRate / (12 * 100), loanLength * 12) *
      (interestRate / (12 * 100));
    const value2 = Math.pow(1 + interestRate / (12 * 100), loanLength * 12) - 1;
    const result = principalAmt * (value1 / value2);
    setMortgage(Math.round(result));
    setError("");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Mortgage Calculator</h1>
      <div className={styles.container}>
        <div className={styles["form-field"]}>
          <label>Principal loan amount</label>
          <input
            onChange={(e) => setPrincipalAmt(Number(e.target.value))}
            required
          />
        </div>
        <div className={styles["form-field"]}>
          <label>Interest rate</label>
          <span>
            <input
              onChange={(e) => setInterestRate(Number(e.target.value))}
              required
            />
            <span> %</span>
          </span>
        </div>
        <div className={styles["form-field"]}>
          <label>Length of loan </label>
          <span>
            <input
              onChange={(e) => setLoanLength(Number(e.target.value))}
              required
            />
            <span> Years</span>
          </span>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.calculate} onClick={calculateMortgage}>
          Calculate
        </button>
        {mortgage && (
          <div className={styles.output}>
            Your monthly mortgage payment will be {formatter.format(mortgage)}
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
