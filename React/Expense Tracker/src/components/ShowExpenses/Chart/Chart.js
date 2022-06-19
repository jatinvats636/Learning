import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointValues);

  let chartBars = props.dataPoints.map((element) => (
    <ChartBar
      key={element.label}
      value={element.value}
      maxValue={totalMaximum}
      label={element.label}
    />
  ));
  return <div className="chart">{chartBars}</div>;
};

export default Chart;
