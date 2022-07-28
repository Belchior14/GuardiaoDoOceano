import Slider from "react-slick";
import "./App.css";
import { NavBar, Slide, Sponsors, TheTeam } from "./Components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slide />
      <TheTeam />
      <Sponsors />
    </div>
  );
}

export default App;
