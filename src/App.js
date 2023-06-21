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
import LabelMeter from "./LabelMeter.js";
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
  const tickStyle = {
    color: "green",
    border: "1px solid black",
    display: "inline-block",
    marginRight: "5px",
  };

  const crossStyle = {
    color: "red",
    border: "1px solid black",
    display: "inline-block",
    marginRight: "5px",
  };
  const communicate = {
    "Extremely confident": 5,
    Confident: 3,
    "Not confident at all": 1,
  };
  const ProjectData = {
    "Back-End project": "Backend",
    "Full-Stack project": "Full Stack",
    "I haven't made any projects": "None",
    "Front-End project": "Frontend",
  };
  const ref = React.createRef();
  return (
    <div style={{ backgroundColor: "gray" }}>
      <div ref={ref}>
        <div className="App">
          <div className="Report">
            <div className="header-image">
              <img className="header-bg" src={newheader} alt="header Image" />
              <img className="accio-nsdc" src={logo} alt="header Image" />
              <div className="progress-header-row">
                <p className="header-2">IT Job Readiness Test Report 🎯</p>
                <div className="percentage-div">
                  <div className="percentage-child-1">
                    <div>
                      <p className="col-1-text-1">Hello,</p>
                      <p className="col-1-text-1">{yo.data["Full Name"]}!</p>
                    </div>
                    <div className="horizontal-line"></div>
                    <div>
                      <p className="percentage-text-1">Total Percentage</p>
                      <p className="percentage-text">
                        {parseInt(yo.data["Frontend Score"]) +
                          parseInt(yo.data["DSA Score"])}
                        %
                      </p>
                      <ProgressBar
                        percent={
                          parseInt(yo.data["Frontend Score"]) +
                          parseInt(yo.data["DSA Score"])
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-1">
              <div>
                <p className="meter-1-heading">Communication Skills</p>
                <div className="meter-div-1">
                  <LabelMeter
                    score={
                      communicate[
                        yo.data[
                          "Choose the appropriate options to rate your communication skills"
                        ]
                      ]
                    }
                  />
                </div>
              </div>
              <div>
                <p className="card-heading">Full Stack Dev Level</p>
                <div className="project-div">
                  <p style={{
                    fontWeight:"600"
                  }}>
                    Project: 
                    {
                      ProjectData[
                        `${yo.data["Have you made any projects? If yes, then choose one from the below options."]}`
                      ]
                    }
                  </p>
                  <p>
                    Frontend <br></br> Framework:{" "}
                    {yo.data[
                      "Have you learnt any framework in Front-end like React, Angular etc?"
                    ] == "Yes" ? (
                      <span style={tickStyle}>&#10004;</span>
                    ) : (
                      <span style={crossStyle}>&#10008;</span>
                    )}
                  </p>
                  <p>
                    Backend <br></br> Framework:{" "}
                    {yo.data[
                      "Have you learnt any framework in Back-end like Node, Spring, Django etc?"
                    ] == "Yes" ? (
                      <span style={tickStyle}>&#10004;</span>
                    ) : (
                      <span style={crossStyle}>&#10008;</span>
                    )}
                  </p>
                </div>
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
