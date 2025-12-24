import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Games from "./pages/games";
import Software from "./pages/software";
import Team from "./pages/team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/games" element={<Games />} />
      <Route path="/team" element={<Team />} />
      <Route path="/software" element={<Software />} />
    </Routes>
  );
}

export default App;
