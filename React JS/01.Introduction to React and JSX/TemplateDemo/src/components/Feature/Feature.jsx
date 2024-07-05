import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import FeatureContent from './FeatureContent';

function Feature() {
    return (
        <Section
            section="feature"
            dataScrollIndex="2"
        >
            <SectionHeader 
                header="Features"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
            />
            <FeatureContent />
        </Section>
    );
}

export default Feature;
