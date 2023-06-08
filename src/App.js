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
import header from "./Assets/header.svg";
import CATTitle from "./Assets/CATTitle.svg";
import percentagecard from "./Assets/percentagecard.svg";
import logo from "./Assets/logo.svg";
import HorizontalBarChart from "./HorizontalBarChart";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";
import ReactToPdf from "react-to-pdf";
import OA from "./OA";
import ProgressBar from "./ProgressBar";
// Register the linear scale
// Chart.registerScale("linear", LinearScale);
// Chart.scaleService.addScalesToMap(LinearScale);

function App(yo) {
  //console.log(yo.data, "ayush");


  
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
     
      <div ref={ref}>
        <div className="App">
          <div className="Report">
            <div className="header-image">
              <img src={logo} alt="header Image" />
              <p className="header-2">SDE Readiness Test Report</p>
            </div>
            <div className="row-1">
              <p className="col-1-text-1">Hello, {yo.data["Full Name"]}!</p>
              <p className="col-1-text-2">
                Here’s you percentage result based on your performance analysis
              </p>
              <div className="percentage-div">
                <div className="percentage-child-1">
                  <p className="percentage-text-1">Total percentage</p>
                  <p className="percentage-text">
                    {parseInt(yo.data["Frontend Score"]) +
                      parseInt(yo.data["DSA Score"])}
                    %
                  </p>
                </div>
                  <ProgressBar percent={parseInt(yo.data["Frontend Score"]) +
                      parseInt(yo.data["DSA Score"])}/>
              </div>
            </div>
             
            
            <OA data={yo.data} />
          </div>
        </div>
      </div>
      <ReactToPdf
        targetRef={ref}
        filename="MyComponent.pdf"
        options={pdfoptions}
      >
        {({ toPdf }) => (
          <div className="button-div">
          <button className="download-button download-btn" onClick={toPdf}>
            Download PDF
          </button>
          </div>
        )}
      </ReactToPdf>
    </div>
  );
}

export default App;
