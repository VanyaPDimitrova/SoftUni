import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import TeamContent from './TeamContent';

function Team() {
    return (
        <Section
            section="team"
            dataScrollIndex="3"
        >
            <SectionHeader 
                header="Our Team"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
            />
            <TeamContent />
        </Section>
    );
}

export default Team;
