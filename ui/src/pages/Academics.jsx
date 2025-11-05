import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Atom, Book, Paintbrush, Music, Globe, Users } from "lucide-react";
import { IoIosFootball } from "react-icons/io";
import { fadeUp } from "@/utils/fadeUp";
import { curriculumBg } from "@/assets/images";

export const Academics = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url(${curriculumBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="relative h-[60vh] flex flex-col justify-center items-center bg-linear-to-r from-sky-600 to-blue-500 text-white text-center px-6"
      >
        <div className="absolute inset-0 bg-black/60 z-0 " />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          custom={1}
          className="text-5xl font-bold mb-4 text-gray-900"
        >
          Our Curriculum & Programs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          custom={2}
          className="max-w-2xl mx-auto text-lg bg-gray-500 p-2 rounded-md"
        >
          We follow the UNEB curriculum to build knowledge, creativity, and confidence in every learner
        </motion.p>
      </section>

      {/* Core Subjects */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileInView="visible"
          viewport={{ once: true }}
          custom={2.5}
          className="text-3xl font-bold mb-12"
        >
          Core Subjects
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: BookOpen, title: "Mathematics" },
            { icon: Atom, title: "Science" },
            { icon: Book, title: "English" },
            { icon: Paintbrush, title: "Art & Craft" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i + 3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView="visible"
              viewport={{ once: true }}
              //   custom={4.5}
            >
              <Card className="bg-white border-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 dark:border-none p-6 hover:shadow-md hover:scale-103 transition duration-300 ease-in-out h-full">
                <item.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold ">{item.title}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Programs */}
      <section className="py-20 px-6 md:px-20  text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-3xl font-bold mb-12"
        >
          Clubs & Extracurricular Activities
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Music, title: "Music" },
            { icon: IoIosFootball, title: "Sports" },
            { icon: Globe, title: "STEM Club" },
            { icon: Users, title: "Community Service" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i + 4.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 dark:border-none p-6 hover:shadow-md hover:scale-103 transition duration-300 ease-in-out h-full">
                <item.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold ">{item.title}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beyond the Classroom */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="text-3xl font-bold mb-12"
        >
          Beyond the Classroom
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {[
            {
              title: "Field Trips & Excursions",
              text: "We organize trips to museums, science centers, and cultural landmarks.",
            },
            {
              title: "Community Projects",
              text: "Students participate in meaningful projects that make a difference.",
            },
            {
              title: "Character Development",
              text: "Activities focused on teamwork, leadership, and personal growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i + 5.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              //   custom={6.5}
            >
              <Card className="bg-white border-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 dark:border-none p-6 hover:shadow-md hover:scale-103 transition duration-300 ease-in-out h-full">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.title}</h3>
                <p className=" text-sm">{item.text}</p>
              </Card>
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
          custom={6}
          className="text-3xl font-bold mb-4"
        >
          Excited to Learn More?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={6.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-6"
        >
          Explore our programs or head over to Admissions to enroll your child today!
        </motion.p>
        <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Button size="lg" className="bg-white text-blue-700 font-semibold">
            Go to Admissions
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
