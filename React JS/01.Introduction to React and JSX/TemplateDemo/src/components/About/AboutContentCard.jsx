function AboutContentCard({ dataWowDelay, iClass, header, description }) {
    return (
        <div className="col-md-4">
            <div className="icon-box wow fadeInUp" data-wow-delay={dataWowDelay}> 
                <i className={iClass} aria-hidden="true"></i>
                <h5>{header}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default AboutContentCard;
