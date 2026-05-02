import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/service", {
      headers: {
        Authorization: token,
      },
    });

    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">
          🌾 FarmerLine Admin Dashboard
        </h1>

        <div className="bg-white px-4 py-2 rounded-lg shadow text-sm">
          Total Requests:{" "}
          <span className="font-bold text-green-600">{data.length}</span>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Total Requests</h2>
          <p className="text-2xl font-bold text-green-600">{data.length}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Active Services</h2>
          <p className="text-2xl font-bold text-blue-600">
            {data.filter((d) => d.service).length}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Recent Request</h2>
          <p className="text-sm text-gray-700">
            {data.length > 0 ? data[data.length - 1].name : "No data"}
          </p>
        </div>

      </div>

      {/* TABLE VIEW */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="p-4 border-b font-semibold text-gray-700">
          Service Requests
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Service</th>
                <th className="p-3">Email</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Address</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3 text-green-600">{item.service}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.contact}</td>
                  <td className="p-3 text-gray-600">{item.address}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;