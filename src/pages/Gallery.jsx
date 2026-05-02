


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Drip Irrigation Setup",
      location: "Nashik, Maharashtra",
      type: "Irrigation",
      desc: "Smart water-saving irrigation system.",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
    },
    {
      title: "Soil Testing",
      location: "Pune, Maharashtra",
      type: "Soil",
      desc: "Soil analysis for better crop yield.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
    },
    {
      title: "Organic Farming",
      location: "Satara, Maharashtra",
      type: "Organic",
      desc: "Chemical-free farming system.",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      title: "Smart Farming System",
      location: "Nagpur, Maharashtra",
      type: "Tech",
      desc: "IoT based farm monitoring.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9"
    },
    {
      title: "Greenhouse Project",
      location: "Latur, Maharashtra",
      type: "Organic",
      desc: "Controlled environment farming.",
      image: "https://images.unsplash.com/photo-1602524811406-5f2d3d5c6d65"
    },
    {
      title: "Modern Tractor System",
      location: "Solapur, Maharashtra",
      type: "Tech",
      desc: "Automated farming equipment.",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce"
    }
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);

  const filters = ["All", "Irrigation", "Soil", "Organic", "Tech"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Our Projects 🌾
      </h1>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === item
                ? "bg-green-700 text-white"
                : "text-green-700 border-green-700 hover:bg-green-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {filteredProjects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >

            <img
              src={item.image}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-bold text-green-700">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500">
                📍 {item.location}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {item.desc}
              </p>

              <button
                onClick={() => setSelectedImage(item.image)}
                className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
              >
                View
              </button>

            </div>
          </motion.div>
        ))}

      </div>

      {/* IMAGE POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-4xl max-h-[80vh] rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Gallery;