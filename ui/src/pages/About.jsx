import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Lightbulb, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutImage, hmImage, schoolAdmins } from "@/assets/images";
import { fadeUp } from "@/utils/fadeUp";

export default function About() {
  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      {/* bg-linear-to-r from-sky-600 to-blue-500 */}
      {/* Hero / Header */}
      <section
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="relative h-[60vh] flex flex-col justify-center items-center  text-white text-center px-6"
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.h1
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          About Our School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg "
        >
          Learn about our mission, our people, and what makes XYZ Primary School a vibrant place to grow and learn.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-20  text-center">
        <motion.h2
          variants={fadeUp}
          custom={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left ">
          <motion.div
            className="bg-white border-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 p-2 rounded-sm shadow-lg  transition-all duration-300 ease-in-out hover:scale-102"
            variants={fadeUp}
            custom={1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Mission</h3>
            <p className=" leading-relaxed">
              To provide a safe, caring, and stimulating environment where every child is encouraged to reach their full
              potential — academically, socially, and emotionally — through creativity, collaboration, and compassion.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 p-2 rounded-sm shadow-lg  transition-all duration-300 ease-in-out hover:scale-102"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Vision</h3>
            <p className=" leading-relaxed">
              To nurture confident, curious, and responsible global citizens who value lifelong learning and contribute
              positively to their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className=" py-20 px-6 md:px-20 ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={hmImage}
            alt="Headteacher"
            className="rounded-md shadow-lg object-cover"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView="visible"
            viewport={{ once: true }}
            className="dark:bg-gray-600 h-full p-3 rounded-md"
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-blue-400 text-blue-700">A Message from Our Headteacher</h2>
            <p className=" mb-4 leading-relaxed">
              “Welcome to XYZ Primary School! Here, we celebrate every child’s individuality while fostering teamwork
              and respect. Our dedicated teachers and supportive environment ensure that each learner thrives both
              inside and outside the classroom.”
            </p>
            <p className="font-semibold dark:text-gray-300 text-gray-700">– Mrs. Sarah Johnson</p>
            <p className="text-sm dark:text-gray-400 text-gray-500">Headteacher</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-20 text-center ">
        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileInView="visible"
          viewport={{ once: true }}
          custome={2.5}
          className="text-3xl font-bold mb-12"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Heart, label: "Care" },
            { icon: Lightbulb, label: "Creativity" },
            { icon: Shield, label: "Integrity" },
            { icon: Target, label: "Excellence" },
            { icon: Users, label: "Teamwork" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" bg-white border-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 flex flex-col items-center text-center  rounded-2xl p-6 shadow hover:shadow-md hover:scale-103 transition duration-300 "
            >
              <item.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold text-lg ">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Staff Preview */}
      <section className=" py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custome={3.5}
          className="text-3xl font-bold mb-10"
        >
          Meet Our Dedicated Administartors
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {schoolAdmins.map((admin, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              custome={4}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 dark:bg-gray-600 dark:border-none text-gray-600 dark:text-gray-200 overflow-hidden rounded-lg shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-102 p-0">
                <img src={admin.image} alt={`Staff ${admin.name}`} className="w-full h-56 object-cover rounded-t-lg" />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400">Teacher {admin.name}</h4>
                  <p className="text-sm "> {admin.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
