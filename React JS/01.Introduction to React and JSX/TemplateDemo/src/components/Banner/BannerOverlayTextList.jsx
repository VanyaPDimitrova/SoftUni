function BannerOverlayTextList(props) {
    return (
        <div className='banner-list'>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export default BannerOverlayTextList;
