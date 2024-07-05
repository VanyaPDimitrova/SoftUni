import Row from '../common/Row';
import SectionContent from '../common/SectionContent';
import AboutButton from './AboutButton';
import AboutContentCard from './AboutContentCard';

function AboutContent() {
    return (
        <SectionContent classText="text-center">
            <Row>
                <AboutContentCard 
                    dataWowDelay="0.2s" 
                    iClass="fa fa-life-ring" 
                    header="Support" 
                    description = "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla."
                />
                <AboutContentCard 
                    dataWowDelay="0.4s" 
                    iClass="fa fa-mobile" 
                    header="Cross Platform" 
                    description = "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla."
                />
                <AboutContentCard 
                    dataWowDelay="0.6s" 
                    iClass="fa fa-bolt" 
                    header="Fast" 
                    description = "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla."
                />
            </Row>
            <AboutButton />
        </SectionContent>

    );
}

export default AboutContent;
