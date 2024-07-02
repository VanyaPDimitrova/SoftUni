/* eslint-disable react/prop-types */
function NavContainer(props) {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container"> 
          {props.children}
        </div>
    </nav>
  );
}

export default NavContainer;
