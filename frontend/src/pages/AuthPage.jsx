import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(formData.email, formData.password);
    } else {
      await register(formData.username, formData.email, formData.password);
    }
    navigate("/");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && <input type="text" name="username" placeholder="Username" onChange={handleChange} required />}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p className="mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button className="text-blue-500 ml-2" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
