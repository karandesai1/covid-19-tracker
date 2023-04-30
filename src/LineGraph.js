import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import numeral from "numeral";
import { Chart as ChartJS } from "chart.js/auto"

const options = {
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0a");
      },
    },
  },
  scales: {
    x: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    y: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, caseType = "cases") => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data[caseType]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  return chartData;
};

const LineGraph = ({caseType}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://disease.sh/v3/covid-19/historical/all")
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data, caseType);
          setData(chartData);
          
        });
    };
    fetchData();
  },[caseType]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                data: data,
                backgroundColor: "#3EA6E3",
                borderColor: "#CC1034",
                
              },
            ],
          }}
        />
      )}
      
    </div>
  );
};

export default LineGraph;
