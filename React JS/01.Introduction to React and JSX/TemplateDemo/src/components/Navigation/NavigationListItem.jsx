/* eslint-disable react/prop-types */
function NavigationListItem({ scroll, text }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#" data-scroll-nav={scroll}>
          {text}
        </a>
      </li>
    </>
  );
}

export default NavigationListItem;
