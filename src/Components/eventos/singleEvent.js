import { useState } from "react";
import eventos from "./eventos.json";
import "./singleEvent.css";

export function SingleEvent() {
  const [singleEvent, setSingleEvent] = useState(eventos);
  const oneEvent = singleEvent.filter(
    (event) => event.id == window.location.href.split("/").at(-1)
  );

  return (
    <div>
      {console.log(oneEvent)}
      {oneEvent.map((event) => {
        return <h1 className="singleEvent">{event.Local}</h1>;
      })}
    </div>
  );
}
