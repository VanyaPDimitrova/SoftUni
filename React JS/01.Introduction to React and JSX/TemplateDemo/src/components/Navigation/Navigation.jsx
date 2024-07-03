import NavigationListItem from "./NavigationListItem";
import NavigationList from "./NavigationList";
import Logo from "./Logo";
import NavigationToggler from "./NavigationToggler";
import NavigationContainer from "./NavigationContainer";

function Navigation() {
  return (
    <NavigationContainer>
      <Logo />

      <NavigationToggler />

      <NavigationList>
        <NavigationListItem scroll="0" text="Home" />
        <NavigationListItem scroll="1" text="About" />
        <NavigationListItem scroll="2" text="Features" />
        <NavigationListItem scroll="3" text="Team" />
        <NavigationListItem scroll="4" text="Testimonials" />
        <NavigationListItem scroll="5" text="Faq" />
        <NavigationListItem scroll="6" text="Contact" />
      </NavigationList>
    </NavigationContainer>
  );
}

export default Navigation;
