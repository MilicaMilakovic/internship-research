import styles from "./Graphs.module.css";
import ChartJS from "../components/Charts/ChartJS";
import Recharts from "../components/Charts/Recharts";

const Graphs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>JavaScript Graph Libraries Research</h1>
        <p style={{color:'#FF1744'}}>Libraries:</p> <br />
        <div className={styles.libraries}>
          <a href="https://www.npmjs.com/package/react-chartjs-2" target='_blank'><p>react-chartjs-2</p></a>
          <a href="https://recharts.org/en-US/" target="_blank"><p>Recharts</p></a>
          {/* <a><p>treca biblioteka</p></a> */}
        </div>
      </div>
      <ChartJS />
      <Recharts />
    </div>
  );
};

export default Graphs;
