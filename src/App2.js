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
          "https://sheet.best/api/sheets/0c8edda4-4ec1-4756-9326-d4807c7cedf6"
        );
        const result = await response.json();
        setData(result);
        //console.log(result);
        //console.log(result[0]["Response ID"]);
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
          <Route path={item[["Response ID"]]} element={<App data={item} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App2;
