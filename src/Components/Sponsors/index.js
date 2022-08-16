import "./sponsors.css";
import agriloja from "./sponsorsImage/agriloja.png";
import gamaUno from "./sponsorsImage/gamaUno.png";
import qbq from "./sponsorsImage/qbq.png";
import cmMafra from "./sponsorsImage/cmMafra.jpg";
import cmTorres from "./sponsorsImage/cmTorresVedras.png";

export function Sponsors() {
  return (
    <div id="sponsors" className="mainSponsors">
      <div className="sponsorsName">
        <h2>Apoios:</h2>
      </div>
      <div className="theSponsors">
        <a href="https://agriloja.pt/" target="_blank" rel="noreferrer">
          <img src={agriloja} alt="agriloja" />
        </a>
        <a href="https://www.gamauno.pt/" target="_blank" rel="noreferrer">
          <img src={gamaUno} alt="gamaUno" />
        </a>
        <a href="https://qbq.pt/" target="_blank" rel="noreferrer">
          <img src={qbq} alt="qbq" />
        </a>
        <a href="https://www.cm-tvedras.pt/" target="_blank" rel="noreferrer">
          <img src={cmTorres} alt="cmTorres" />
        </a>
        <a href="https://www.cm-mafra.pt/" target="_blank" rel="noreferrer">
          <img src={cmMafra} alt="cMafra" />
        </a>
      </div>
    </div>
  );
}
