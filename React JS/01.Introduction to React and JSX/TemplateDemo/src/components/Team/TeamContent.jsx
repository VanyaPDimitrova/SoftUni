import Column from '../common/Column';
import Row from '../common/Row';
import SectionContent from '../common/SectionContent';
import TeamContentCard from './TeamContentCard';

function TeamContent() {
    return (
        <SectionContent classText="text-center">
            <Row>
                <Column classColumn="col-md-4">
                    <TeamContentCard 
                        dataWowDelay="0.2s"
                        src="images/user1.jpg"
                        header="Nitu Singh"
                        position="Marketing Specialist"
                    />
                </Column>

                <Column classColumn="col-md-4">
                    <TeamContentCard 
                        dataWowDelay="0.4s"
                        src="images/user2.jpg"
                        header="Yogesh Singh"
                        position="CEO & Founder"
                    />
                </Column>
  
                <Column classColumn="col-md-4">
                    <TeamContentCard 
                        dataWowDelay="0.6s"
                        src="images/user3.jpg"
                        header="Nisha Sharma"
                        position="Web Develope"
                    />
                </Column>
            </Row>
        </SectionContent>
    );
}

export default TeamContent;
