import React, { useEffect, useState } from "react";
import Card from "./Card";

const Completed = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://collaborative-project-managemnet-tool.onrender.com/tasks";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
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

  if (loading)
    return <p className="text-center text-gray-600">Loading tasks...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <div className="flex flex-col gap-6">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => <Card key={task.id} task={task} />)
        ) : (
          <p className="text-center text-gray-600">No completed tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default Completed;
