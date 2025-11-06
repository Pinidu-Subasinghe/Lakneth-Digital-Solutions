import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* ===== PAGE HEADER ===== */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact Us</h1>
        <p className="text-blue-100 text-lg">
          We’d love to hear from you! Let’s talk about your next project.
        </p>
      </div>

      {/* ===== CONTACT CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT - CONTACT FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Send Us a Message
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Get in Touch
          </h2>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <span>No. 12, Kandy Road, Kurunegala, Sri Lanka</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <a href="tel:+94761234567" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                +94 76 123 4567
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <a href="mailto:info@laknethdigital.lk" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                info@laknethdigital.lk
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <span>Mon – Fri: 9.00am – 6.00pm</span>
            </li>
          </ul>

          {/* Google Map */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Lakneth Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.474220028001!2d80.368!3d7.483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2b8a8cbe6717f%3A0x1a99ccf3aef77c6b!2sKurunegala%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1689071534431!5m2!1sen!2slk"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
