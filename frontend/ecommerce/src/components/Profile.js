// filepath: c:\Users\abist\Downloads\work1\frontend\ecommerce\src\components\Profile.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return <div>Please log in.</div>;

  return (
    <div className="profile-container">
      <div className="profile-avatar"><FaUserCircle /></div>
      <div className="profile-name">{user.name}</div>
      <div className="profile-email">{user.email}</div>
      <button className="profile-logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;