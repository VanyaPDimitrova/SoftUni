function FeatureContentContainer({ children }) {
    return (
        <div className="section-content text-center">
            <div className="row">
                {children}
            </div>
        </div>
    );
}

export default FeatureContentContainer;
