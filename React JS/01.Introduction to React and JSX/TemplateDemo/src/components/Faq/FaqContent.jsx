import Row from '../common/Row';
import SectionContent from '../common/SectionContent';
import faq from '../../data/faq';
import FaqContentItem from './FaqContentItem';

function FaqContent() {
    return (
        <SectionContent>
            <Row>
                {
                    faq.map((question, i) => {
                        let wow = i + 1;
                        
                        if (wow % 2 != 0) {
                            wow = (wow + 1) / 2;
                        } else {
                            wow = wow / 2;
                        }

                        return (
                            <FaqContentItem 
                                key={question.id}
                                question={question.question}
                                answer={question.answer}
                                dataWowDelay={`0.${wow*2}s`}
                            />
                        )
                    })
                }
            </Row>
        </SectionContent>
    );
}

export default FaqContent;
