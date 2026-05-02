import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-16">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-green-700 mb-12"
      >
        About FarmerLine 🌾
      </motion.h1>

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src="/src/assets/founder.jpg"
            alt="Founder"
            className="rounded-3xl shadow-2xl w-full max-w-md hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            👨‍🌾 Founder: Rahul Sharma
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Rahul Sharma is a passionate agricultural innovator dedicated to
            transforming traditional farming into a modern, technology-driven
            ecosystem. With a vision to empower farmers, he founded
            <span className="text-green-600 font-semibold"> FarmerLine</span>,
            a platform that connects farmers with expert services like crop
            consultation, soil testing, irrigation solutions, and smart farming
            guidance.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            His mission is simple — make farming more profitable, sustainable,
            and accessible using technology and expert support.
          </p>

          {/* STATS */}
          <div className="mt-6 flex gap-6">

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <h3 className="text-green-600 font-bold text-xl">5+</h3>
              <p className="text-sm">Years Experience</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <h3 className="text-green-600 font-bold text-xl">1000+</h3>
              <p className="text-sm">Farmers Helped</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <h3 className="text-green-600 font-bold text-xl">24/7</h3>
              <p className="text-sm">Support</p>
            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default About;