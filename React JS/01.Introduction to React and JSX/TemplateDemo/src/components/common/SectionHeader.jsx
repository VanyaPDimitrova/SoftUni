function SectionHeader({ header, text, classHeader, classPTag }) {
    return (
        <div className={`sectioner-header text-center ${classHeader}`}>
            <h3>{header}</h3>
            <span className="line"></span>
            <p className={classPTag} >{text}</p>
        </div>
    );
}

export default SectionHeader;
