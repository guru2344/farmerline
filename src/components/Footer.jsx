// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//         <div>
//           <h2 className="text-white text-xl font-bold">FarmerLine</h2>
//           <p className="mt-2 text-sm">
//             Empowering farmers with modern technology.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold">Links</h3>
//           <p>Home</p>
//           <p>About</p>
//           <p>Services</p>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold">Contact</h3>
//           <p>Email: xzguru72@email.com</p>
//           <p>Phone: +91 9373702955</p>
//         </div>

//       </div>

//       <p className="text-center mt-8 text-sm">
//         © 2026 FarmerLine. All rights reserved.
//       </p>
//     </footer>
//   );
// }

import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-green-500">
            🌾 FarmerLine
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Smart farming solutions for modern agriculture.  
            Connecting farmers with expert services.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Gallery</li>
            <li className="hover:text-green-400 cursor-pointer">Service</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Crop Consultation</li>
            <li>Soil Testing</li>
            <li>Irrigation Setup</li>
            <li>Farm Equipment</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div class="contact">
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Mumbai, India</p>
          <p className="text-sm">📧 support@farmerline.com</p>

          <div className="flex gap-3 mt-4 text-xl">

            <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            <FaInstagram className="hover:text-green-400 cursor-pointer" />
            <FaTwitter className="hover:text-green-400 cursor-pointer" />

            <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
            <FaPhone className="hover:text-green-400 cursor-pointer" />

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FarmerLine. All rights reserved.
      </div>

    </footer>
  );
}