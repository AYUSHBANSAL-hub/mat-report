/** @format */

import React, { useState, useEffect } from "react";

import HorizontalBarChart from "./HorizontalBarChart";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import devbeginner from "./Assets/DEV-beginner.svg"
import devintermediate from "./Assets/DEV-intermediate.svg"
import dsabeginner from "./Assets/DSA-beginner.svg"
import dsaintermediate from "./Assets/DSA-intermediate.svg"
import "./App.css";
import Speedometer from "./Speedometer";

const OA = (yo) => {
  console.log(yo);
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
    DSAbeginner: "You are at a beginner level in DSA and should focus on learning fundamentals of data structures before progressing to advanced topics. Here's a concise roadmap:",
    DSAIntermediate: "Good start! As an intermediate in DSA with some knowledge, focus on strengthening fundamentals of data structures and then advance to higher topics. Here's a concise roadmap:",
    DEVbeginner: "You are currently at a beginner level. Start by mastering the fundamentals of front-end and back-end development, popular frameworks, and gain experience through hands-on projects.Here’s a concise roadmap:",
    DEVIntermediate: "You’re at an intermediate level. Focus on building complex projects, enhancing your proficiency in front-end and back-end frameworks, database management and deployment strategies.Here’s a concise roadmap: "
  }
  const [DSA, setDSA] = useState("beginner");
  const [Frontend, setFrontend] = useState("beginner");
//   const DSApaths = {
//     beginner: `<div>
//     <div id="title">
//     <h2>Suggested DSA Learning Roadmap:</h2>
//     </div>
//     <h3>We believe you’re at a beginner level.</h3>
//     <p><strong id="basics">Understand the Fundamentals:</strong> Learn essential data structures and basic algorithms. Understand concepts and time complexities.</p>
//     <p><strong id="basics">Practice, Practice, Practice:</strong> Solve a wide range of DSA problems, starting from easy to complex. Utilize coding platforms and challenges.</p>
//     <p><strong id="basics">Dive Deeper:</strong> Explore advanced data structures, algorithms, and their real-world applications.</p>
//     <p><strong id="basics">Analyze and Optimize:</strong> Learn to analyze time and space complexity. Strive for optimized solutions.</p>
//     <p><strong id="basics">Collaborate and Seek Guidance:</strong> Engage with the DSA community, join coding groups, and seek guidance from mentors.</p>
//   </div>
//   `,
//     intermediate: `<div>
//     <div id="title">
//     <h2>Suggested DSA Learning Roadmap:</h2>
//     </div>
//     <h3>We believe you’re at an intermediate level.</h3>
//     <p><strong id="basics">Strengthen the Basics:</strong> Solidify fundamental data structures and algorithms. Review key concepts and analyze complexities.</p>
//     <p><strong id="basics">Dive into Advanced Topics:</strong> Explore advanced data structures (trees, graphs, hash tables) and complex algorithms (dynamic programming, backtracking).</p>
//     <p><strong id="basics">Practice with Purpose:</strong> Solve challenging DSA problems, participate in coding contests, and work on real-world projects.</p>
//     <p><strong id="basics">Learn from Experts:</strong> Access resources, tutorials, and courses to gain insights from experienced instructors.</p>
//     <p><strong id="basics">Collaborate and Share:</strong> Engage with the DSA community, join coding communities, and participate in collaborative challenges.</p>
//   </div>
//   `,
//   };
//   const Frontendpaths = {
//     beginner: `<div id="container">
//     <div id="title">
//     <h2>Suggested Full-Stack Development Roadmap:</h2>
//     </div>
//     <h3>We believe you’re at a beginner level.</h3>
//     <div id="content">
//       <p><strong id="basics">Front-end Framework:</strong> Deepen JavaScript knowledge. Learn a framework (React, Angular, Vue).</p>
//       <p><strong id="basics">Backend Framework:</strong> Choose a corresponding backend framework (Express.js for Node.js, Django or Flask for Python, etc). Learn about Authentication & Authorization.</p>
//       <p><strong id="basics">Full-Stack Project:</strong> Develop a full-stack web application.</p>
//       <p><strong id="basics">Internship:</strong> Apply for internships or junior developer roles.</p>
//       <p><strong id="basics">Communication:</strong> Improve technical communication skills.</p>
//     </div>
//   </div>`,
//     intermediate: `<div class="container">
//     <div>
//     <h2>Suggested Full-Stack Development Roadmap:</h2>
//     </div>
//     <h3>We believe you’re at an intermediate level.</h3>
//     <div>
//   <p><strong id="basics">Front-end &amp; Back-end:</strong> Dive into frameworks, learn state management, routing, and advanced CSS.</p>
//   <p><strong id="basics">Database:</strong> Explore ORM, migrations, and optimize database performance.</p>
//   <p><strong id="basics">Cloud &amp; Deployment:</strong> Deploy apps on AWS, Google Cloud, Azure, scale apps, and manage resources.</p>
//   <p><strong id="basics">Projects:</strong> Develop complex full-stack applications, contribute to open-source projects.</p>
//   <p><strong id="basics">Soft Skills:</strong> Improve technical communication, problem-solving, teamwork, learn Agile, Scrum.</p>
// </div>

