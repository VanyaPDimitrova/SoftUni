function ContactInfo() {
    return (
        <div className="contact-info white">
            <div className="contact-item media"> 
                <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                <div className="media-body">
                    <p className="text-uppercase">Address</p>
                    <p className="text-uppercase">New Delhi, India</p>
                </div>
            </div>
            <div className="contact-item media"> 
                <i className="fa fa-mobile media-left media-right-margin"></i>
                <div className="media-body">
                    <p className="text-uppercase">Phone</p>
                    <p className="text-uppercase">
                        <a className="text-white" href="tel:+15173977100">
                            009900990099
                        </a> 
                    </p>
                </div>
            </div>
            <div className="contact-item media"> 
                <i className="fa fa-envelope media-left media-right-margin"></i>
                <div className="media-body">
                    <p className="text-uppercase">E-mail</p>
                    <p className="text-uppercase">
                        <a className="text-white" href="mailto:abcdefg@gmail.com">
                            yogeshsingh.now@gmail.com
                        </a> 
                    </p>
                </div>
            </div>
            <div className="contact-item media"> 
                <i className="fa fa-clock media-left media-right-margin"></i>
                <div className="media-body">
                    <p className="text-uppercase">Working Hours</p>
                    <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00PM.</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
