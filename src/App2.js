/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
function App2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheet.best/api/sheets/2fb4d416-fc94-42dc-8e63-13432e1fbd04"
        );
        const result = await response.json();
        setData(result);
        console.log(result);
        //console.log(result[0]["Submission ID"]);
      } catch (error) {
        //console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        {data.map((item) => (
          //console.log(item["Submission ID"])
          <Route path={item["Submission ID"]} element={<App data={item} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App2;
