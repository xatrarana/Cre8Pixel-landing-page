"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, FileText, Search, TrendingUp, Layers, Monitor, Camera, BarChart2 } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Palette size={24} />,
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand message effectively across all platforms.",
    },
    {
      icon: <FileText size={24} />,
      title: "Content Creation",
      description: "Compelling content that engages your audience and drives meaningful interactions with your brand.",
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Data-driven strategies to improve your visibility in search results and drive organic traffic.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Digital Marketing",
      description:
        "Comprehensive marketing campaigns that connect with your target audience and deliver measurable results.",
    },
    {
      icon: <Layers size={24} />,
      title: "Brand Identity",
      description: "Distinctive brand elements that create recognition and build trust with your audience.",
    },
    {
      icon: <Monitor size={24} />,
      title: "Web Development",
      description: "Custom websites that combine stunning design with seamless functionality and user experience.",
    },
    {
      icon: <Camera size={24} />,
      title: "Photography",
      description: "Professional photography that showcases your products, services, and team in the best light.",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Analytics & Reporting",
      description: "Detailed insights and reports that help you understand performance and make data-driven decisions.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Creative Solutions for Your Business Needs</h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of services designed to help your business stand out in the digital landscape
            and achieve sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

