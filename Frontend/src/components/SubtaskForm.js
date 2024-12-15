import React, { useState, useEffect } from "react";

const AddSubtask = () => {
  const [formData, setFormData] = useState({
    subTask: "",
    assignedTo: "",
  });
  const [subtasks, setSubtasks] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const baseUrl = "https://collaborative-project-managemnet-tool.onrender.com/subtasks";

  useEffect(() => {
    const fetchSubtasks = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch subtasks: ${response.statusText}`);
        }
        const data = await response.json();
        setSubtasks(data);
      } catch (error) {
        console.error("Error fetching subtasks: ", error.message);
        setError("Failed to load subtasks.");
      }
    };

    fetchSubtasks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { subTask, assignedTo } = formData;

    if (!subTask || !assignedTo) {
      setError("All fields are required.");
      return;
    }

    try {
      console.log("Submitting subtask:", formData);

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subTask,
          AssignedTo: assignedTo,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to add subtask: ${response.statusText}`);
      }

      const newSubtask = await response.json();
      setSubtasks([...subtasks, newSubtask]);
      setSuccess("Subtask added successfully!");
      setError("");
      setFormData({ subTask: "", assignedTo: "" });
    } catch (error) {
      console.error("Error adding subtask: ", error.message);
      setError("Failed to add subtask.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete subtask: ${response.statusText}`);
      }

      setSubtasks(subtasks.filter((subtask) => subtask._id !== id));
      setSuccess("Subtask deleted successfully!");
      setError("");
    } catch (error) {
      console.error("Error deleting subtask: ", error.message);
      setError("Failed to delete subtask.");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-animated shadow-lg rounded-lg max-w-md mx-auto transition-transform duration-300 transform hover:scale-105">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 animate-fadeIn">
        Add Subtask
      </h3>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 sm:p-4 mb-4 rounded-lg shadow-lg animate-slideIn">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-3 sm:p-4 mb-4 rounded-lg shadow-lg animate-slideIn">
          {success}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-gray-700 text-sm sm:text-base font-bold mb-2"
            htmlFor="subTask"
          >
            Subtask
          </label>
          <input
            id="subTask"
            name="subTask"
            type="text"
            placeholder="Enter subtask description"
            value={formData.subTask}
            onChange={handleChange}
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm sm:text-base font-bold mb-2"
            htmlFor="assignedTo"
          >
            Assigned To
          </label>
          <input
            id="assignedTo"
            name="assignedTo"
            type="text"
            placeholder="Enter username"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Add Subtask
          </button>
        </div>
      </form>

      <div className="mt-4">
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 animate-fadeIn">
          Added Subtasks:
        </h4>
        <ul className="space-y-2">
          {subtasks.length > 0 ? (
            subtasks.map((subtask) => (
              <li
                key={subtask._id}
                className="flex justify-between items-center bg-white shadow-sm rounded-lg p-3 transition-transform duration-300 hover:scale-105"
              >
                <span className="text-gray-800 text-sm sm:text-base">
                  {subtask.subTask} - {subtask.AssignedTo}{" "}
                </span>
                <button
                  onClick={() => handleDelete(subtask._id)}
                  className="text-red-600 hover:text-red-800 transition duration-300 text-sm sm:text-base"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-sm sm:text-base">
              No subtasks added yet.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AddSubtask;
