import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ContactForm() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    joinMailingList: false
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      joinMailingList: false
    });
  };

  return (
    <div id="contact" className="relative w-full min-h-screen flex flex-col md:flex-row items-start md:justify-center px-4 md:px-12 lg:px-[180px] py-16 md:py-16 bg-white">
      {/* Background blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      {/* Left Section - Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 pr-0 md:pr-10">
        <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-1/2 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-1/2 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex JohnDoe214@gmail.com"
            className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here your message"
            rows="4"
            className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          
          
          
          <button 
            type="submit"
            className="w-fit md:w-full lg:w-fit bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
          >
            Join our mailing list
          </button>
        </form>
      </div>
      
      {/* Right Section - Map + Address */}
      <div className="w-full md:w-1/2 flex flex-col mt-10 md:mt-0">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.08632495614!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434abc7f6e6b%3A0x8f8f22cfac6d7c9c!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1691512345678!5m2!1sen!2sae"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-sm text-gray-700 mt-4 md:text-left">
          Office 1001-47, 9th floor, Crystal Tower, Business Bay, <br />
          Dubai - UAE, P.O Box: 214743 Dubai
        </p>
      </div>
      
      {/* Chat Modal */}
      {isChatOpen && (
        <div className="absolute bottom-[120px] right-6 w-80 h-[480px] bg-white shadow-xl rounded-xl border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-cyan-500 text-white px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="Logo"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="font-semibold">Property</h3>
                <p className="text-xs">AI Bot</p>
              </div>
            </div>
          </div>
          
          {/* Chat Content */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
            <div className="bg-cyan-100 text-gray-800 p-2 rounded-lg w-fit">
              What makes your platform different from other real estate
              services?
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-gray-700">
              A: We combine verified listings, expert market insights, and
              seamless transaction support to provide a secure, reliable, and
              efficient property experience.
              <br />
              <span className="text-xs text-gray-500">
                Source: Documentation
              </span>
            </div>
            <div className="bg-cyan-100 text-gray-800 p-2 rounded-lg w-fit ml-auto">
              That helped! Can you do it just for me?
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="Thinking"
                className="w-4 h-4"
              />
              Thinking...
            </div>
          </div>
          
          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a reply..."
              className="flex-1 border rounded-md px-3 py-2 outline-none"
            />
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      )}
      
      {/* Floating Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="absolute bottom-1 right-1 md:bottom-6 md:right-6 bg-primary flex items-center justify-center hover:bg-cyan-600 text-white rounded-full p-4 md:p-6 shadow-lg"
      >
        {isChatOpen ? (
          <FiChevronDown size={24} />
        ) : (
          <img
            src="/assets/chatlogo.png"
            alt=""
            className="w-[40px] h-[40px] object-cover"
          />
        )}
      </button>
    </div>
  );
}