
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar({ dark, setDark }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [open, setOpen] = useState(false); // ✅ MOBILE MENU STATE
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/";
//   };

//   const navItem =
//     "block px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-gray-800";

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-md border-b border-gray-100 dark:border-gray-800">

//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* LOGO */}
//         <h1 className="text-2xl font-bold text-green-700">
//           🌾 FarmerLine
//         </h1>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-4 text-gray-700 dark:text-gray-200">

//           <Link to="/" className={navItem}>Home</Link>
//           <Link to="/about" className={navItem}>About</Link>
//           <Link to="/gallery" className={navItem}>Gallery</Link>
//           <Link to="/service" className={navItem}>Service</Link>

//           <button
//             onClick={() => setDark(!dark)}
//             className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
//           >
//             {dark ? "☀️" : "🌙"}
//           </button>

//           {!isLoggedIn ? (
//             <Link to="/login" className="bg-green-700 text-white px-4 py-2 rounded-xl">
//               Login
//             </Link>
//           ) : (
//             <>
//               <Link to="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-xl">
//                 Admin
//               </Link>
//               <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-xl">
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-2xl"
//         >
//           ☰
//         </button>

//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
//           >
//             <div className="flex flex-col p-4 gap-2">

//               <Link to="/" onClick={() => setOpen(false)} className={navItem}>Home</Link>
//               <Link to="/about" onClick={() => setOpen(false)} className={navItem}>About</Link>
//               <Link to="/gallery" onClick={() => setOpen(false)} className={navItem}>Gallery</Link>
//               <Link to="/service" onClick={() => setOpen(false)} className={navItem}>Service</Link>

//               <button
//                 onClick={() => setDark(!dark)}
//                 className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
//               >
//                 {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
//               </button>

//               {!isLoggedIn ? (
//                 <Link
//                   to="/login"
//                   onClick={() => setOpen(false)}
//                   className="bg-green-700 text-white px-4 py-2 rounded-xl text-center"
//                 >
//                   Login
//                 </Link>
//               ) : (
//                 <>
//                   <Link
//                     to="/admin"
//                     onClick={() => setOpen(false)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-xl text-center"
//                   >
//                     Admin
//                   </Link>

//                   <button
//                     onClick={logout}
//                     className="bg-red-500 text-white px-4 py-2 rounded-xl"
//                   >
//                     Logout
//                   </button>
//                 </>
//               )}

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </nav>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const navItem =
    "px-4 py-2 rounded-lg transition hover:bg-green-100 dark:hover:bg-gray-800";

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <h1 className="text-2xl font-bold text-green-700 tracking-wide">
            🌾 FarmerLine
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4 text-gray-700 dark:text-gray-200">

            <Link to="/" className={navItem}>Home</Link>
            <Link to="/about" className={navItem}>About</Link>
            <Link to="/gallery" className={navItem}>Gallery</Link>
            <Link to="/service" className={navItem}>Service</Link>

            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {!isLoggedIn ? (
              <Link className="bg-green-700 text-white px-4 py-2 rounded-xl" to="/login">
                Login
              </Link>
            ) : (
              <>
                <Link className="bg-blue-600 text-white px-4 py-2 rounded-xl" to="/admin">
                  Admin
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded-xl" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="w-6 h-0.5 bg-black dark:bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="w-6 h-0.5 bg-black dark:bg-white"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="w-6 h-0.5 bg-black dark:bg-white"
            />
          </button>

        </div>
      </motion.nav>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* SIDE MENU */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-lg p-6 flex flex-col gap-4"
            >

              <h2 className="text-xl font-bold text-green-700 mb-4">
                🌾 FarmerLine
              </h2>

              <Link to="/" onClick={() => setOpen(false)} className={navItem}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)} className={navItem}>About</Link>
              <Link to="/gallery" onClick={() => setOpen(false)} className={navItem}>Gallery</Link>
              <Link to="/service" onClick={() => setOpen(false)} className={navItem}>Service</Link>

              <button
                onClick={() => setDark(!dark)}
                className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
              >
                {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="bg-green-700 text-white px-4 py-2 rounded-xl text-center mt-4"
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl text-center mt-4"
                  >
                    Admin
                  </Link>

                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl mt-2"
                  >
                    Logout
                  </button>
                </>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}