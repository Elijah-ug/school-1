// src/components/ShowcaseSection.jsx
import { showcases } from "@/assets/images";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ShowcaseSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100"
        >
          🚀 Student Showcases & Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-600 overflow-hidden h-full">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-indigo-600 dark:text-indigo-400">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
                  <blockquote className="italic text-gray-600 dark:text-gray-400 mb-3">{item.testimonial}</blockquote>
                  <p className="font-medium text-gray-900 dark:text-gray-100">— {item.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
