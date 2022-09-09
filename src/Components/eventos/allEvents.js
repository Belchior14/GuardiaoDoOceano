import eventos from "./eventos.json";
import "./allEvents.css";
import { useState } from "react";
import testImage from "./eventosImages/OceanConferenceMain.jpg";
import { Link } from "react-router-dom";

export function ShowAllEvents() {
  const [allEvents, setAllEvents] = useState(eventos);

  return (
    <div>
      <div>
        <h1 className="allEventsTitle">Aqui vão ficar todos os eventos</h1>
      </div>
      <div className="allEvents">
        {allEvents.map((event) => {
          return (
            <Link to={`/GuardiaoDoOceano/eventos/${event.id}`}>
              <div>
                <div className="eventBasicInfo" key={event.id}>
                  <img className="eventMainImage" src={testImage} alt="test" />
                  <h3>{event.Name}</h3>
                  <h4>{event.Date}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
