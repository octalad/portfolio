import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Layout from "./layout/layout/Layout";
import Menu from "./routes/menu/Menu";
import AboutMe from "./routes/aboutMe/AboutMe";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Route>
    </Routes>
  );
}

export default App;
