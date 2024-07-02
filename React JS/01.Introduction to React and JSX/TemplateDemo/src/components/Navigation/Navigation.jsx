import NavItem from "./NavItem";
import Navbar from "./Navbar";
import Logo from "./Logo";
import NavbarToggler from "./NavbarToggler";
import NavContainer from "./NavContainer";

function Navigation() {
  return (
    <NavContainer>
      <Logo />

      <NavbarToggler />

      <Navbar>
        <NavItem scroll="0" text="Home" />
        <NavItem scroll="1" text="About" />
        <NavItem scroll="2" text="Features" />
        <NavItem scroll="3" text="Team" />
        <NavItem scroll="4" text="Testimonials" />
        <NavItem scroll="5" text="Faq" />
        <NavItem scroll="6" text="Contact" />
      </Navbar>
    </NavContainer>
  );
}

export default Navigation;
