function ContactForm() {
    return (
        <form id="contact_form" action="">
            <div className="row">
                <div className="col">
                    <input 
                        type="text" 
                        id="your_name" 
                        className="form-input w-100" 
                        name="full-name" 
                        placeholder="Full Name" 
                        required 
                    />
                </div>
                <div className="col">
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input w-100" 
                        name="email" 
                        placeholder="Email" 
                        required 
                    />
                </div>
            </div>

            <input 
                type="text" 
                id="subject" 
                className="form-input w-100" 
                name="subject" 
                placeholder="Subject" 
            />
            <textarea 
                className="form-input w-100" 
                id="message" 
                placeholder="Message" 
                name="message"
            ></textarea>
            <button 
                className="btn-grad w-100 text-uppercase" 
                type="submit" 
                name="button"
            >
                submit
            </button>
        </form>
    );
}

export default ContactForm;
