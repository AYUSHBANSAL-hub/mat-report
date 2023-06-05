/** @format */

import React, { useState, useEffect } from "react";
import "./App.css";

const OA = (yo) => {
  const [analysisText, setAnalysisText] = useState("");
  const [CTAText, setCTAText] = useState("");
  const qualificationCriteria = [
    {
      Name: "Full Stack Web Development",
      LR: [2, 5],
      Quant: [2, 5],
      Communication: [2, 5],
      psychometric: [
        ["b", "c"],
        ["b"],
        ["c", "d"],
        ["b"],
        ["a"],
        ["a", "b", "c", "d"],
        ["b", "c"],
        ["a", "d"],
        ["a"],
        ["a", "c"],
      ],
    },
    {
      Name: "Front-end Development",
      LR: [2, 5],
      Quant: [2, 5],
      Communication: [2, 5],
      psychometric: [
        ["a", "b", "c"],
        ["a", "b"],
        ["a", "c", "d"],
        ["a", "b"],
        ["a"],
        ["a", "b", "c", "d"],
        ["b", "c"],
        ["a", "b", "d"],
        ["a", "b"],
        ["b"],
      ],
    },
    {
      Name: "Backend Development",
      LR: [4, 5],
      Quant: [4, 5],
      Communication: [2, 5],
      psychometric: [
        ["b", "c"],
        ["b"],
        ["c", "d"],
        ["b"],
        ["a"],
        ["a", "b", "c", "d"],
        ["b", "c"],
        ["a", "d"],
        ["a"],
        ["a", "c"],
      ],
    },
    {
      Name: "Sales and Marketing",
      LR: [0, 2],
      Quant: [0, 2],
      Communication: [2, 5],
      psychometric: [
        ["a"],
        ["a"],
        ["a"],
        ["a"],
        ["b", "c"],
        ["a"],
        ["a"],
        ["b", "c"],
        ["b", "c"],
        ["a", "b"],
      ],
    },
    {
      Name: "Operations",
      LR: [0, 2],
      Quant: [0, 2],
      Communication: [0, 2],
      psychometric: [
        ["d"],
        ["d"],
        ["b"],
        ["b"],
        ["d"],
        ["a", "d"],
        ["d"],
        ["d"],
        ["d"],
        ["d"],
      ],
    },
  ];
  const careerwiseanalysis = [
    {
      Name: "Full Stack Development",
      LR: 0,
      Quant: 0,
      Communication: 0,
      psychometric: 0,
      message: `As per your Performance and Personality, <strong>Full-Stack Web Development</strong> is the best career path for you.
<br><br>
A full-stack developer possesses a wide range of skills and knowledge in software development, from front-end to back-end technologies. They have strong technical skills, problem-solving abilities, attention to detail, and effective communication skills.
      <br>
      <ol>
      <li>You have strong logical reasoning skills that can help you to excel in a full-stack developer career.</li>
      <li>You have strong Analytical skills that can help you to solve problems systematically.</li>
      <li>You have good communication skills, which will help to you communicate effectively with other developers, project managers, and clients.</li>
      </ol>`,
      CTA: `Want to know how AccioJob can help you in this process of becoming a Full Stack web Developer?
      <br>
      <a href="https://www.acciojob.com">Register NOW </a> and Join AccioJob's FREE Live course`,
    },
    {
      Name: "Front-end Development",
      LR: 0,
      Quant: 0,
      Communication: 0,
      psychometric: 0,
      message: `As per your Performance and Personality <strong>Frontend Developer</strong> is the best career path for you.
<br><br>
As a front-end developer, your responsibility is to design and develop the user interface of websites and applications. They must understand design principles well and have strong HTML, CSS, and JavaScript coding skills.
<br>
      <ol>
      <li>You have strong logical reasoning skills that can help you excel as a Front end developer.</li>
      <li>You have strong Analytical skills that can help you to approach problems in a logical and systematic manner.</li>
    <li> You have good communication skills which will help to communicate effectively with other developers, project managers, and clients.</li>
      </ol>`,
      CTA: `Want to know how AccioJob can help you in this process of becoming a Front-end Developer?
      <br>
      <a href="https://www.acciojob.com">Register NOW </a> and Join AccioJob's FREE Live course`,
    },
    {
      Name: "Backend Development",
      LR: 0,
      Quant: 0,
      Communication: 0,
      psychometric: 0,
      message: `As per your Performance and Personality <strong>Backend Developer</strong>  is the best career path for you.
      <br><br>
      A backend developer is responsible for designing and developing the server side of websites and applications. They need to have strong coding skills in programming languages such as Python, Java, or Ruby on Rails and should be able to analyze and solve complex problems.
      
      <ol>
      <li>You have strong logical and quantitative reasoning skills and can excel in a career as a backend developer.</li>
      <li>You have strong Analytical skills that can help you to approach problems in a logical and systematic manner.</li>
      <li>You have good communication skills which will help to communicate effectively with other developers, project managers, and clients.</li>
      </ol>
      `,
      CTA: `Want to know how AccioJob can help you in this process of becoming a backend Developer?
      <br>
      <a href="https://www.acciojob.com">Register NOW </a> and Join AccioJob's FREE Live course`,
    },
    {
      Name: "Sales and Marketing",
      LR: 0,
      Quant: 0,
      Communication: 0,
      psychometric: 0,
      message: ` As per your Performance and Personality, Sales and Marketing Professional is the best career path for you.
      <br><br>
      Sales and marketing professionals are responsible for developing and executing marketing strategies to promote products and services. They need to have excellent communication skill to build relationships with clients and have a good understanding of market trends.
      <ol>
      <li>You have strong communication skills and emotional intelligence and can excel in a career as a sales and marketing professional.</li>
      </ol>`,
      CTA: `<a href="https://www.acciojob.com">Register NOW </a> and unleash your potential in the IT field with AccioJob's FREE Live course! Ignite your passion for technology and pave the way to a fulfilling career!`,
    },
    {
      Name: "Operations",
      LR: 0,
      Quant: 0,
      Communication: 0,
      psychometric: 0,
      message: `
      As per your Performance and Personality Operations Professional is the best career path for you.
      <br><br>
      Operations professionals are responsible for ensuring the smooth functioning of business operations. They need to have strong analytical skills, be able to work with large amounts of data, and have a keen eye for detail to identify areas for improvement.
      <ol>
      <li>Candidates with strong quantitative reasoning skills and a focus on detail and process can excel in a career as an operations professional.</li>
      <li>You have strong communication skills that will help you to communicate effectively with team members, stakeholders, and clients.</li>
      <li>You need to improve on your analytical and problem solving skills.</li>
      </ol>`,
      CTA: `<a href="https://www.acciojob.com">Register NOW </a> and unleash your potential in the IT field with AccioJob's FREE Live course! Ignite your passion for technology and pave the way to a fulfilling career!`,
    },
  ];
  function getpsychoscore() {
    for (let i = 0; i < 5; i++) {
      let score = 0;
      qualificationCriteria[i]["psychometric"].map((item, index) => {
        // console.log(
        //   yo.data[`Psychometric Questions - Q${index + 1}`],
        //   index,
        //   item,
        //   "yoyo"
        // );
        if (item.includes(yo.data[`Psychometric Questions - Q${index + 1}`])) {
          score++;
        }
      });
      if (score >= 5) {
        careerwiseanalysis[i]["psychometric"] = 2.5;
        // console.log("changed");
      }
    }
    //console.log(careerwiseanalysis);
  }
  function updatelr() {
    for (let i = 0; i < 5; i++) {
      if (
        yo.data["Logical Reasoning - correct/total"].split("/")[0] <=
          qualificationCriteria[i]["LR"][1] &&
        yo.data["Logical Reasoning - correct/total"].split("/")[0] >=
          qualificationCriteria[i]["LR"][0]
      ) {
        careerwiseanalysis[i]["LR"] = 2.5;
      }
      if (
        yo.data["Quantitative Questions - correct/total"].split("/")[0] <=
          qualificationCriteria[i]["Quant"][1] &&
        yo.data["Quantitative Questions - correct/total"].split("/")[0] >=
          qualificationCriteria[i]["Quant"][0]
      ) {
        careerwiseanalysis[i]["Quant"] = 2.5;
      }
      if (
        yo.data["English Communication - correct/total"].split("/")[0] <=
          qualificationCriteria[i]["Communication"][1] &&
        yo.data["English Communication - correct/total"].split("/")[0] >=
          qualificationCriteria[i]["Communication"][0]
      ) {
        careerwiseanalysis[i]["Communication"] = 2.5;
      }
    }
   // console.log(careerwiseanalysis);
  }

  function findcorrectcareer() {
    let iindex = 0;
    let maxscore = 0;
    // for (let i = 0; i < 5; i++) {
    //   console.log(careerwiseanalysis[index]["Communication"] ,
    //   careerwiseanalysis[index]["LR"] ,
    //   careerwiseanalysis[index]["Quant"] ,
    //   careerwiseanalysis[index]["psychometric"],"here  you go",i,careerwiseanalysis[index]["Name"])
    //   let currentscore =
    //     careerwiseanalysis[index]["Communication"] +
    //     careerwiseanalysis[index]["LR"] +
    //     careerwiseanalysis[index]["Quant"] +
    //     careerwiseanalysis[index]["psychometric"];
    //   console.log(currentscore);
    //   if (currentscore > maxscore) {
    //     index = i;
    //     maxscore = currentscore;
    //   }
    // }
    careerwiseanalysis.map((item,index)=>{
      //console.log(item,index,"mapped")
      let currentscore=item.Communication+item.LR+item.Quant+item.psychometric;
      if (currentscore > maxscore) {
        iindex = index;
        maxscore = currentscore;
      }
    })

    console.log(
      "correct careeer is",
      careerwiseanalysis[iindex].Name,
      "with score of",
      maxscore
    );

    // return careerwiseanalysis[index].message;
    // let textplace = document.getElementById("analysis-text-id");
    // textplace.innerHTML = careerwiseanalysis[2].message;
    setAnalysisText(careerwiseanalysis[iindex].message);
    setCTAText(careerwiseanalysis[iindex].CTA);
  }

  useEffect(() => {
    updatelr();
    getpsychoscore();
    findcorrectcareer();
    const element = document.getElementById("analysis-text-id");
    if (element) {
      element.innerHTML = analysisText;
    }
    const CTAelement = document.getElementById("cta-text");
    if (CTAelement) {
      CTAelement.innerHTML = CTAText;
    }
  }, [analysisText, CTAText]);
  return (
    <>
      <div className="overall-analysis">
        <h1>Overall analysis 🔍</h1>
        <div id="analysis-text-id" className="analysis-text"></div>
      </div>
      <div className="end-box">
        <div id="cta-text">
          Want to know how AccioJob can help you in this process? Register NOW
          and Join AccioJob's FREE Live course on the 3rd and 16th of every
          month.
        </div>
        <button
          className="redirect-button download-btn"
          onClick={() => window.open("https://www.acciojob.com", "_blank")}
        >
          Join Now
        </button>
      </div>
    </>
  );
};

export default OA;
