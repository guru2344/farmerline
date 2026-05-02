


// import { useState } from "react";

// function Service() {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     service: "",
//     email: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("📤 Sending to backend:", formData);

//     const res = await fetch("http://localhost:5000/api/service", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     console.log("📥 Response:", data);

//     if (data.success) {
//       alert("Request submitted successfully!");
//       setFormData({
//         name: "",
//         address: "",
//         service: "",
//         email: "",
//         contact: "",
//       });
//     } else {
//       alert("Failed to submit");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 space-y-4">

//       <input
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />

//       <input
//         name="address"
//         placeholder="Address"
//         value={formData.address}
//         onChange={handleChange}
//       />

//       <select
//         name="service"
//         value={formData.service}
//         onChange={handleChange}
//       >
//         <option value="">Select Service</option>
//         <option value="Crop Consultation">Crop Consultation</option>
//         <option value="Soil Testing">Soil Testing</option>
//         <option value="Irrigation">Irrigation</option>
//       </select>

//       <input
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         name="contact"
//         placeholder="Contact"
//         value={formData.contact}
//         onChange={handleChange}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Service;


import { useState } from "react";

function Service() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Request Sent Successfully!");

      setFormData({
        name: "",
        address: "",
        service: "",
        email: "",
        contact: "",
      });
    } else {
      alert("❌ Failed to send request");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Request Service 🌾
        </h2>

        {/* NAME */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Full Name"
        />

        {/* ADDRESS */}
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Address"
        />

        {/* SERVICE */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Service</option>
          <option value="Crop Consultation">🌾 Crop Consultation</option>
          <option value="Soil Testing">🧪 Soil Testing</option>
          <option value="Irrigation Setup">💧 Irrigation Setup</option>
          <option value="Farm Equipment Support">🚜 Farm Equipment Support</option>
          <option value="Organic Farming Guidance">🌱 Organic Farming Guidance</option>
        </select>

        {/* EMAIL */}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Email Address"
        />

        {/* CONTACT */}
        <input
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          type="tel"
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Contact Number"
        />

        {/* BUTTON */}
        <button
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-700 hover:bg-green-800"
          }`}
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>

      </form>
    </div>
  );
}

export default Service;