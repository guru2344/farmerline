import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (

    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold text-green-800 leading-tight">
            Smart Farming <br /> Made Simple 🌾
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            FarmerLine helps farmers connect with expert services, soil testing,
            irrigation support, and modern agricultural solutions.
          </p>

          <div class="home-btn" className="mt-8 flex gap-4">

            {/* FIXED BUTTON 1 */}
            <button
              onClick={() => navigate("/service")}
              className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
            >
              Get Started
            </button>

            {/* FIXED BUTTON 2 */}
            <button
              onClick={() => navigate("/gallery")}
              className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-50"
            >
              Learn More
            </button>

          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="/images/farmer.jpg"
            alt="farm"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Expert Guidance",
            desc: "Connect with agriculture experts anytime.",
          },
          {
            title: "Smart Services",
            desc: "Soil testing, irrigation, and crop support.",
          },
          {
            title: "Modern Farming",
            desc: "Use technology to increase productivity.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-green-700">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Home;