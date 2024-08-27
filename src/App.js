import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layout/navbar/Navbar";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
