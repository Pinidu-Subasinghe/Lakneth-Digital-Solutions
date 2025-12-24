import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const mapLocationUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.8328726957272!2d79.9478384322013!3d6.708557488511224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24921fa34fee3%3A0x1b84ba9f3fb5731f!2sLakneth%20Digital%20Solutions!5e0!3m2!1sen!2slk!4v1762410407510!5m2!1sen!2slk";

  const phone = "94756343816";

  // Form Inputs
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const message =
      `📩 *New Inquiry Message*\n` +
      `--------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📝 *Subject:* ${subject}\n\n` +
      `💬 *Message:*\n${msg}\n` +
      `--------------------\n` +
      `📲 _Sent via Website Contact Form_`;

    const encoded = encodeURIComponent(message);

    // Detect mobile devices
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const mobileURL = `whatsapp://send?phone=${phone}&text=${encoded}`;
    const desktopURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    // Open correct WhatsApp entry point
    window.open(isMobile ? mobileURL : desktopURL, "_blank");
  };

  return (
    <section className="bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT — CONTACT FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Send Us a Message
          </h2>

          <form onSubmit={handleWhatsAppSend} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject of your message"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="resize-none w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition w-full md:w-auto flex items-center justify-center gap-2"
            >
              Send via WhatsApp 💬
            </button>
          </form>
        </div>

        {/* RIGHT — CONTACT INFO + MAP */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Get in Touch
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin
                className="text-blue-400 mt-1"
                size={20}
              />
              <span>Panadura, Sri Lanka</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone
                className="text-blue-400 mt-1"
                size={20}
              />
              <a
                href="tel:+94756343816"
                className="hover:text-blue-400 transition"
              >
                +94 75 634 3816
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail
                className="text-blue-400 mt-1"
                size={20}
              />
              <a
                href="mailto:info@laknethdigital.lk"
                className="hover:text-blue-400 transition"
              >
                info@laknethdigital.lk
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Clock
                className="text-blue-400 mt-1"
                size={20}
              />
              <span>Mon – Sun: 9.00am – 10.00pm</span>
            </li>
          </ul>

          {/* Google Map */}
          <div className="mt-8 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={mapLocationUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lakneth Location"
            ></iframe>
          </div>

          {/* View on Maps Button */}
          <div className="mt-4 text-center md:text-left">
            <a
              href="https://maps.app.goo.gl/dqyUtPBmNqLrTKYj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-400 font-semibold hover:underline"
            >
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
