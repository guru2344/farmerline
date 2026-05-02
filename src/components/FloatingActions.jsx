import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919373702955"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition hover:scale-110"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Call */}
      <a
        href="tel:+919373702955"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition hover:scale-110"
      >
        <FaPhone size={20} />
      </a>

    </div>
  );
}