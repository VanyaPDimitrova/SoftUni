import BannerOverlay from './BannerOverlay';
import BannerSection from './BannerSection';
import BannerSvgWave from './BannerSvgWave';

function Banner() {
    return (
        <BannerSection>
            <BannerOverlay />
            <BannerSvgWave />
        </BannerSection>
    );
    }

export default Banner;
