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
import newheader from "./Assets/newheaderbackground.svg";
import CATTitle from "./Assets/CATTitle.svg";
import percentagecard from "./Assets/percentagecard.svg";
import logo from "./Assets/logo.svg";
import HorizontalBarChart from "./HorizontalBarChart";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";
import ReactToPdf from "react-to-pdf";
import OA from "./OA";
import ProgressBar from "./ProgressBar";
import LabelMeter  from "./LabelMeter.js";
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
  const communicate={
    "Extremely confident":5,
"Confident":3,
"Not confident at all":1
  }
  const ref = React.createRef();
  return (
    <div style={{ backgroundColor: "gray" }}>
      <div ref={ref}>
        <div className="App">
          <div className="Report">
            <div className="header-image">
              <img className="header-bg" src={newheader} alt="header Image" />
              <img className="accio-nsdc" src={logo} alt="header Image" />
              <p className="header-2">IT Job Readiness Test Report</p>
            </div>
            <div className="row-1">
              <div>
                <p className="meter-1-heading">Communication Skills</p>
                <div className="meter-div-1"><LabelMeter score={communicate[yo.data["Choose the appropriate options to rate your communication skills"]]}/></div>
              </div>
              <div className="percentage-div">
                <div className="percentage-child-1">
                  <p className="col-1-text-1">Hello,</p>
                  <p className="col-1-text-1">{yo.data["Full Name"]}!</p>
                  <div className="horizontal-line"></div>
                  <p className="percentage-text-1">Total percentage</p>
                  <p className="percentage-text">
                    {parseInt(yo.data["Frontend Score"]) +
                      parseInt(yo.data["DSA Score"])}
                    %
                  </p>
                </div>
                <ProgressBar
                  percent={
                    parseInt(yo.data["Frontend Score"]) +
                    parseInt(yo.data["DSA Score"])
                  }
                />
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
