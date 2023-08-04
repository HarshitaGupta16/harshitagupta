import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import styles from "./DataFetchingHistogram.module.css";

ChartJS.register(CategoryScale);

const DataFetchingHistogram = () => {
  const [chartData, setChartData] = useState<ChartData<"bar", unknown[]>>({
    labels: [],
    datasets: [],
  });

  const [toggleMode, setToggleMode] = useState("light");

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    );
    calculateFrequency(
      data.split("\n").filter((entry: any) => entry.trim() != "")
    );
    console.log(data);
  };

  const calculateFrequency = (data: []) => {
    let counts: any = {};
    for (const num in data) {
      counts[data[num]] = counts[data[num]] ? counts[data[num]] + 1 : 1;
    }
    setChartData({
      labels: [...Object.keys(counts)],
      datasets: [
        {
          label: "Frequency",
          data: [...Object.values(counts)],
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className={
        toggleMode === "light"
          ? `${styles.main} ${styles.light}`
          : `${styles.main} ${styles.dark}`
      }
    >
      <h1
        className={styles.heading}
        style={{ color: toggleMode === "light" ? "black" : "white" }}
      >
        Data Fetching and Visulization
      </h1>
      <button
        className={
          toggleMode === "light"
            ? `${styles.toggle} ${styles.toggleLight}`
            : `${styles.toggle} ${styles.toggleDark}`
        }
        onClick={() =>
          setToggleMode((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        {toggleMode === "light" ? (
          <i className="fa fa-moon-o moon"></i>
        ) : (
          <i className="fa fa-sun-o sun"></i>
        )}
      </button>
      <Bar data={chartData} />
    </div>
  );
};

export default DataFetchingHistogram;
