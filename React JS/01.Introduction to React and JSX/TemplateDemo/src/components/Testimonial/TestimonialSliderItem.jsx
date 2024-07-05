function TestimonialSliderItem({ src, name, position, testimonial }) {
    return (
        <div className="slider-item">
            <div className="test-img">
                <img src={src} alt="Placeholder" width="157" height="157" />
            </div>
            <div className="test-text">
                <span className="title"><span> {name}</span> {position}</span> {testimonial}
            </div>
        </div>
    );
}

export default TestimonialSliderItem;
