import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import PostPage from "./pages/postPage";
import "./App.css";

export default function App() {
  return (
   <AuthProvider>
      <Router>
        <Header />
        <main className="max-w-6xl mx-auto mt-6 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/add-post" element={<PostPage />} /> 
            <Route path="/add-post" element={<postPage/>} />
            {/* <Route path="/login" element={<LoginPage/>} />
            <Route path="/singup" element={<SignupPage/>} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider> 
    
  );
}




