import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ClipboardCheck, Mail, Smile, Shield, Users, BookOpen, HeartHandshake } from "lucide-react";
import { fadeUp } from "@/utils/fadeUp";

export const Admissions = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center bg-linear-to-r from-blue-600 to-sky-400 text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          custom={0}
          className="text-5xl font-bold mb-4"
        >
          Admissions at XYZ Primary School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          custom={0.5}
          className="max-w-2xl mx-auto text-lg"
        >
          We’re excited to welcome new learners and families to our community. Here’s how to join us!
        </motion.p>
      </section>

      {/* Admission Steps */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-3xl font-bold mb-12"
        >
          Admission Process
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: FileText,
              title: "Step 1: Apply",
              text: "Submit an application form online or at the school office.",
            },
            {
              icon: ClipboardCheck,
              title: "Step 2: Interview",
              text: "Attend a brief interview or assessment with your child.",
            },
            {
              icon: Mail,
              title: "Step 3: Admission Offer",
              text: "Receive an admission decision and offer letter via email.",
            },
            { icon: Smile, title: "Step 4: Join Us!", text: "Complete enrollment and get ready to start learning!" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition">
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          Admission Requirements
        </motion.h2>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-left text-gray-700 space-y-4"
        >
          <li>📄 Completed application form</li>
          <li>🧾 Copy of birth certificate</li>
          <li>📚 Previous school report (if applicable)</li>
          <li>🪪 Parent/guardian ID copy</li>
          <li>💉 Health and vaccination records</li>
          <li>🖼️ Two passport-sized photos</li>
        </motion.ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Why Choose XYZ Primary School?
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Safe & Caring",
              text: "We provide a nurturing environment where every child feels secure.",
            },
            {
              icon: Users,
              title: "Experienced Teachers",
              text: "Our qualified staff are dedicated to holistic learning and growth.",
            },
            {
              icon: BookOpen,
              title: "Strong Academics",
              text: "We build solid foundations in literacy, numeracy, and creativity.",
            },
            {
              icon: HeartHandshake,
              title: "Community Spirit",
              text: "We value teamwork, respect, and a culture of kindness.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-md transition">
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
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
          className="text-3xl font-bold mb-4"
        >
          Ready to Apply?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-6"
        >
          We can’t wait to meet you and your child! Apply online or visit our school office to get started.
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button size="lg" className=" bg-violet-500 font-semibold hover:bg-violet-400 border-none">
            Apply Online
          </Button>
          <Button size="lg" variant="outline" className="bg-amber-500 border-none hover:bg-amber-400">
            Contact Admissions
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
