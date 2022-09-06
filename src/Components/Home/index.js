import { Slide } from "../Slider"
import { Mission } from "../mission"
import { TheTeam } from "../theTeam"
import { Eventos } from "../eventos"
import { Sponsors } from "../Sponsors"

export function Home() {
    return(
        <div>
      <Slide />
      <Mission />
      <TheTeam />
      <Eventos />
      <Sponsors />
        </div>
    )
}