import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Users, Star, BookOpen, Quote, ImageIcon } from "lucide-react";
import { images } from "@/assets/images";
import { Staff } from "./Staff";
import { fadeUp } from "@/utils/fadeUp";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center bg-linear-to-r from-blue-600 to-sky-400 dark:bg-linear-to-r dark:from-gray-700 dark:to-gray-500 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Welcome to XYZ Primary School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
        >
          Inspiring young minds through creativity, care, and excellence.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <Button size="lg" className="bg-white text-blue-700 font-semibold">
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Welcome */}
      <section id="about" className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Welcome Message
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto  leading-relaxed"
        >
          At XYZ Primary School, we believe every child deserves a joyful and stimulating learning environment. Our
          mission is to nurture curiosity and confidence through creative teaching and a caring community.
        </motion.p>
      </section>

      {/* Stats */}
      <section className=" py-16 px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, label: "Students", value: "500+" },
            { icon: BookOpen, label: "Teachers", value: "25+" },
            { icon: Star, label: "Years of Excellence", value: "15+" },
            { icon: CalendarDays, label: "Clubs & Activities", value: "10+" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center dark:bg-gray-600 shadow-md bg-gray-100  rounded-md py-2 transition-all duration-300 ease-in-out hover:scale-102"
            >
              <item.icon className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300">{item.value}</h3>
              <p className="text-gray-500 dark:text-gray-200">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          School Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <img src={i} alt={`Gallery ${i}`} className="w-full h-full object-cover " />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <ImageIcon className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* staff */}
      <Staff />
      {/* Testimonials */}
      <section className=" py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          What Parents Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-6 text-left dark:bg-gray-600 shadow-md hover:shadow-lg hover:scale-103 transition-all duration-300 ease-in-out rounded-md">
                <Quote className="text-blue-600 dark:text-blue-400 w-6 h-6 mb-3" />
                <p className="dark:text-white text-gray-600 mb-4">
                  “XYZ Primary School has provided my child with amazing opportunities to learn and grow. The teachers
                  truly care!”
                </p>
                <h4 className="font-semibold dark:text-blue-400 text-blue-700">Parent {i}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 md:px-20 text-center text-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Join Our Family?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-6"
        >
          Enroll your child today and become part of a community where learning is fun, caring, and full of
          possibilities.
        </motion.p>
        <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Button size="lg" className="bg-white text-blue-700 font-semibold">
            Apply Now
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
