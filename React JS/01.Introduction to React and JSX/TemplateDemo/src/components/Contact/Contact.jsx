import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import ContactContent from './ContactContent';

function Contact() {
    return (
        <Section
            section="contact"
            dataScrollIndex="6"
        >
            <SectionHeader 
                header="Contact us"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
            />

            <ContactContent />
        </Section>
    );
}

export default Contact;
