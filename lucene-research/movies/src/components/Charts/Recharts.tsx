import styles from "./Charts.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const lineChartData = [
  {
    name: "January",
    movies: 65,
  },
  {
    name: "February",
    movies: 59,
  },
  {
    name: "March",
    movies: 80,
  },
  {
    name: "April",
    movies: 81,
  },
  {
    name: "May",
    movies: 56,
  },
  {
    name: "June",
    movies: 55,
  },
  {
    name: "July",
    movies: 40,
  },
];

const Recharts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/recharts.png`}
          alt="logo"
          height="50"
        />
      </div>
      <div className={styles.charts}>
        <div className={styles.bar}></div>

        <div className={styles.line}>
          <ResponsiveContainer width="100%" aspect={1}>
            <LineChart
              width={500}
              height={300}
              data={lineChartData}
              margin={{
                top: 20,
                bottom: 20
              }}
            >
              <CartesianGrid strokeDasharray="1" horizontal vertical stroke="#0D2036" />
              <XAxis dataKey="name" tick={{ fill: '#fff'}}/>
              <YAxis tick={{ fill: '#fff'}} />
              <Tooltip />
              <Legend />
              <Line
                dataKey="movies"
                strokeWidth={3}
                stroke="#FF6384"
                dot={{
                  fill: "#AA4258",
                  r: 5,
                  stroke: "#FF6384",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 9 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={styles.summary}>
        <p style={{ fontSize: "18px" }}>Summary</p>
        <div className={styles.points}>
          <div className={styles.point}>Responive </div>
          <div className={styles.point}>Customizable</div>
          <div className={styles.point}>Supports animation</div>
          <div className={styles.point}>Offers various types of charts</div>
          <div className={styles.point}>Detailed documentation</div>
        </div>
      </div>
    </div>
  );
};

export default Recharts;
