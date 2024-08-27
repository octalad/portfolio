import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <Routes>
      <Route element={<Footer />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
