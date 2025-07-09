import banner from "../media/banner.png"

function Navbar (){
    return (
        <header>
            <h1>Ironhack Recipie</h1>
            <img id="logo" src={banner} alt="Banner" />
            <nav></nav>
        </header>

    )
}

export default Navbar;