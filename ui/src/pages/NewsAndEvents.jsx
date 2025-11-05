// src/pages/NewsAndEvents.jsx
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { EventsCalendar } from "./EventsCalendar";
import { events, news } from "@/assets/images";

export const NewsAndEvents = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="py-16  dark:bg-gray-700 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
          🗓️ Latest News & Upcoming Events
        </motion.h2>

        {/* Calendar Section */}

        <EventsCalendar events={events} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        {/* Events Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Upcoming Events
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-0">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6 text-left">
                  <h4 className="text-xl font-semibold text-indigo-600 mb-2">{event.title}</h4>
                  <p className="text-gray-500 text-sm mb-2">📅 {new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* News Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Latest News
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-md bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex p-0">
                <img src={item.image} alt={item.headline} className="w-full h-40 object-cover" />
                <CardContent className="p-4 text-left flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-indigo-600">{item.headline}</h4>
                  <p className="text-gray-500 text-sm mb-1">🗓️ {new Date(item.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 dark:text-gray-300">{item.snippet}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
