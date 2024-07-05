import Column from '../common/Column';
import Row from '../common/Row';
import SectionContent from '../common/SectionContent';
import TestimonialSlider from './TestimonialSlider';
import TestimonialSliderItem from './TestimonialSliderItem';
import testimonials from '../../data/testimonials'

function TestimonialContent() {
    return (
        <SectionContent>
            <Row>
                <Column classColumn="offset-md-2 col-md-8 col-sm-12">
                    <TestimonialSlider>
                        {
                            testimonials.map(testimonial => {
                                return (
                                    <TestimonialSliderItem 
                                        name={testimonial.name}
                                        src={testimonial.src}
                                        position={testimonial.position}
                                        testimonial={testimonial.testimonial}
                                    />
                                );
                            })
                        }
                    </TestimonialSlider>
                </Column>
            </Row>
        </SectionContent>
    );
}

export default TestimonialContent;
