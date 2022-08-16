import "./navBar.css"

export function NavBar () {
    return(
        <div>
            <div  id="home"></div>
            <div className="mainNavBar">
            <div><a href="#home">Home</a></div>
            <div><a href="#theTeam">Equipa</a></div>
            <div><a href="#event">Eventos</a></div>
            <div><a href="#sponsors">Apoios</a></div>
        </div>
        </div>

    )
}