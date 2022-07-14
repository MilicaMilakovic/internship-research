import styles from "./Charts.module.css";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    country: "AD",
    "hot dog": 86,
    "hot dogColor": "hsl(40, 70%, 50%)",
    burger: 143,
    burgerColor: "hsl(310, 70%, 50%)",
    sandwich: 74,
    sandwichColor: "hsl(140, 70%, 50%)",
    kebab: 35,
    kebabColor: "hsl(23, 70%, 50%)",
    fries: 5,
    friesColor: "hsl(271, 70%, 50%)",
    donut: 36,
    donutColor: "hsl(7, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 9,
    "hot dogColor": "hsl(295, 70%, 50%)",
    burger: 179,
    burgerColor: "hsl(28, 70%, 50%)",
    sandwich: 72,
    sandwichColor: "hsl(0, 70%, 50%)",
    kebab: 50,
    kebabColor: "hsl(149, 70%, 50%)",
    fries: 110,
    friesColor: "hsl(278, 70%, 50%)",
    donut: 118,
    donutColor: "hsl(330, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 91,
    "hot dogColor": "hsl(256, 70%, 50%)",
    burger: 107,
    burgerColor: "hsl(86, 70%, 50%)",
    sandwich: 43,
    sandwichColor: "hsl(342, 70%, 50%)",
    kebab: 147,
    kebabColor: "hsl(77, 70%, 50%)",
    fries: 83,
    friesColor: "hsl(222, 70%, 50%)",
    donut: 183,
    donutColor: "hsl(179, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 106,
    "hot dogColor": "hsl(193, 70%, 50%)",
    burger: 166,
    burgerColor: "hsl(325, 70%, 50%)",
    sandwich: 87,
    sandwichColor: "hsl(35, 70%, 50%)",
    kebab: 196,
    kebabColor: "hsl(43, 70%, 50%)",
    fries: 34,
    friesColor: "hsl(219, 70%, 50%)",
    donut: 133,
    donutColor: "hsl(206, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 24,
    "hot dogColor": "hsl(46, 70%, 50%)",
    burger: 178,
    burgerColor: "hsl(71, 70%, 50%)",
    sandwich: 70,
    sandwichColor: "hsl(264, 70%, 50%)",
    kebab: 180,
    kebabColor: "hsl(84, 70%, 50%)",
    fries: 96,
    friesColor: "hsl(285, 70%, 50%)",
    donut: 11,
    donutColor: "hsl(54, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 126,
    "hot dogColor": "hsl(124, 70%, 50%)",
    burger: 143,
    burgerColor: "hsl(339, 70%, 50%)",
    sandwich: 167,
    sandwichColor: "hsl(80, 70%, 50%)",
    kebab: 141,
    kebabColor: "hsl(53, 70%, 50%)",
    fries: 167,
    friesColor: "hsl(305, 70%, 50%)",
    donut: 104,
    donutColor: "hsl(59, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 178,
    "hot dogColor": "hsl(164, 70%, 50%)",
    burger: 87,
    burgerColor: "hsl(44, 70%, 50%)",
    sandwich: 10,
    sandwichColor: "hsl(311, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(63, 70%, 50%)",
    fries: 79,
    friesColor: "hsl(354, 70%, 50%)",
    donut: 55,
    donutColor: "hsl(106, 70%, 50%)",
  },
];

const lineData = [
  {
    id: "japan",
    color: "hsl(160, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 128,
      },
      {
        x: "helicopter",
        y: 224,
      },
      {
        x: "boat",
        y: 138,
      },
      {
        x: "train",
        y: 205,
      },
      {
        x: "subway",
        y: 71,
      },
      {
        x: "bus",
        y: 188,
      },
      {
        x: "car",
        y: 42,
      },
      {
        x: "moto",
        y: 137,
      },
      {
        x: "bicycle",
        y: 22,
      },
      {
        x: "horse",
        y: 192,
      },
      {
        x: "skateboard",
        y: 78,
      },
      {
        x: "others",
        y: 143,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(202, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 134,
      },
      {
        x: "helicopter",
        y: 169,
      },
      {
        x: "boat",
        y: 186,
      },
      {
        x: "train",
        y: 276,
      },
      {
        x: "subway",
        y: 186,
      },
      {
        x: "bus",
        y: 37,
      },
      {
        x: "car",
        y: 300,
      },
      {
        x: "moto",
        y: 97,
      },
      {
        x: "bicycle",
        y: 11,
      },
      {
        x: "horse",
        y: 60,
      },
      {
        x: "skateboard",
        y: 195,
      },
      {
        x: "others",
        y: 52,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(104, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 243,
      },
      {
        x: "helicopter",
        y: 69,
      },
      {
        x: "boat",
        y: 236,
      },
      {
        x: "train",
        y: 112,
      },
      {
        x: "subway",
        y: 126,
      },
      {
        x: "bus",
        y: 165,
      },
      {
        x: "car",
        y: 266,
      },
      {
        x: "moto",
        y: 270,
      },
      {
        x: "bicycle",
        y: 46,
      },
      {
        x: "horse",
        y: 159,
      },
      {
        x: "skateboard",
        y: 245,
      },
      {
        x: "others",
        y: 84,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(276, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 44,
      },
      {
        x: "helicopter",
        y: 205,
      },
      {
        x: "boat",
        y: 35,
      },
      {
        x: "train",
        y: 279,
      },
      {
        x: "subway",
        y: 31,
      },
      {
        x: "bus",
        y: 89,
      },
      {
        x: "car",
        y: 298,
      },
      {
        x: "moto",
        y: 212,
      },
      {
        x: "bicycle",
        y: 15,
      },
      {
        x: "horse",
        y: 26,
      },
      {
        x: "skateboard",
        y: 13,
      },
      {
        x: "others",
        y: 138,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(143, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 179,
      },
      {
        x: "helicopter",
        y: 165,
      },
      {
        x: "boat",
        y: 62,
      },
      {
        x: "train",
        y: 243,
      },
      {
        x: "subway",
        y: 124,
      },
      {
        x: "bus",
        y: 234,
      },
      {
        x: "car",
        y: 291,
      },
      {
        x: "moto",
        y: 67,
      },
      {
        x: "bicycle",
        y: 216,
      },
      {
        x: "horse",
        y: 227,
      },
      {
        x: "skateboard",
        y: 234,
      },
      {
        x: "others",
        y: 222,
      },
    ],
  },
];

const Nivo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/nivo.png`}
          alt="logo"
          height="30"
        />
      </div>

      <div className={styles.charts}>
        <div className={`${styles.bar} ${styles.nivoSize}`}>
          <ResponsiveBar
            data={data}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "country",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "food",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
              return (
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              );
            }}
          />
        </div>

        <div className={`${styles.line} ${styles.nivoSize}`}>
          <ResponsiveLine
            data={lineData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.summary}>
        <p style={{ fontSize: "18px" }}>Summary</p>
        <div className={styles.points}>
          <div className={styles.point}>More popular </div>
          <div className={styles.point}>Responsive, but not by default</div>
          <div className={styles.point}>
            Customizable, but poor animations support
          </div>
          <div className={styles.point}>
            SVG only for drawing support, and no mobile support
          </div>
          <div className={styles.point}>Offers various types of charts</div>
          <div className={styles.point}>Detailed documentation</div>
        </div>
      </div>
    </div>
  );
};

export default Nivo;
