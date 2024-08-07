import AboutContent from "./AboutContent";
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';

function About() {
    return (
        <Section
            section="about"
            dataScrollIndex="1" 
            sectionClass="prelative"
        >
            <SectionHeader 
                header="About"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
            />
            <AboutContent />
        </Section>
   
     
    );
}

export default About;
