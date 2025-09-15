import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ChatWidget from "../../common/ChatWidget";

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
    <div id="contact" className="relative w-full  flex flex-col  md:flex-row gap-6 items-start md:justify-between px-4 md:px-12 lg:px-[180px] py-16 md:py-16 bg-white">
      {/* Background blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      {/* Left Section - Contact Form */}
      <div className="rounded-2xl w-full flex-1 text-bodyText  ">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        <span className="text-bodyText">Contact Us</span>
      </h2>

      <form className="space-y-6">
        {/* First and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium  mb-1">
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium  mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Ex JohnDoe214@gmail.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium  mb-1">
            What can we help you with ?
          </label>
          <textarea
            rows="4"
            placeholder="Type here your message"
            className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition"
        >
          join mailing list
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
      
     {isChatOpen && <ChatWidget onClose={() => setIsChatOpen(false)} />}

{/* Floating Button */}
<button
  onClick={() => setIsChatOpen(!isChatOpen)}
  className="absolute bottom-1 right-1 lg:bottom-8 lg:right-12 bg-primary flex items-center justify-center hover:bg-cyan-600 text-white rounded-full p-4 md:p-6 shadow-lg"
>
  {isChatOpen ? (
    <FiChevronDown size={24} />
  ) : (
    <img src="/assets/chatlogo.png" alt="" className="w-[40px] h-[40px] object-cover" />
  )}
</button>
    </div>
  );
}