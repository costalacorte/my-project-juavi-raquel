import banner from "../media/banner.png"

function Navbar (){
    return (
        <header className="navbar">
            <h1>Ironhack Recipie</h1>
            <img className="logo" src={banner} alt="Banner" />
            <nav></nav>
        </header>

    )
}

export default Navbar;