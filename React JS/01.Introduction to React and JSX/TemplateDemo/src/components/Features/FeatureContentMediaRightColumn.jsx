function FeatureContentMediaRightColumn({ dataWowDelay, classFa, header, text }) {
    return (
        <div className="media single-feature wow fadeInUp" data-wow-delay={dataWowDelay}>
            <div className="media-left icon-border media-right-margin"> 
                <span className={classFa} aria-hidden="true"></span> 
            </div>
            <div className="media-body text-left">
                <h5>{header}</h5>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default FeatureContentMediaRightColumn;
