import BannerOverlayImage from './BannerOverlayImage';
import BannerOverlayText from './BannerOverlayText';

function BannerOverlay() {
    return (
        <div className="banner-overlay">
            <div className="container">
                <div className="row">
                    <BannerOverlayText />
                    <BannerOverlayImage />
                </div>
            </div>
        </div>
    );
}

export default BannerOverlay;
