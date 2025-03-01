"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { TeamWork } from "@/assets"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full z-0" />
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={TeamWork}
                alt="Creative team at work"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.span
                variants={itemVariants}
                className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4"
              >
                About Us
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                We Create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Digital Experiences
                </span>{" "}
                That Matter
              </motion.h2>
            </div>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              Cre8Pixel Company is a full-service creative agency founded in 2025 with a passion for helping businesses
              stand out in the digital landscape. Our team of designers, content creators, SEO specialists, and
              marketing experts work together to deliver comprehensive solutions that drive results.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              We believe in the power of creativity to transform businesses. Our approach combines innovative design
              thinking with data-driven strategies to create meaningful connections between brands and their audiences.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="font-medium">Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <span className="font-medium">Creativity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="font-medium">Results</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

