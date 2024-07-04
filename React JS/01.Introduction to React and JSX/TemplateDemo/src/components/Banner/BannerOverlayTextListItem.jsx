function BannerOverlayTextListItem({ href="#", src, dateWowDelay }) {
    return (
        <li>
            <a href={href}>
                <img src={src} className="wow fadeInUp" data-wow-delay={dateWowDelay} />
            </a>
        </li>
    );
}

export default BannerOverlayTextListItem;
