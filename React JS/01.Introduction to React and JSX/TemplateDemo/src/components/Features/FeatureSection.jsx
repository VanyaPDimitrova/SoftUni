function FeatureSection({ children }) {
    return (
        <section className="feature section-padding" data-scroll-index='2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
