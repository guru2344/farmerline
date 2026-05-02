


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Service from "./pages/Service";
// import Login from "./pages/Login";
// import Admin from "./pages/Admin";
// import FloatingActions from "./components/FloatingActions";

// function App() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") setDark(true);
//   }, []);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <div className={dark ? "dark bg-gray-900 text-white" : ""}>
//       <BrowserRouter>
//         <Navbar dark={dark} setDark={setDark} />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<Admin />} />
//         </Routes>

//         <Footer />
//         <FloatingActions />
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const [dark, setDark] = useState(false);

  // LOAD SAVED THEME
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // APPLY GLOBAL DARK MODE
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
return (
  <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <BrowserRouter>
      <Navbar dark={dark} setDark={setDark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </BrowserRouter>
  </div>
);
}
export default App;