import { useState } from "react";
import { Link } from "react-router-dom";
import eventos from "./eventos.json";
import "./events.css";
import OceanConferenceMain from "./eventosImages/OceanConferenceMain.jpg";
import Event2 from "./eventosImages/OceanConference2.jpg";
import Event3 from "./eventosImages/OceanConference1.jpg";

export function Eventos() {

  const [events, setEvents] = useState(eventos);
  const [newEvents, setNewEvents] = useState(events.slice(0, 3));

  return (
    
        <div id="event" className="eventsSection">
      <div>
        <Link to="/GuardiaoDoOceano/eventos">
        <h1 className="eventTitle">Eventos</h1>
        </Link>
        
      </div>
      <div className="allEvents">
        {newEvents.map((event) => {
          return (
            <div>
              <div className="eventBasicInfo" key={event.id}>
                {event.Name === "Primeiro" && (
                  <img
                    className="eventMainImage"
                    src={OceanConferenceMain}
                    alt="test"
                  />
                )}
                {event.Name === "Segundo" && (
                  <img className="eventMainImage" src={Event2} alt="test" />
                )}
                {event.Name === "Terceiro" && (
                  <img className="eventMainImage" src={Event3} alt="test" />
                )}
                <h3>{event.Name}</h3>
                <h4>{event.Date}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>


  );
}
