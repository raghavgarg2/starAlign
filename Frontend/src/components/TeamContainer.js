import React, { useEffect, useState } from "react";

const TeamContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://staralign-4.onrender.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [url]);

  if (loading)
    return <p className="text-center text-gray-600">Loading users...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-blue-100 min-h-screen flex flex-col items-center">
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-md border border-gray-300 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-light-blue-200 to-lime-200 opacity-20 transition-opacity duration-500 group-hover:opacity-60 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                  {user.name}
                </h3>
                {user.name === "Pranjal Agarwal" ? (
                  <span className="text-sm font-semibold px-4 py-1 rounded-full shadow-md bg-gradient-to-r from-teal-300 to-lime-300 text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:from-teal-400 hover:to-lime-400">
                    Tech Lead
                  </span>
                ) : (
                  <span className="text-sm font-semibold px-4 py-1 rounded-full shadow-md bg-gradient-to-r from-teal-300 to-lime-300 text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:from-teal-400 hover:to-lime-400">
                    Member
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-3 text-sm">
                <span className="font-medium">Email:</span> {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamContainer;
