import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleTheme } from "./ToggleTheme";
import { demoLogo } from "@/assets/images";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = ["Home", "About", "Admissions", "Academics", "Gallery", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-green-600 text-white shadow z-50 font-semibold">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* <h1 className="text-2xl font-bold text-blue-700">XYZ Primary School</h1> */}
        <div className="h-10 w-10 ">
          <img src={demoLogo} className="rounded-full object-cover" alt="XYZ P/S" />
        </div>
        {/* theme */}

        <div className="hidden md:flex gap-6 ">
          {links.map((link, id) => (
            <NavLink
              key={id}
              to={link === "Home" ? "/" : link}
              className=" p-1 hover:text-blue-600 transition capitalize"
            >
              {link}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          <button className="md:hidden " onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="text-end mt-3"></div>
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link === "Home" ? "/" : link.toLowerCase()}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 capitalize"
              >
                {link}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
