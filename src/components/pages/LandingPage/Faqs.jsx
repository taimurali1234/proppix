import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I list my property for sale or rent?",
    answer:
      "Create an account, click ‘List Your Property’, add details and photos, and submit. Our team will review and publish your listing for potential buyers or renters.",
  },
  {
    question: "Are all property listings verified?",
    answer:
      "Yes, every property is carefully verified by our team before publishing to ensure authenticity.",
  },
  {
    question: "How do you ensure a secure transaction?",
    answer:
      "We use end-to-end encryption and secure payment gateways to ensure safe transactions.",
  },
  {
    question: "Can I rely on your pricing and market insights?",
    answer:
      "Yes, our platform provides data-driven insights and expert-backed analysis to help you.",
  },
  {
    question: "Do you assist with legal or documentation processes?",
    answer:
      "We provide legal and documentation support with the help of our trusted partners.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full px-6 py-16 md:px-12 lg:px-[180px]">
      <h2 className="text-xl md:text-3xl md:leading-[34px] text-center lg:text-left lg:text-[50px] lg:leading-[50px] font-bold mb-12 md:mb-16 lg:mb-8 lg:max-w-[480px]">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side FAQs */}
        <div className="space-y-4 lg:col-span-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FiMinus className="text-xl" />
                ) : (
                  <FiPlus className="text-xl" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Box */}
        <div className="border rounded-lg shadow-sm p-6 flex flex-col items-center gap-2 text-center justify-center">
          <div>
            <img src="/assets/message.png" alt="" className="w-[60px] h-[60px] object-cover" />
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Do you have more questions?
          </h3>
          <p className="text-gray-600 text-sm mb-6 leading-[22px] px-[30px]">
            End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
          </p>
          <button className="bg-primary mt-12 md:w-[337px] max-w-[300px] hover:bg-teal-500 text-white font-medium px-6 py-3  ">
            Shoot a Direct Mail
          </button>
        </div>
      </div>
    </div>
  );
}
