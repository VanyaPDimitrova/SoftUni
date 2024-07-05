function SectionContent({ children, classText }) {
    return (
        <div className={`section-content ${classText}`}>
            {children}
        </div>
    );
}

export default SectionContent;