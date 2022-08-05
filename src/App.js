import Slider from "react-slick";
import "./App.css";
import { Eventos, NavBar, Slide, Sponsors, TheTeam } from "./Components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slide />
      <TheTeam />
      <Eventos/>
      <Sponsors />
    </div>
  );
}

export default App;
