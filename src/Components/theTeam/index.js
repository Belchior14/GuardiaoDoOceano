import { useState } from "react";
import gilPhoto from "./team/gil.jpg";
import "./theTeam.css";

export function TheTeam() {
  const [showGil, setShowGil] = useState(false);
  const [showMAtilde, setShowMatilde] = useState(false);
  const [showRandom , setShowRandom] = useState(false)

  function showGilInfo() {
    if (showGil) {
      setShowGil(false);
      document.getElementById("Gil").style.color="#000000"
    } else {
      setShowGil(true);
      setShowMatilde(false);
      setShowRandom(false)
      document.getElementById("Gil").style.color="#0000ff"
      document.getElementById("Matilde").style.color="#000000"
      document.getElementById("Random").style.color="#000000"

    }
  }
  function showMatildeInfo() {
    if (showMAtilde) {
      setShowMatilde(false);
      document.getElementById("Matilde").style.color="#000000"
    } else {
      setShowMatilde(true);
      setShowGil(false);
      setShowRandom(false)
      document.getElementById("Gil").style.color="#000000"
      document.getElementById("Matilde").style.color="#0000ff"
      document.getElementById("Random").style.color="#000000"
    }
  }

  function showRandomInfo(){
    if(showRandom){
      setShowRandom(false)
      document.getElementById("Random").style.color="#000000"
    } else {
      setShowRandom(true)
      setShowMatilde(false);
      setShowGil(false);
      document.getElementById("Gil").style.color="#000000"
      document.getElementById("Matilde").style.color="#000000"
      document.getElementById("Random").style.color="#0000ff"

    }
  }

  return (
    <section id="theTeam" className="team">
      <div className="theTeamTitle">
        <h1>A equipa</h1>
      </div>
      <div className="teamPresentation">
        <div className="oneTeamMember" id="Gil" onClick={showGilInfo}>
          <div className="teamMember">
            <img className="teamPhoto" src={gilPhoto} alt="gil" />
            <h2 className="teamName">Gil Rosa</h2>
          </div>
        </div>
        <div className="oneTeamMember" id="Matilde" onClick={showMatildeInfo}>
          <div className="teamMember">
            <img className="teamPhoto" src={gilPhoto} alt="gil" />
            <h2 className="teamName">Matilde Ourique</h2>
          </div>
        </div>
        <div className="oneTeamMember" id="Random" onClick={showRandomInfo}>
          <div className="teamMember">
            <img className="teamPhoto" src={gilPhoto} alt="gil" />
            <h2 className="teamName">John Doe</h2>
          </div>
        </div>
      </div>
      {showGil ? (
        <div className="teamInformation">
          <ul >
            <li>Nome: Gil Rosa</li>
            <li>Profissão: Estudante</li>
            <li>Guardião desde: 2019</li>
            <li>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
</li>
          </ul>
        </div>
      ) : null}
      {showMAtilde ? (
        <div className="teamInformation">
          <ul >
            <li>Nome: Matilde Ourique</li>
            <li>Profissão: Estudante</li>
            <li>Guardião desde: 2019</li>
            <li>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
</li>
          </ul>
        </div>
      ) : null}
            {showRandom ? (
        <div className="teamInformation" >
          <ul >
            <li>Nome: John Doe</li>
            <li>Profissão: Estudante</li>
            <li>Guardião desde: 2019</li>
            <li>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
</li>
          </ul>
        </div>
      ) : null}
    </section>
  );
}
