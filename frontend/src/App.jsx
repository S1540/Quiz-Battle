import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import OnlineQuiz from "./components/pages/OnlineQuiz";
import LoginSignup from "./components/pages/LoginSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onlineQuiz" element={<OnlineQuiz />} />
          <Route path="/profile" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
