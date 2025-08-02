import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-dark py-20 lg:py-[120px]">
      <div className="flex justify-center items-center px-4">
        <div className="w-full max-w-[570px]">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white">GET IN TOUCH WITH US</h2>
          </div>

          {/* WhatsApp Button */}
          <div className="flex justify-center mb-8">
            <a
              href="https://wa.me/9930183457?text=hello"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Contact Items */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start">
              <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                📍
              </div>
              <div>
                <h4 className="mb-1 text-xl font-bold text-white">Our Location</h4>
                <p className="text-base text-dark-6">Andheri West</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                📞
              </div>
              <div>
                <h4 className="mb-1 text-xl font-bold text-white">Phone Number</h4>
                <p className="text-base text-dark-6">9930183457</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                ✉️
              </div>
              <div>
                <h4 className="mb-1 text-xl font-bold text-white">Email Address</h4>
                <p className="text-base text-dark-6">info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
