import React from "react";
import { Mail, Phone, MapPin, SeparatorHorizontal } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-10 place-items-center">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">XYZ Primary School</h3>
          <p className="text-sm">Inspiring young minds through quality education, creativity, care, and discipline.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> Kitetika,
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone size={16} /> +256 783456789
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={16} /> info@xyzprimary.edu
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <Separator className="text-gray-500 mt-10" />

      <p className="text-center text-sm mt-5 text-gray-500">
        © {new Date().getFullYear()} XYZ Primary School. All Rights Reserved.
      </p>
    </footer>
  );
};
