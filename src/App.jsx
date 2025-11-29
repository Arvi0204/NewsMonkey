import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = import.meta.env.VITE_NEWS_API
  const pageSize = 15;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;