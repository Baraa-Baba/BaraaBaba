const Contact = () => {
    return (
        <div className="container max-h-[100vh] h-[80vh] bg-transparent mb-40">
            <h1>Contact Me</h1>
            <form target="_blank" action="https://formsubmit.co/9d6d1a7d16373e389623c00f48207d1c" method="POST">
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="name" className="contact-input" placeholder="Full Name" required />
                        </div>
                        <div className="col">
                            <input type="email" name="email" className="contact-input" placeholder="Email Address" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" className="resize-y text-2xl max-w-[100vw] w-[40rem] bg-transparent text-white
                    border-[1px] border-white"
                        name="message" rows="10" required></textarea>
                </div>
                <button type="submit" className="rounded-full font-bold text-3xl border-2 
                 border-purple-800 bg-transparent shadow-lg shadow-purple-600 p-5 
                 text-white
                 hover:bg-purple-900">Submit Form</button>
            </form>
        </div>
    )
}

export default Contact