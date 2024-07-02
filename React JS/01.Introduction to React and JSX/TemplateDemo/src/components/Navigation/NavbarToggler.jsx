function NavbarToggler() {
  return (
    <button 
    className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    > 
      <span className="fas fa-bars"></span> 
    </button>
  );
}

export default NavbarToggler;
