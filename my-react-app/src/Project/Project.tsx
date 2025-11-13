import React, { useState } from "react";
import bgimage from "../assets/BG.png";
import SideBar from "./SideBar";
import { Bell } from "lucide-react";
import "./Project.css";
import ProfileButton from "./ProfileButton";
import Statcard from "./statCards/Statcard";
import ProjectTable from "./ProjectTable";
import StatCard2 from "./statCards/StatCard2";
import Statcard3 from "./statCards/Statcard3";
import Statcard4 from "./statCards/Statcard4";

const Project: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sample project data - matching reference image
  const projects = [
    {
      id: 1,
      name: "Sky Walker Series",
      type: "TV Series",
      thumbnail: "/images/project1.jpg",
      status: "Deactivate",
      progress: 15,
      deadline: "2024-06-30",
      languages: ["Tamil", "Malyalam", "Telugu"],
      team: [
        { id: 1, initials: "DJ" },
        { id: 2, initials: "BR" },
        { id: 3, initials: "MK" },
        { id: 4, initials: "+1" },
      ],
    },
    {
      id: 2,
      name: "Sky Walker Series",
      type: "TV Series",
      thumbnail: "/images/project2.jpg",
      status: "Deactivate",
      progress: 15,
      deadline: "2024-06-30",
      languages: ["Tamil", "Malyalam", "Telugu"],
      team: [
        { id: 1, initials: "DJ" },
        { id: 2, initials: "BR" },
        { id: 3, initials: "MK" },
        { id: 4, initials: "+1" },
      ],
    },
    {
      id: 3,
      name: "Sky Walker Series",
      type: "TV Series",
      thumbnail: "/images/project3.jpg",
      status: "Deactivate",
      progress: 15,
      deadline: "2024-06-30",
      languages: ["Tamil", "Malyalam", "Telugu"],
      team: [
        { id: 1, initials: "DJ" },
        { id: 2, initials: "BR" },
        { id: 3, initials: "MK" },
        { id: 4, initials: "+1" },
      ],
    },
    {
      id: 4,
      name: "Sky Walker Series",
      type: "TV Series",
      thumbnail: "/images/project4.jpg",
      status: "Deactivate",
      progress: 15,
      deadline: "2024-06-30",
      languages: ["Tamil", "Malyalam", "Telugu"],
      team: [
        { id: 1, initials: "DJ" },
        { id: 2, initials: "BR" },
        { id: 3, initials: "MK" },
        { id: 4, initials: "+1" },
      ],
    },
  ];

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <img
        src={bgimage}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-blur-[10px]">
        <div className="w-full h-screen flex px-6 gap-6 py-6">
          <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

          {/* Main Content Area with project-container */}
          <div className={`project-container flex-1 flex flex-col ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            {/* Top Navigation Bar */}
            <div className="top-nav">
              <div className="top-nav-left">
                <div className="top-nav-title-row">
                  <span className="chinese-letter">환영합니다,</span>
                  <span className="english-letter">
                    Cinema Studio Workspace
                  </span>
                </div>
                <p className="sub-heading-text">
                  Manage your production projects and resources
                </p>
              </div>
              <div className="top-nav-right">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search for assets, folders, & projects"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="search-icon-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M16 16L12 12M13.3333 7.33333C13.3333 10.647 10.647 13.3333 7.33333 13.3333C4.01967 13.3333 1.33333 10.647 1.33333 7.33333C1.33333 4.01967 4.01967 1.33333 7.33333 1.33333C10.647 1.33333 13.3333 4.01967 13.3333 7.33333Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="icon-button">
                  <Bell size={18} />
                  <span className="notification-dot"></span>
                </div>
                <ProfileButton />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* Stats Cards Grid */}
              <div className="stats-grid grid grid-cols-[1fr_1fr_1fr_2fr] gap-4">
                {/* Storage Used Card */}
                <Statcard />
                <StatCard2 />
                <Statcard3 />
                <Statcard4 />
              </div>
              {/* Projects Table Section */}
              <ProjectTable
                projects={projects}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
