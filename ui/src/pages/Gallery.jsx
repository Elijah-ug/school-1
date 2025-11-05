import React from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { fadeUp } from "@/utils/fadeUp";
import { images } from "@/assets/images";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 md:px-20 text-center">
      <motion.h2
        variants={fadeUp}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        School Gallery
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={src.img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute  inset-0 bg-black/30  group-hover:opacity-100 transition-opacity flex justify-center items-end pb-2 text-xs">
              <p className="bg-blue-400 text-gray-700 p-1 rounded-sm">{src.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
