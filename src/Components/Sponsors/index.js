import "./sponsors.css"
import agriloja from "./sponsorsImage/agriloja.png"
import gamaUno from "./sponsorsImage/gamaUno.png"
import qbq from "./sponsorsImage/qbq.png"
import cmMafra from "./sponsorsImage/cmMafra.jpg"
import cmTorres from "./sponsorsImage/cmTorresVedras.png"

export function Sponsors () {
    return(
        <div className="mainSponsors">
            <div className="sponsorsName">
                <h2>Apoios:</h2>
            </div>
            <div className="theSponsors">
            <img src={agriloja} alt="agriloja" />
            <img src={gamaUno} alt="gamaUno" />
            <img src={qbq} alt="qbq" />
            <img src={cmTorres} alt="cmTorres" />
            <img src={cmMafra} alt="cMafra" />
            </div>
        </div>
    )
}