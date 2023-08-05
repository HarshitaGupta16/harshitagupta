import styles from "./MultiStepForm.module.css";
import { useState } from "react";

const MultiStepForm = () => {
  const [nameInfo, setNameInfo] = useState({ name: "", showName: true });
  const [emailInfo, setEmailInfo] = useState({ email: "", showEmail: false });
  const [DOBInfo, setDOBInfo] = useState({ dob: "", showDOB: false });
  const [passwordInfo, setPasswordInfo] = useState({
    password: "",
    showPassword: false,
  });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const handleNext = (currentScreen: string) => {
    if (currentScreen === "name") {
      if (nameInfo.name === "") {
        setError("Please enter the name");
        return;
      }
      setNameInfo({ ...nameInfo, showName: false });
      setEmailInfo({ ...emailInfo, showEmail: true });
      setError("");
      setSubmit(false);
    } else if (currentScreen === "email") {
      if (emailInfo.email === "") {
        setError("Pease enter the email");
        return;
      }
      setEmailInfo({ ...emailInfo, showEmail: false });
      setDOBInfo({ ...DOBInfo, showDOB: true });
      setError("");
      setSubmit(false);
    } else if (currentScreen === "dob") {
      if (DOBInfo.dob === "") {
        setError("Please enter DOB");
        return;
      }
      setDOBInfo({ ...DOBInfo, showDOB: false });
      setPasswordInfo({ ...passwordInfo, showPassword: true });
      setError("");
      setSubmit(false);
    }
  };

  const handleSubmit = () => {
    if (passwordInfo.password === "") {
      setError("Please enter password");
      return;
    }
    setSubmit(true);
    setPasswordInfo({ ...passwordInfo, showPassword: false });
    setError("");
  };

  const handleBack = (currentScreen: string) => {
    if (currentScreen === "email") {
      setNameInfo({ ...nameInfo, showName: true });
      setEmailInfo({ ...emailInfo, showEmail: false });
    } else if (currentScreen === "dob") {
      setEmailInfo({ ...emailInfo, showEmail: true });
      setDOBInfo({ ...DOBInfo, showDOB: false });
    } else if (currentScreen === "password") {
      setDOBInfo({ ...DOBInfo, showDOB: true });
      setPasswordInfo({ ...passwordInfo, showPassword: false });
    }
  };

  const handleNewResponse = () => {
    setNameInfo({ name: "", showName: true });
    setEmailInfo({ ...emailInfo, email: "" });
    setDOBInfo({ ...DOBInfo, dob: "" });
    setPasswordInfo({ ...passwordInfo, password: "" });
    setSubmit(false);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Multi-step Form</h1>
      <div className={styles.container}>
        {nameInfo.showName && (
          <div className={styles.form}>
            <label>Name</label>
            <input
              onChange={(e) =>
                setNameInfo({ ...nameInfo, name: e.target.value })
              }
              required
              value={nameInfo.name}
            />
            <button
              className={styles["next-button"]}
              onClick={() => handleNext("name")}
            >
              Next
            </button>
          </div>
        )}
        {emailInfo.showEmail && (
          <div className={styles.form}>
            <button
              className={styles["back-button"]}
              onClick={() => handleBack("email")}
            >{`< Back`}</button>
            <label>Email</label>
            <input
              onChange={(e) =>
                setEmailInfo({ ...emailInfo, email: e.target.value })
              }
              required
              value={emailInfo.email}
            />
            <button
              className={styles["next-button"]}
              onClick={() => handleNext("email")}
            >
              Next
            </button>
          </div>
        )}
        {DOBInfo.showDOB && (
          <div className={styles.form}>
            <button
              className={styles["back-button"]}
              onClick={() => handleBack("dob")}
            >{`< Back`}</button>
            <label>DOB</label>
            <input
              type="date"
              onChange={(e) => setDOBInfo({ ...DOBInfo, dob: e.target.value })}
              required
              value={DOBInfo.dob}
            />
            <button
              className={styles["next-button"]}
              onClick={() => handleNext("dob")}
            >
              Next
            </button>
          </div>
        )}
        {passwordInfo.showPassword && (
          <div className={styles.form}>
            <button
              className={styles["back-button"]}
              onClick={() => handleBack("password")}
            >{`< Back`}</button>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) =>
                setPasswordInfo({ ...passwordInfo, password: e.target.value })
              }
              required
              value={passwordInfo.password}
            />
            <button className={styles["next-button"]} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
        {error && <div className={styles.error}>{error}</div>}
        {submit && (
          <div className={styles["display-details"]}>
            <h2>Details submitted successfully!</h2>
            <span>Name: {nameInfo.name}</span>
            <span>Email: {emailInfo.email}</span>
            <span>DOB: {DOBInfo.dob}</span>
            <span>Password: {"*".repeat(passwordInfo.password.length)}</span>
            <button
              className={styles["new-response"]}
              onClick={handleNewResponse}
            >
              Fill another response
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
