import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const chartBars = [];
  chartBars = props.dataPoints.map((el) => (
    <ChartBar
      key={el.label}
      value={el.value}
      maxValue={null}
      label={el.label}
    />
  ));
  return <div className="chart">{}</div>;
};

export default Chart;
