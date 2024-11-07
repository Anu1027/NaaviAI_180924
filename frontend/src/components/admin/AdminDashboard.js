import React, { useState } from "react";
import NaaviLogo from "../../assets/images/logo/logo_01.png"; // Assuming this is the path for your logo

// Sidebar component
const Sidebar = ({ activeTab, onTabChange }) => {
  const tabs = ["Home", "Problem", "Solution", "Partners", "Contact"];

  return (
    <div className="w-64 bg-[#1E3A8A] text-white p-6 h-screen">
      {/* Dark blue background */}
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <img src={NaaviLogo} alt="Naavi Logo" className="w-24 h-auto" />
      </div>
      {/* <h2 className="text-2xl font-bold text-center text-white mb-8">
        Admin Dashboard
      </h2> */}
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`p-3 cursor-pointer rounded-lg mb-3 
            ${activeTab === tab ? "bg-[#3B82F6]" : "hover:bg-[#60A5FA]"}`}
          >
            {/* Lighter blue for hover */}
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Body Content component
const BodyContent = ({ activeTab }) => {
  let content;

  switch (activeTab) {
    case "Home":
      content = <p>Edit your homepage content here.</p>;
      break;
    case "Problem":
      content = <p>Edit the Problem section to describe user challenges.</p>;
      break;
    case "Solution":
      content = (
        <p>Edit the Solution section to describe your service offerings.</p>
      );
      break;
    case "Partners":
      content = (
        <p>Edit the Partners section to list your business partners.</p>
      );
      break;
    case "Contact":
      content = <p>Edit the Contact section with your contact details.</p>;
      break;
    default:
      content = <p>Select a section from the sidebar to start editing.</p>;
      break;
  }

  return <div className="flex-1 p-8 bg-[#F3F4F6]">{content}</div>;
};

// AdminDashboard component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with logo */}
        <div className="bg-[#F3F4F6] text-[#1D4ED8] p-4 flex items-center justify-between shadow-md">
          {/* Logo in Navbar */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
        </div>

        {/* Body Content */}
        <BodyContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default AdminDashboard;
