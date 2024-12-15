import React, { useState, useEffect } from "react";
import ProgressChart from "./ProgressChart.js";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://collaborative-project-managemnet-tool.onrender.com/tasks";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [url]);

  const todoTasks = tasks.filter((task) => task.status === "todo").length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "inProgress"
  ).length;

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
          <h3 className="text-xl font-semibold mb-2">All Tasks</h3>
          <p className="text-4xl font-bold">
            {inProgressTasks + todoTasks + completedTasks}
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
          <h3 className="text-xl font-semibold mb-2">To Do</h3>
          <p className="text-4xl font-bold">{todoTasks}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
          <h3 className="text-xl font-semibold mb-2">Completed</h3>
          <p className="text-4xl font-bold">{completedTasks}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
          <h3 className="text-xl font-semibold mb-2">In Progress</h3>
          <p className="text-4xl font-bold">{inProgressTasks}</p>
        </div>
      </div>
      <div className="p-6">
        <ProgressChart
          completed={completedTasks}
          inProgress={inProgressTasks}
          todo={todoTasks}
        />
      </div>
    </>
  );
};

export default Dashboard;
