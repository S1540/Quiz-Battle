import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
