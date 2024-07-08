import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import DownloadContent from './DownloadContent';

function Download() {
    return (
        <Section
            section="download"
        >
            <SectionHeader 
                header="Download Our App"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
                classHeader="white"
                classPTag="white"
            />

            <DownloadContent />                   
        </Section>
    );
}

export default Download;
