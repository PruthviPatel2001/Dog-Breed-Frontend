import About from "./screens/About";
import Home from "./screens/home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
