import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamContainer from "./components/TeamContainer";
import CardContainer from "./components/CardContainer";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Completed from "./components/Completed";
import InProgress from "./components/InProgress";
import ToDo from "./components/ToDo";
import CreateProject from "./components/CreateProject";
import Homepage from "./components/Homepage";
import { useState } from "react";
import CardDetail from "./components/CardDetail";
import Contact from "./components/Contact";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setLoginStatus = (status) => {
    setIsUserLoggedIn(status);
  };

  return (
    <Router>
      {isUserLoggedIn ? (
        <div className="flex h-screen">
          <SideBar
            setLoginStatus={setLoginStatus}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <div className="flex flex-col w-full">
            <main className="flex-1 p-6 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tasks" element={<CardContainer />} />
                <Route path="/tasksDetail" element={<CardDetail />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/inprogress" element={<InProgress />} />
                <Route path="/team" element={<TeamContainer />} />
                <Route path="/create-project" element={<CreateProject />} />
                <Route path="/logout" element={<Homepage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<div>Page Not Found</div>} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={<Login setLoginStatus={setLoginStatus} />}
          />
          <Route
            path="/signup"
            element={<SignUp setLoginStatus={setLoginStatus} />}
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
