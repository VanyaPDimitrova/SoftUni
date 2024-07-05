import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import TestimonialContent from './TestimonialContent';

function Testimonial() {
    return (
        <Section 
            section="testimonial"
            dataScrollIndex="4"
        >
            <SectionHeader
                header="Testimonials"
                text="Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante."
                classHeader="white"
                classPTag="white"
            />
            
            <TestimonialContent />
        </Section>
    );
}

export default Testimonial;
