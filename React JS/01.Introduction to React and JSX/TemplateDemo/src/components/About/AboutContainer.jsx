function AboutContainer(props) {
    return (
        <section className="about section-padding prelative" data-scroll-index='1'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutContainer;
