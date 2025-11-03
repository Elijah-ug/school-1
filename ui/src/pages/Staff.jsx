import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/fadeUp";
import { staffGroupPhoto } from "@/assets/images";

export const Staff = () => {
  return (
    <div>
      {" "}
      {/* Staff Group Photo */}
      <section className="py-20 px-6 md:px-20  text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          Meet Our Wonderful Staff
        </motion.h2>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={staffGroupPhoto}
            alt="XYZ Primary School Staff Group"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto  mt-6 leading-relaxed"
        >
          Our team of dedicated and passionate teachers is the heart of XYZ Primary School. They go above and beyond to
          inspire curiosity, confidence, and kindness in every learner.
        </motion.p>
      </section>
    </div>
  );
};
