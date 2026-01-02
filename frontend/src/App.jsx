import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import OnlineQuiz from "./components/pages/OnlineQuiz";
import LoginSignup from "./components/pages/LoginSignup";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Protected Routes */}

            <Route
              path="/onlineQuiz"
              element={
                <ProtectedRoute>
                  <OnlineQuiz />
                </ProtectedRoute>
              }
            />

            <Route path="/profile" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
