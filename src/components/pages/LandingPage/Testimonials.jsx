

const testimonials = [
  {
    id: 1,
    text: "Selling my property was effortless thanks to Proppix. Their great expertise and professional approach connected me with the right buyers and secured a smooth, quick sale.",
    rating: 5.0,
    name: "Salah Alhbari",
    role: "Seller",
    image: "/assets/testimonialimg.png",
  },
  {
    id: 2,
    text: "Finding my dream home was so much easier than I expected. The listings were accurate, the process was simple, and I felt supported every step of the way. I couldn’t be happier with my new place!",
    rating: 4.9,
    name: "Muhammad Talha",
    role: "Buyer",
    image: "/assets/testimonialimg.png",
    highlight: true, // 👈 dark style
  },
  {
    id: 3,
    text: "Selling my property was effortless thanks to Proppix. Their great expertise and professional approach connected me with the right buyers and secured a smooth, quick sale.",
    rating: 5.0,
    name: "Tannah Alhbari",
    role: "Seller",
    image: "/assets/testimonialimg.png",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6   md:px-12 lg:px-[180px]">
      {/* Heading */}
      <h2 className="text-2xl px-[50px] md:px-[0px] md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Trusted by Home Buyers & Sellers
      </h2>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`rounded-xl shadow-md px-6 md:px-12 py-6 gap-6 flex flex-col justify-between transition duration-300 
            ${
              t.highlight
                ? "bg-bodyText text-white hover:bg-bodyText"
                : "bg-white text-bodyText"
            }`}
          >
            {/* Quote Icon Image */}
            <img
              src={t.highlight ? "/assets/colonwhite.png" : "/assets/colongreen.png"}
              alt="quote icon"
              className="w-10 h-10 mb-4"
            />

            {/* Review Text */}
            <p className="mb-6 leading-relaxed">{t.text}</p>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-[16px]"
              />
              <div>
                {/* Stars */}
                <div className="flex items-center text-yellow-400 text-sm mb-1">
                  {"★".repeat(5)}
                  <span
                    className={`ml-2 font-semibold ${
                      t.highlight ? "text-white/90" : "text-gray-800"
                    }`}
                  >
                    {t.rating}
                  </span>
                </div>
                <h4
                  className={`font-semibold ${
                    t.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t.name}
                </h4>
                <p
                  className={`text-sm ${
                    t.highlight ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
