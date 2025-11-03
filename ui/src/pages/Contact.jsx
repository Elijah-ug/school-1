import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center bg-linear-to-r from-sky-600 to-blue-500 text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          custom={1}
          className="text-5xl font-bold mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          custom={1.5}
          className="max-w-2xl mx-auto text-lg"
        >
          We’re here to help. Reach out to us anytime!
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          custom={2}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Contact Information
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Mail, title: "Email", value: "info@xyzprimary.com" },
            { icon: Phone, title: "Phone", value: "+1 234 567 890" },
            { icon: MapPin, title: "Address", value: "Kitetika, Gayaza road" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i + 2.5}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          custom={3}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          custom={3.5}
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto grid gap-6 text-left"
        >
          <Input
            type="text"
            className="p-2 text-lg focus:outline-none border-gray-300"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            className="p-2 text-lg focus:outline-none border-gray-300"
            placeholder="Your Email"
            required
          />
          <Input
            type="text"
            className="p-2 text-lg focus:outline-none border-gray-300"
            placeholder="Subject"
            required
          />
          <Textarea placeholder="Message" required />
          <Button size="lg" className="bg-blue-600 text-white font-semibold">
            Send Message
          </Button>
        </motion.form>
      </section>
    </div>
  );
};
