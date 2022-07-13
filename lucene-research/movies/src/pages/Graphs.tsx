import styles from "./Graphs.module.css";
import ChartJS from "../components/Charts/ChartJS";
import Recharts from "../components/Charts/Recharts";

const Graphs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
            <h1>JavaScript Graph Libraries Research</h1>
            <p>Libraries:</p>
        </div>
        <ChartJS/>
        <Recharts/>
         
        

    </div>
  );
};

export default Graphs;
