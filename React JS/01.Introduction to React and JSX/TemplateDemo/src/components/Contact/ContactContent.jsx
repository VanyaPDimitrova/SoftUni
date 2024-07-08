import Column from '../common/Column';
import Row from '../common/Row';
import SectionContent from '../common/SectionContent';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

function ContactContent() {
    return (
        <SectionContent>
            <Row>
                <Column classColum="col-sm-12 col-md-12 col-lg-8">
                    <ContactForm />
                </Column>
                <Column classColum="col-sm-12 col-md-12 col-lg-4">
                    <ContactInfo />
                </Column>
            </Row>
        </SectionContent>
    );
}

export default ContactContent;
