import Graph from "./Graph/Graph";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";
import { useState, useEffect } from "react";
import axios from "axios";

function DataPresentation() {
  const [series, setSeries] = useState({
    labels: [""],
    datasets: [],
  });

  useEffect(() => {
    const interval = setInterval(() => feachData(), 15000);

    return () => clearInterval(interval);
  });

  const feachData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/base/person");
      mapData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const mapData = (content) => {
    let datasets = [];
    let labels = [""];

    content.forEach((content) =>
      datasets.push({
        label: content.name,
        data: labels.map(() => content.age),
        backgroundColor: randomRgba,
      })
    );
    const data = {
      labels,
      datasets,
    };

    setSeries(data);
  };

  const randomRgba = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };

  return (
    <div>
      {series.datasets.length === 0 ? <LoadingIcon /> : <Graph data={series} />}
    </div>
  );
}

export default DataPresentation;
