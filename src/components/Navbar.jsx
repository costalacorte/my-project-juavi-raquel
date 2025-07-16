import banner from "../media/banner.png";

function Navbar() {
  return (
    <header className="navbar">
      <img className="logo" src={banner} alt="Banner"/>
    </header>
  );
}

export default Navbar;
