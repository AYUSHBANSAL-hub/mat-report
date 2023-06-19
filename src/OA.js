/** @format */

import React, { useState, useEffect } from "react";

import HorizontalBarChart from "./HorizontalBarChart";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import devBeginner from "./Assets/DEV-beginner.svg"
import devintermediate from "./Assets/DEV-intermediate.svg"
import dsaBeginner from "./Assets/DSA-beginner.svg"
import dsaintermediate from "./Assets/DSA-intermediate.svg"
import "./App.css";
import Speedometer from "./Speedometer";

const OA = (yo) => {
  // console.log(yo);
  const communicate={
    "Extremely confident":5,
"Slightly confident":3,
"Not confident at all":1
  }
  const DSAData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [yo.data["DSA Score"]/10, 7 - (yo.data["DSA Score"]/10)],
        backgroundColor: ["#1FB79D", "#FE7C7A"],
        borderWidth: 2,
      },
    ],
  };
  const FrontendData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [yo.data["Frontend Score"]/10, 3 - yo.data["Frontend Score"]/10],
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
  // const [analysisText, setAnalysisText] = useState("");
  // const [CTAText, setCTAText] = useState("");
  const Overview={
    DSABeginner: "You are at a Beginner level in DSA and should focus on learning fundamentals of data structures before progressing to advanced topics. Here's a concise roadmap:",
    DSAIntermediate: "Good start! As an intermediate in DSA with some knowledge, focus on strengthening fundamentals of data structures and then advance to higher topics. Here's a concise roadmap:",
    DEVBeginner: "You are currently at a Beginner level. Start by mastering the fundamentals of front-end and back-end development, popular frameworks, and gain experience through hands-on projects. Here’s a concise roadmap:",
    DEVIntermediate: "You’re at an intermediate level. Focus on building complex projects, enhancing your proficiency in front-end and back-end frameworks, database management and deployment strategies. Here’s a concise roadmap: "
  }
  const [DSA, setDSA] = useState("Beginner");
  const [Frontend, setFrontend] = useState("Beginner");
  function checkfrontend() {
    if (
      yo.data["Have you done any tech internships?"] == "Yes" &&
      yo.data[
        "Have you learnt any framework in Back-end like Node, Spring, Django etc?"
      ] == "Yes" &&
      yo.data[
        "Have you learnt any framework in Front-end like React, Angular etc?"
      ] == "Yes" &&
      yo.data["Frontend Score"] == "30"
    ) {
      setFrontend("Intermediate");
    }
  }
  useEffect(() => {
    if (yo.data["DSA Score"] >= 40) {
      setDSA("Intermediate");
    }
    checkfrontend();
  }, []);
  return (
    <>
      <div className="overall-analysis">
        <div className="dsa-col">
          <div className="card ">
            <p className="card-heading">DSA Level</p>
            <p className="card-heading-1">{DSA}-{yo.data["DSA Score"]}/70</p>
            {/* <Bar data={DSAData} options={options} /> */}
            <Speedometer value={yo.data["DSA Score"]} maxvalue={70}/>
          </div>
          <div className="card-heading-2 dsa-card-heading-2">DSA Analysis-</div>
          {/* <div className="card-heading-3">{yo.data["DSA Score"]}/70</div> */}
          <div className="card-heading-3">{Overview[`DSA${DSA}`]}</div>
          
            {/* <p className="card-heading-4">DSA Roadmap</p> */}
            <img className="roadmap" src={DSA=="Beginner"?dsaBeginner:dsaintermediate} alt="header Image" />
          {/* <div id="analysis-text-id-dsa" className="analysis-text"></div> */}
        </div>
        <div className="full-stack-col">
          <div className="card ">
            <p className="card-heading-1">{Frontend}-{yo.data["Frontend Score"]}/30</p>
            {/* <Bar data={FrontendData} options={options} /> */}
            <Speedometer value={yo.data["Frontend Score"]} maxvalue={30}/>
          </div>
          <div className="card-heading-2">Dev Analysis-</div>
          <div className="card-heading-3">{Overview[`DEV${Frontend}`]}</div>
          {/* <div className="card-heading-3">{yo.data["Frontend Score"]}/30</div> */}
          {/* <p className="card-heading-4">Full Stack Dev Roadmap</p> */}
          <img className="roadmap" src={Frontend=="Beginner"?devBeginner:devintermediate} alt="header Image" />
          {/* <div id="analysis-text-id-frontend" className="analysis-text"></div> */}
        </div>
      </div>
    </>
  );
};

export default OA;
