/* eslint-disable react/prop-types */
function NavigationContainer(props) {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container"> 
          {props.children}
        </div>
    </nav>
  );
}

export default NavigationContainer;
