import BannerOverlayTextContent from './BannerOverlayTextContent';
import BannerOverlayTextList from './BannerOverlayTextList';
import BannerOverlayTextListItem from './BannerOverlayTextListItem';

function BannerOverlayText() {
    return (
        <div className="col-md-8 col-sm-12">
            <BannerOverlayTextContent />            
            <BannerOverlayTextList>
                <BannerOverlayTextListItem src="images/appstore.png" dateWowDelay="0.4s" />
                <BannerOverlayTextListItem src="images/playstore.png" dateWowDelay="0.7s" />
            </BannerOverlayTextList>
        </div>
    );
}

export default BannerOverlayText;
