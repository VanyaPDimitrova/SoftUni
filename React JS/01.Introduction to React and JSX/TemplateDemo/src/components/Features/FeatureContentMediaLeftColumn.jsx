function FeatureContentMediaLeftColumn({ dataWowDelay, header, text, classFa }) {
    return (
        <div className="media single-feature wow fadeInUp" data-wow-delay={dataWowDelay}>
            <div className="media-body text-right media-right-margin">
                <h5>{header}</h5>
                <p>{text}</p>
            </div>
            <div className="media-right icon-border"> 
                <span className={classFa} aria-hidden="true"></span> 
            </div>
        </div>
    );
}

export default FeatureContentMediaLeftColumn;
