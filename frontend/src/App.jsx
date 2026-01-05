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
import ProfilePage from "./components/pages/Profile/ProfilePage";
import HelpSupport from "./components/pages/HelpSupport/HelpSupport";
import PremiumQuiz from "./components/pages/Premium/PremiumQuiz";

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
            <Route path="/support" element={<HelpSupport />} />
            <Route path="/premium" element={<PremiumQuiz />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