//   `,
//   };
  // const qualificationCriteria = [
  //   {
  //     Name: "Full Stack Web Development",
  //     LR: [2, 5],
  //     Quant: [2, 5],
  //     Communication: [2, 5],
  //     psychometric: [
  //       ["b", "c"],
  //       ["b"],
  //       ["c", "d"],
  //       ["b"],
  //       ["a"],
  //       ["a", "b", "c", "d"],
  //       ["b", "c"],
  //       ["a", "d"],
  //       ["a"],
  //       ["a", "c"],
  //     ],
  //   },
  //   {
  //     Name: "Front-end Development",
  //     LR: [2, 5],
  //     Quant: [2, 5],
  //     Communication: [2, 5],
  //     psychometric: [
  //       ["a", "b", "c"],
  //       ["a", "b"],
  //       ["a", "c", "d"],
  //       ["a", "b"],
  //       ["a"],
  //       ["a", "b", "c", "d"],
  //       ["b", "c"],
  //       ["a", "b", "d"],
  //       ["a", "b"],
  //       ["b"],
  //     ],
  //   },
  //   {
  //     Name: "Backend Development",
  //     LR: [4, 5],
  //     Quant: [4, 5],
  //     Communication: [2, 5],
  //     psychometric: [
  //       ["b", "c"],
  //       ["b"],
  //       ["c", "d"],
  //       ["b"],
  //       ["a"],
  //       ["a", "b", "c", "d"],
  //       ["b", "c"],
  //       ["a", "d"],
  //       ["a"],
  //       ["a", "c"],
  //     ],
  //   },
  //   {
  //     Name: "Sales and Marketing",
  //     LR: [0, 2],
  //     Quant: [0, 2],
  //     Communication: [2, 5],
  //     psychometric: [
  //       ["a"],
  //       ["a"],
  //       ["a"],
  //       ["a"],
  //       ["b", "c"],
  //       ["a"],
  //       ["a"],
  //       ["b", "c"],
  //       ["b", "c"],
  //       ["a", "b"],
  //     ],
  //   },
  //   {
  //     Name: "Operations",
  //     LR: [0, 2],
  //     Quant: [0, 2],
  //     Communication: [0, 2],
  //     psychometric: [
  //       ["d"],
  //       ["d"],
  //       ["b"],
  //       ["b"],
  //       ["d"],
  //       ["a", "d"],
  //       ["d"],
  //       ["d"],
  //       ["d"],
  //       ["d"],
  //     ],
  //   },
  // ];
  //   const careerwiseanalysis = [
  //     {
  //       Name: "Full Stack Development",
  //       LR: 0,
  //       Quant: 0,
  //       Communication: 0,
  //       psychometric: 0,
  //       message: `As per your Performance and Personality, <strong>Full-Stack Web Development</strong> is the best career path for you.
  // <br><br>
  // A full-stack developer possesses a wide range of skills and knowledge in software development, from front-end to back-end technologies. They have strong technical skills, problem-solving abilities, attention to detail, and effective communication skills.
  //       <br>
  //       <ol>
  //       <li>You have strong logical reasoning skills that can help you to excel in a full-stack developer career.</li>
  //       <li>You have strong Analytical skills that can help you to solve problems systematically.</li>
  //       <li>You have good communication skills, which will help to you communicate effectively with other developers, project managers, and clients.</li>
  //       </ol>`,
  //       CTA: `Want to know how AccioJob can help you in this process of becoming a Full Stack web Developer?
  //       <br>
  //       <a href="https://www.acciojob.com">Register NOW </a> and Join AccioJob's FREE Live course`,
  //     },
  //     {
  //       Name: "Front-end Development",
  //       LR: 0,
  //       Quant: 0,
  //       Communication: 0,
  //       psychometric: 0,
  //       message: `As per your Performance and Personality <strong>Frontend Developer</strong> is the best career path for you.
  // <br><br>
  // As a front-end developer, your responsibility is to design and develop the user interface of websites and applications. They must understand design principles well and have strong HTML, CSS, and JavaScript coding skills.
  // <br>
  //       <ol>
  //       <li>You have strong logical reasoning skills that can help you excel as a Front end developer.</li>
  //       <li>You have strong Analytical skills that can help you to approach problems in a logical and systematic manner.</li>
  //     <li> You have good communication skills which will help to communicate effectively with other developers, project managers, and clients.</li>
  //       </ol>`,
  //       CTA: `Want to know how AccioJob can help you in this process of becoming a Front-end Developer?
  //       <br>
  //       <a href="https://www.acciojob.com">Register NOW </a> and Join AccioJob's FREE Live course`,
  //     },
  //     {
  //       Name: "Backend Development",
  //       LR: 0,
  //       Quant: 0,
  //       Communication: 0,
  //       psychometric: 0,
  //       message: `As per your Performance and Personality <strong>Backend Developer</strong>  is the best career path for you.
  //       <br><br>
  //       A backend developer is responsible for designing and developing the server side of websites and applications. They need to have strong coding skills in programming languages such as Python, Java, or Ruby on Rails and should be able to analyze and solve complex problems.

  //       <ol>
  //       <li>You have strong logical and quantitative reasoning skills and can excel in a career as a backend developer.</li>
  //       <li>You have strong Analytical skills that can help you to approach problems in a logical and systematic manner.</li>
  //       <li>You have good communication skills which will help to communicate effectively with other developers, project managers, and clients.</li>
  //       </ol>
  //       `,
  //       CTA: `Want to know how AccioJob can help you in this process of becoming a backend Developer?
  //       <br>
  //       <a href="https://www.acciojob.com">Register NOW </a> and Join AccioJob's FREE Live course`,
  //     },
  //     {
  //       Name: "Sales and Marketing",
  //       LR: 0,
  //       Quant: 0,
  //       Communication: 0,
  //       psychometric: 0,
  //       message: ` As per your Performance and Personality, Sales and Marketing Professional is the best career path for you.
  //       <br><br>
  //       Sales and marketing professionals are responsible for developing and executing marketing strategies to promote products and services. They need to have excellent communication skill to build relationships with clients and have a good understanding of market trends.
  //       <ol>
  //       <li>You have strong communication skills and emotional intelligence and can excel in a career as a sales and marketing professional.</li>
  //       </ol>`,
  //       CTA: `<a href="https://www.acciojob.com">Register NOW </a> and unleash your potential in the IT field with AccioJob's FREE Live course! Ignite your passion for technology and pave the way to a fulfilling career!`,
  //     },
  //     {
  //       Name: "Operations",
  //       LR: 0,
  //       Quant: 0,
  //       Communication: 0,
  //       psychometric: 0,
  //       message: `
  //       As per your Performance and Personality Operations Professional is the best career path for you.
  //       <br><br>
  //       Operations professionals are responsible for ensuring the smooth functioning of business operations. They need to have strong analytical skills, be able to work with large amounts of data, and have a keen eye for detail to identify areas for improvement.
  //       <ol>
  //       <li>Candidates with strong quantitative reasoning skills and a focus on detail and process can excel in a career as an operations professional.</li>
  //       <li>You have strong communication skills that will help you to communicate effectively with team members, stakeholders, and clients.</li>
  //       <li>You need to improve on your analytical and problem solving skills.</li>
  //       </ol>`,
  //       CTA: `<a href="https://www.acciojob.com">Register NOW </a> and unleash your potential in the IT field with AccioJob's FREE Live course! Ignite your passion for technology and pave the way to a fulfilling career!`,
  //     },
  //   ];
  //   function getpsychoscore() {
  //     for (let i = 0; i < 5; i++) {
  //       let score = 0;
  //       qualificationCriteria[i]["psychometric"].map((item, index) => {
  //         // console.log(
  //         //   yo.data[`Psychometric Questions - Q${index + 1}`],
  //         //   index,
  //         //   item,
  //         //   "yoyo"
  //         // );
  //         if (item.includes(yo.data[`Psychometric Questions - Q${index + 1}`])) {
  //           score++;
  //         }
  //       });
  //       if (score >= 5) {
  //         careerwiseanalysis[i]["psychometric"] = 2.5;
  //         // console.log("changed");
  //       }
  //     }
  //     //console.log(careerwiseanalysis);
  //   }
  //   function updatelr() {
  //     for (let i = 0; i < 5; i++) {
  //       if (
  //         yo.data["Logical Reasoning - correct/total"].split("/")[0] <=
  //           qualificationCriteria[i]["LR"][1] &&
  //         yo.data["Logical Reasoning - correct/total"].split("/")[0] >=
  //           qualificationCriteria[i]["LR"][0]
  //       ) {
  //         careerwiseanalysis[i]["LR"] = 2.5;
  //       }
  //       if (
  //         yo.data["Quantitative Questions - correct/total"].split("/")[0] <=
  //           qualificationCriteria[i]["Quant"][1] &&
  //         yo.data["Quantitative Questions - correct/total"].split("/")[0] >=
  //           qualificationCriteria[i]["Quant"][0]
  //       ) {
  //         careerwiseanalysis[i]["Quant"] = 2.5;
  //       }
  //       if (
  //         yo.data["English Communication - correct/total"].split("/")[0] <=
  //           qualificationCriteria[i]["Communication"][1] &&
  //         yo.data["English Communication - correct/total"].split("/")[0] >=
  //           qualificationCriteria[i]["Communication"][0]
  //       ) {
  //         careerwiseanalysis[i]["Communication"] = 2.5;
  //       }
  //     }
  //    // console.log(careerwiseanalysis);
  //   }
  //   function findcorrectcareer() {
  //     let iindex = 0;
  //     let maxscore = 0;
  //     // for (let i = 0; i < 5; i++) {
  //     //   console.log(careerwiseanalysis[index]["Communication"] ,
  //     //   careerwiseanalysis[index]["LR"] ,
  //     //   careerwiseanalysis[index]["Quant"] ,
  //     //   careerwiseanalysis[index]["psychometric"],"here  you go",i,careerwiseanalysis[index]["Name"])
  //     //   let currentscore =
  //     //     careerwiseanalysis[index]["Communication"] +
  //     //     careerwiseanalysis[index]["LR"] +
  //     //     careerwiseanalysis[index]["Quant"] +
  //     //     careerwiseanalysis[index]["psychometric"];
  //     //   console.log(currentscore);
  //     //   if (currentscore > maxscore) {
  //     //     index = i;
  //     //     maxscore = currentscore;
  //     //   }
  //     // }
  //     careerwiseanalysis.map((item,index)=>{
  //       //console.log(item,index,"mapped")
  //       let currentscore=item.Communication+item.LR+item.Quant+item.psychometric;
  //       if (currentscore > maxscore) {
  //         iindex = index;
  //         maxscore = currentscore;
  //       }
  //     })

  //     console.log(
  //       "correct careeer is",
  //       careerwiseanalysis[iindex].Name,
  //       "with score of",
  //       maxscore
  //     );

  //     // return careerwiseanalysis[index].message;
  //     // let textplace = document.getElementById("analysis-text-id");
  //     // textplace.innerHTML = careerwiseanalysis[2].message;
  //     setAnalysisText(careerwiseanalysis[iindex].message);
  //     setCTAText(careerwiseanalysis[iindex].CTA);
  //   }
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
    // const dsaelement = document.getElementById("analysis-text-id-dsa");
    // if (dsaelement) {
    //   dsaelement.innerHTML = DSApaths[DSA];
    // }
    // const frontendelement = document.getElementById(
    //   "analysis-text-id-frontend"
    // );
    // if (frontendelement) {
    //   frontendelement.innerHTML = Frontendpaths[Frontend];
    // }
    // const CTAelement = document.getElementById("cta-text");
    // if (CTAelement) {
    //   CTAelement.innerHTML = CTAText;
    // }
  }, []);
  return (
    <>
      <div className="overall-analysis">
        <div className="dsa-col">
          <div className="card ">
            <p className="card-heading">DSA Level</p>
            <p className="card-heading-1">{DSA} {yo.data["DSA Score"]}/70</p>
            {/* <Bar data={DSAData} options={options} /> */}
            <Speedometer value={yo.data["DSA Score"]/10} maxvalue={7}/>
          </div>
          <div className="card-heading-2">DSA Analysis-</div>
          {/* <div className="card-heading-3">{yo.data["DSA Score"]}/70</div> */}
          <div className="card-heading-3">{Overview[`DSA${DSA}`]}</div>
          
            {/* <p className="card-heading-4">DSA Roadmap</p> */}
            <img className="roadmap" src={DSA=="beginner"?dsabeginner:dsaintermediate} alt="header Image" />
          {/* <div id="analysis-text-id-dsa" className="analysis-text"></div> */}
        </div>
        <div className="full-stack-col">
          <div className="card ">
            <p className="card-heading">Full Stack Dev Level</p>
            <p className="card-heading-1">{Frontend} {yo.data["Frontend Score"]}/30</p>
            {/* <Bar data={FrontendData} options={options} /> */}
            <Speedometer value={yo.data["Frontend Score"]/10} maxvalue={3}/>
          </div>
          <div className="card-heading-2">Dev Analysis-</div>
          <div className="card-heading-3">{Overview[`DEV${Frontend}`]}</div>
          {/* <div className="card-heading-3">{yo.data["Frontend Score"]}/30</div> */}
          {/* <p className="card-heading-4">Full Stack Dev Roadmap</p> */}
          <img className="roadmap" src={Frontend=="beginner"?devbeginner:devintermediate} alt="header Image" />
          {/* <div id="analysis-text-id-frontend" className="analysis-text"></div> */}
        </div>
      </div>
    </>
  );
};

export default OA;
