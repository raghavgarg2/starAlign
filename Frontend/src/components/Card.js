import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task, role }) => {
  const priorityClass =
    {
      High: "border-red-500",
      Medium: "border-orange-500",
      Low: "border-green-500",
    }[task.priority] || "";

  const title = task.title || "Untitled";
  const dueDate = task.dueDate || "No due date";
  const description = task.description || "No description available";
  const members = task.members || [];

  return (
    <div
      className={`relative border ${priorityClass} border-opacity-70 rounded-2xl p-6 mb-4 h-72 bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-80 overflow-hidden`}
    >
      <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        {task.priority}
      </div>
      <h4 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
        {title}
      </h4>
      <p className="text-sm text-gray-500 mb-2 flex items-center">
        <span className="material-icons-outlined text-base mr-1">event</span>
        {dueDate}
      </p>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        {description.length > 10
          ? description.slice(0, 10) + "....."
          : description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {members.map((member, index) => (
          <span
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full w-10 h-10 flex justify-center items-center text-sm font-semibold shadow-lg transition-transform transform hover:scale-110"
            key={index}
          >
            {member[0]}
          </span>
        ))}
      </div>
      <Link
        to={{
          pathname: "/tasksDetail",
        }}
        state={{ task, role }}
      >
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out transform hover:bg-gradient-to-l hover:from-pink-500 hover:to-indigo-500 flex items-center justify-center w-full">
          <span className="material-icons-outlined text-base mr-2"></span>
          View Project
        </button>
      </Link>
    </div>
  );
};

export default Card;
