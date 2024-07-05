function TeamContentCard({ dataWowDelay, src, header, position }) {
    return (
        <div className="team-detail wow bounce" data-wow-delay={dataWowDelay}> 
            <img src={src} className="img-fluid"/>
            <h4>{header}</h4>
            <p>{position}</p>
        </div>
    );
}

export default TeamContentCard;
