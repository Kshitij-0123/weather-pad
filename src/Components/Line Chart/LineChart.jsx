import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
ChartJS.defaults.color = "#ffffff";
const options = {
  responsive: true,
  title: {
    display: true,
    text: "Morning and Night Tempratures",
  },
};

const LineChart = ({ data }) => {
  return (
    <div className={styles.ChartDiv}>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
