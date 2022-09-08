import "./navBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <div id="home"></div>
      <div className="mainNavBar">
        <Link to="/GuardiaoDoOceano">
          <div>Home</div>
        </Link>
        <div>Equipa</div>
        <div>Eventos</div>
        <div>Apoios</div>
      </div>
    </div>
  );
}
