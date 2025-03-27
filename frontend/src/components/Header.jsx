import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate("/")}>My Blog</h1>

      <nav className="nav-links">
        <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
        <button className="nav-btn" onClick={() => navigate("/about")}>About</button>

        {/* Show "Add Post" only if the user is logged in */}
        {user && (
          <button className="nav-btn" onClick={() => navigate("/add-post")}>Add Post</button>
        )}

        {/* If the user is logged in, show user details on the right */}
        {user ? (
          <div className="user-dropdown">
            <button 
              className="user-btn" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Welcome, {user.username} ▼
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="nav-btn" onClick={() => navigate("/auth")}>Login / Signup</button>
        )}
      </nav>

      <DarkModeToggle />
    </header>
  );
};

export default Header;
