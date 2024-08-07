/* eslint-disable react/prop-types */
function NavigationList(props) {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        {props.children}
      </ul>
    </div>
  );
}

export default NavigationList;
