import { NavLink, useNavigate } from "react-router-dom";
import { menuItems } from "../utils/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ isDarkMode, setIsDarkMode, setLoginStatus }) => {
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleLogout = () => {
    setLoginStatus(false);
    navigate("/");
  };

  return (
    <div
      className={`w-64 h-screen ${
        isDarkMode ? "bg-gray-800" : "bg-gradient-to-b from-red-400 to-blue-300"
      } p-5 text-white shadow-lg`}
    >
      <h2 className="text-3xl font-bold mb-8">StartAlign</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.name === "Logout" ? (
              <button
                onClick={handleLogout}
                className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:shadow-md"
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </button>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-500 shadow-md"
                      : "hover:bg-blue-500 hover:shadow-md"
                  }`
                }
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={handleThemeToggle}
        className="mt-8 ml-14 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-300" />
        ) : (
          <MoonIcon className="w-6 h-6 text-blue-300" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
