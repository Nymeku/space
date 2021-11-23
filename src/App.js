import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "../src/components/explore/explore";
import Solar from "./components/solar-system/solar";
import Crew from "./components/crew/crew";
import Technology from "./components/technology/technology";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Explore />} />
        <Route exact path="/solar" element={<Solar />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
