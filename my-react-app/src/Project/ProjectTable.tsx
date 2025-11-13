import React from "react";
import { ChevronDown } from "lucide-react";
import movieImage from "../assets/image 99.png";
import ToggleButon from "./ToggleButon";
import CreateProjectButton from "./CreateProjectButton";
import "./Project.css";

interface TeamMember {
  id: number;
  initials: string;
}

interface Project {
  id: number;
  name: string;
  type: string;
  thumbnail: string;
  status: string;
  progress: number;
  deadline: string;
  languages: string[];
  team: TeamMember[];
}

interface ProjectTableProps {
  projects: Project[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ProjectTable: React.FC<ProjectTableProps> = ({
  projects,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="project-table-container min-w-0">
      {/* Table Header */}
      <div className="table-header">
        <div className="flex flex-col gap-1">
          {/* Title + info icon */}
          <div className="flex items-center gap-2">
            <h2 className="table-title">
              Projects
            </h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M7.96875 7.96875L7.99779 7.95458C8.08862 7.90921 8.19055 7.89081 8.29151 7.90157C8.39247 7.91233 8.48824 7.9518 8.56746 8.0153C8.64669 8.0788 8.70606 8.16367 8.73854 8.25987C8.77103 8.35606 8.77526 8.45955 8.75075 8.55808L8.24925 10.5669C8.22456 10.6655 8.22866 10.7691 8.26107 10.8654C8.29348 10.9617 8.35284 11.0467 8.4321 11.1103C8.51136 11.1739 8.6072 11.2135 8.70825 11.2242C8.8093 11.235 8.91132 11.2166 9.00221 11.1711L9.03125 11.1562M14.875 8.5C14.875 9.33718 14.7101 10.1662 14.3897 10.9396C14.0694 11.7131 13.5998 12.4158 13.0078 13.0078C12.4158 13.5998 11.7131 14.0694 10.9396 14.3897C10.1662 14.7101 9.33718 14.875 8.5 14.875C7.66282 14.875 6.83384 14.7101 6.06039 14.3897C5.28694 14.0694 4.58417 13.5998 3.99219 13.0078C3.40022 12.4158 2.93064 11.7131 2.61027 10.9396C2.28989 10.1662 2.125 9.33718 2.125 8.5C2.125 6.80924 2.79665 5.18774 3.99219 3.99219C5.18774 2.79665 6.80924 2.125 8.5 2.125C10.1908 2.125 11.8123 2.79665 13.0078 3.99219C14.2033 5.18774 14.875 6.80924 14.875 8.5ZM8.5 5.84375H8.50567V5.84942H8.5V5.84375Z"
                  stroke="white"
                  strokeOpacity="0.65"
                  strokeWidth="1.0625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {/* Subtitle */}
          <div className="project-count">
            <span>5 Projects</span>
            <span className="mx-2">•</span>
            <span>Landscape view</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="filter-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M1.5 2C1.5 1.72386 1.72386 1.5 2 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V3.29289C10.5 3.4255 10.4473 3.55268 10.3536 3.64645L7.14645 6.85355C7.05268 6.94732 7 7.0745 7 7.20711V8.5L5 10.5V7.20711C5 7.0745 4.94732 6.94732 4.85355 6.85355L1.64645 3.64645C1.55268 3.55268 1.5 3.4255 1.5 3.29289V2Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Filter</span>
          </button>
          <button className="filter-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M0.650024 3.27499L3.27502 0.649994M3.27502 0.649994L5.90002 3.27499M3.27502 0.649994V8.52499M11.15 8.52499L8.52502 11.15M8.52502 11.15L5.90002 8.52499M8.52502 11.15V3.27499"
                stroke="#E0E0E0"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            <span>Sort</span>
          </button>
          <button className="filter-button">
            <span>Sort</span>
            <ChevronDown size={14} />
          </button>
          <button className="filter-button">
            <span>Sort</span>
            <ChevronDown size={14} />
          </button>
          <button className="filter-button">
            <span>Sort</span>
            <ChevronDown size={14} />
          </button>
          <div className="h-3 w-px bg-white/10 mx-1"></div>
          <ToggleButon />
          <CreateProjectButton />
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper min-w-0">
        <table className="projects-table">
          <thead>
            <tr>
              <th className="th-checkbox">
                <input type="checkbox" />
              </th>
              <th className="th-project">
                <div className="th-content">
                  <span>Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M4 4.5L6 2.5L8 4.5M8 7.5L6 9.5L4 7.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              <th className="th-status">Status</th>
              <th className="th-progress">Progress</th>
              <th className="th-deadline">Deadline</th>
              <th className="th-language">Language</th>
              <th className="th-team">Team</th>
              <th className="th-actions"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="table-row">
                <td className="td-checkbox">
                  <input type="checkbox" />
                </td>
                <td className="td-project">
                  <div className="project-info">
                    <div className="project-thumbnail">
                      <img src={movieImage} alt="movie" />
                    </div>
                    <div className="project-details">
                      <p className="project-name">{project.name}</p>
                      <p className="project-type">{project.type}</p>
                    </div>
                  </div>
                </td>
                <td className="td-status">
                  <span className="status-badge">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                </td>
                <td className="td-progress">
                  <span className="progress-text">{project.progress}%</span>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="td-deadline">{project.deadline}</td>
                <td className="td-language">
                  <div className="language-list">
                    {project.languages.join(", ")}
                  </div>
                </td>
                <td className="td-team">
                  <div className="team-avatars">
                    {project.team.map((member) => (
                      <div key={member.id} className="team-avatar">
                        {member.initials}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="td-actions">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M6.99996 7.58335C7.32213 7.58335 7.58329 7.32219 7.58329 7.00002C7.58329 6.67785 7.32213 6.41669 6.99996 6.41669C6.67779 6.41669 6.41663 6.67785 6.41663 7.00002C6.41663 7.32219 6.67779 7.58335 6.99996 7.58335Z"
                      stroke="white"
                      strokeWidth="1.16667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.0833 7.58335C11.4055 7.58335 11.6667 7.32219 11.6667 7.00002C11.6667 6.67785 11.4055 6.41669 11.0833 6.41669C10.7612 6.41669 10.5 6.67785 10.5 7.00002C10.5 7.32219 10.7612 7.58335 11.0833 7.58335Z"
                      stroke="white"
                      strokeWidth="1.16667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91671 7.58335C3.23887 7.58335 3.50004 7.32219 3.50004 7.00002C3.50004 6.67785 3.23887 6.41669 2.91671 6.41669C2.59454 6.41669 2.33337 6.67785 2.33337 7.00002C2.33337 7.32219 2.59454 7.58335 2.91671 7.58335Z"
                      stroke="white"
                      strokeWidth="1.16667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="table-footer">
        <button
          className="pagination-button"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M6.99895 8.62891L7.6748 7.95305L5.47948 5.75293L7.6748 3.55281L6.99895 2.87695L4.12297 5.75293L6.99895 8.62891Z"
              fill="white"
            />
          </svg>
          Prev
        </button>
        <div className="pagination-numbers">
          <button
            className={`page-number ${currentPage === 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className={`page-number ${currentPage === 2 ? "active" : ""}`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className={`page-number ${currentPage === 3 ? "active" : ""}`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
          <span className="page-ellipsis">...</span>
          <button
            className={`page-number ${currentPage === 10 ? "active" : ""}`}
            onClick={() => setCurrentPage(10)}
          >
            10
          </button>
        </div>
        <button
          className="pagination-button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === 10}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M4.7989 2.87988L4.12305 3.55574L6.31838 5.75586L4.12305 7.95598L4.7989 8.63184L7.67488 5.75586L4.7989 2.87988Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectTable;
