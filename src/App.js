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
  //console.log(yo.data, yo.data["Total attempted/total"].split("/"));
  let piedataset = [
    parseInt(yo.data["Total Correct attempts"]),
    parseInt(
      yo.data["Total attempted/total"].split("/")[0] -
        yo.data["Total Correct attempts"]
    ),
    parseInt(25 - yo.data["Total attempted/total"].split("/")[0]),
  ];
  //console.log(piedataset, "ndjdnj");
  const lrData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        // label: "Data eew",
        data: [
          yo.data["Logical Reasoning - correct/total"].split("/")[0],
          yo.data["Logical Reasoning - correct/total"].split("/")[1] -
            yo.data["Logical Reasoning - correct/total"].split("/")[0],
        ],
        backgroundColor: ["#1FB79D", "#FE7C7A"],
        borderWidth: 2,
      },
    ],
  };
  const quantData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        // label: "Data eew",
        data: [
          yo.data["Quantitative Questions - correct/total"].split("/")[0],
          yo.data["Quantitative Questions - correct/total"].split("/")[1] -
            yo.data["Quantitative Questions - correct/total"].split("/")[0],
        ],
        backgroundColor: ["#1FB79D", "#FE7C7A"],
        borderWidth: 2,
      },
    ],
  };
  const communicationdata = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        // label: "Data eew",
        data: [
          yo.data["English Communication - correct/total"].split("/")[0],
          yo.data["English Communication - correct/total"].split("/")[1] -
            yo.data["English Communication - correct/total"].split("/")[0],
        ],
        backgroundColor: ["#1FB79D", "#FE7C7A"],
        borderWidth: 2,
      },
    ],
  };
  const PieData = {
    labels: ["Incorrect", "Correct", "Left"],
    datasets: [
      {
        // label: "Data eew",
        data: piedataset,
        backgroundColor: ["#FE7C7A", "#1FB79D", "#EBADF2"],
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
    barThickness: 12,
  };

  const PieOptions = {
    rotate: 240,
    plugins: {
      legend: {
        position: "bottom",
        rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          return percentage;
        },
        color: "#3d3d3d",
        anchor: "end",
        backgroundColor: "white",
        borderRadius: 5,
        font: {
          family: "Satoshi, sans-serif",
          weight: "semibold",
          size: 12,
        },
        borderColor: "#949391",
        borderWidth: 1,
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
        },
      },
    },
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
                <p className="col-1-text-1">Hello, {yo.data.Name}!</p>
                <p className="col-1-text-2">
                  Here’s you percentage result based on your performance
                  analysis
                </p>
                <div className="percentage-div">
                  <img src={percentagecard} alt="card title" />
                  <p className="percentage-text">
                    {(parseInt(yo.data["Total Correct attempts"]) * 100) / 25}%
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
                  <Pie
                    data={PieData}
                    plugins={[ChartDataLabels]}
                    options={PieOptions}
                  />
                </div>
              </div>
            </div>
            <div className="row-2">
              <div className="card ">
                <p className="card-heading">Logical Reasoning</p>
                <Bar data={lrData} options={options} />
              </div>
              <div className="card ">
                <p className="card-heading">Quantitative</p>
                <Bar data={quantData} options={options} />
              </div>
              <div className="card ">
                <p className="card-heading">Communication</p>
                <Bar data={communicationdata} options={options} />
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
