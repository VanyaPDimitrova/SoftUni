function BannerSection(props) {
    return (
        <section className="banner" data-scroll-index='0'>
            {props.children}
        </section>
    );
}

export default BannerSection;
