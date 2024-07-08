import DownloadApp from '../common/DownloadApp';
import BannerOverlayTextContent from './BannerOverlayTextContent';

function BannerOverlayText() {
    return (
        <div className="col-md-8 col-sm-12">
            <BannerOverlayTextContent /> 
            <div className='banner-list'>
                <DownloadApp />
            </div>           
        </div>
    );
}

export default BannerOverlayText;
