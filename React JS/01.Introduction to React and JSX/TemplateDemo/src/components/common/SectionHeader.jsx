function SectionHeader({ header, text }) {
    return (
        <div className="sectioner-header text-center">
            <h3>{header}</h3>
            <span className="line"></span>
            <p>{text}</p>
        </div>
    );
}

export default SectionHeader;


/*
    <SectionHeader 
        header=""
        text=""
    />
*/