function Section({ section, dataScrollIndex, sectionClass, children }) {
    return (
        <section className={`${section} section-padding ${sectionClass}`} data-scroll-index={dataScrollIndex}>
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

export default Section;