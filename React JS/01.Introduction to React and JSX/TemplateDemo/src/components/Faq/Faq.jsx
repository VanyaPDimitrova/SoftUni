import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import FaqContent from './FaqContent';

function Faq() {
    return (
        <Section 
            section="faq"
            sectionClass="prelative"
            dataScrollIndex="5"
        >
            <SectionHeader
                header="Frequently Asked Questions"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
            />

            <FaqContent />
        </Section>
    );
}

export default Faq;
