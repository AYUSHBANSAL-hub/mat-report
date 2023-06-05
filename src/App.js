/** @format */
import ReactDOMServer from "react-dom/server";
import React, { useRef } from "react";
import { Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./App.css";
import "./button.css";
import headerImg from "./Assets/HeaderImg.svg";
import CATTitle from "./Assets/CATTitle.svg";
import percentagecard from "./Assets/percentagecard.svg";
import HorizontalBarChart from "./HorizontalBarChart";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";
import ReactToPdf from "react-to-pdf";
import OA from "./OA";
// Register the linear scale
// Chart.registerScale("linear", LinearScale);
// Chart.scaleService.addScalesToMap(LinearScale);

function App(yo) {
  console.log(yo.data, "ayush");
  const DSAData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [yo.data["Backend Score"], 70 - yo.data["Backend Score"]],
        backgroundColor: ["#1FB79D", "#FE7C7A"],
        borderWidth: 2,
      },
    ],
  };
  const FrontendData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [yo.data["Frontend Score"], 30 - yo.data["Frontend Score"]],
        backgroundColor: ["#1FB79D", "#FE7C7A"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: {
      legend: { display: false, position: "right" },
    },
    maintainAspectRatio: false,
    barThickness: 20,
  };
  const pdfoptions = {
    orientation: "portrait",
    unit: "in",
    format: [6.2, 9],
    marginLeft: "auto", // centers the content horizontally
    marginRight: "auto", // centers the content horizontally
    maxWidth: 6,
  };
  const ref = React.createRef();
  return (
    <div style={{ backgroundColor: "gray" }}>
      <ReactToPdf
        targetRef={ref}
        filename="MyComponent.pdf"
        options={pdfoptions}
      >
        {({ toPdf }) => (
          <button className="download-button download-btn" onClick={toPdf}>
            Download PDF
          </button>
        )}
      </ReactToPdf>
      <div ref={ref}>
        <div className="App">
          <div className="Report">
            <div>
              <img
                src={headerImg}
                alt="header Image"
                className="header-image"
              />
            </div>
            <div className="row-1">
              <div className="col-1">
                <img src={CATTitle} alt="title Image" />
                <p className="col-1-text-1">Hello, {yo.data["Full Name"]}!</p>
                <p className="col-1-text-2">
                  Here’s you percentage result based on your performance
                  analysis
                </p>
                <div className="percentage-div">
                  <img src={percentagecard} alt="card title" />
                  <p className="percentage-text">
                    {parseInt(yo.data["Frontend Score"]) +
                      parseInt(yo.data["Backend Score"])}
                    %
                  </p>
                </div>
              </div>
              <div className="TestAnalysis">
                <p className="Analysis-text-1">Test Analysis</p>
                <p className="Analysis-text-2">
                  Here’s you analysis report based on your recent attempted
                  tests
                </p>
                <div className="Pie-Chart-Container">
                  {/* <Pie
                    data={PieData}
                    plugins={[ChartDataLabels]}
                    options={PieOptions}
                  /> */}
                </div>
                <div className="cards">
                  <div className="card ">
                    <p className="card-heading">DSA Analysis</p>
                    <Bar data={DSAData} options={options} />
                  </div>
                  <div className="card ">
                    <p className="card-heading">Dev Analysis</p>
                    <Bar data={FrontendData} options={options} />
                  </div>
                </div>
              </div>
            </div>

            <OA data={yo.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
