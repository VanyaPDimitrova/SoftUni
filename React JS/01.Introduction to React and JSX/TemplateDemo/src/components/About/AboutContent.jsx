import AboutContentCard from './AboutContentCard';

function AboutContent() {
    return (
        <div className="section-content text-center">
            <div className="row">
                <AboutContentCard 
                    dataWowDelay="0.2s" 
                    iClass="fa fa-life-ring" 
                    header="Support" 
                    description = "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla."
                />
                <AboutContentCard 
                    dataWowDelay="0.4s" 
                    iClass="fa fa-mobile" 
                    header="Cross Platform" 
                    description = "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla."
                />
                <AboutContentCard 
                    dataWowDelay="0.6s" 
                    iClass="fa fa-bolt" 
                    header="Fast" 
                    description = "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla."
                />
            </div>
            <a href="#" className="about-btn">Learn More</a> 
        </div>
    );
}

export default AboutContent;
