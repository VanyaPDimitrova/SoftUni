function FaqContentItem({ question, answer, dataWowDelay }) {
    return (
        <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay={dataWowDelay}>
            <h4>{question}</h4>
            <p>{answer}</p>
        </div>
    );
}

export default FaqContentItem;
