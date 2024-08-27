import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Layout from "./layout/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
