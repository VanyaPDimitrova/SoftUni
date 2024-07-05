function SectionContent({ children, classText }) {
    return (
        <div className={`section-content ${classText}`}> //"section-content text-center"
            {children}
        </div>
    );
}

export default SectionContent;