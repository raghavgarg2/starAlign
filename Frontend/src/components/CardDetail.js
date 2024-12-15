import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FileUpload from "./FileSharing";
import AddSubtask from "./SubtaskForm";

const CardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task: project } = location.state || {};

  const [showUpload, setShowUpload] = useState(false);
  const [showSubtaskForm, setShowSubtaskForm] = useState(false);
  const [subtasks, setSubtasks] = useState([]);

  if (!project) {
    return <div>No Task Details Available</div>;
  }

  const priorityClass =
    {
      High: "bg-red-200 text-red-800",
      Medium: "bg-yellow-200 text-yellow-800",
      Low: "bg-green-200 text-green-800",
    }[project.priority] || "bg-gray-200 text-gray-800";

  const handleAddSubtask = (subtask) => {
    setSubtasks([...subtasks, subtask]);
    setShowSubtaskForm(false);
  };

  const handleDeleteSubtask = (index) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(updatedSubtasks);
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
      <div className="flex justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-3xl">
          ⬅️
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
          >
            Upload File
          </button>
          <button
            onClick={() => setShowSubtaskForm(!showSubtaskForm)}
            className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300"
          >
            Add Subtask
          </button>
        </div>
      </div>

      {showUpload && <FileUpload />}

      {showSubtaskForm && <AddSubtask onSubmit={handleAddSubtask} />}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 underline">
          {project.title}
        </h2>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
          {project.priority}
        </span>
      </div>

      <p className="text-gray-700 mb-4">{project.description}</p>

      <div className="text-sm text-gray-600 mb-4">
        <p>
          <strong className="font-bold text-gray-800">Date:</strong>{" "}
          {project.createdAt}
        </p>
        <p>
          <strong className="font-bold text-gray-800">Due Date:</strong>{" "}
          {project.dueDate}
        </p>
        <p>
          <strong className="font-bold text-gray-800">Comments:</strong>{" "}
          {project.comments}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Subtasks</h3>
        <ul className="list-disc pl-5 space-y-2">
          {subtasks.map((subtask, index) => (
            <li
              key={index}
              className="text-gray-700 flex justify-between items-center"
            >
              {subtask.username} - {subtask.role}
              <button
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
                onClick={() => handleDeleteSubtask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
