"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { AiOnMarketing, brandIdentity, trends } from "@/assets"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string | StaticImageData
  date: string
  author: string
  category: string
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Design Trends to Watch in 2023",
      excerpt:
        "Explore the latest design trends that are shaping the creative industry this year and how you can incorporate them into your projects.",
      image: trends,
      date: "June 15, 2023",
      author: "Sarah Johnson",
      category: "Design",
    },
    {
      id: 2,
      title: "The Impact of AI on Digital Marketing",
      excerpt:
        "Discover how artificial intelligence is revolutionizing digital marketing strategies and what this means for businesses.",
      image: AiOnMarketing,
      date: "July 22, 2023",
      author: "Michael Chen",
      category: "Marketing",
    },
    {
      id: 3,
      title: "Building a Strong Brand Identity",
      excerpt:
        "Learn the essential elements of creating a cohesive brand identity that resonates with your target audience and stands out in the market.",
      image: brandIdentity,
      date: "August 10, 2023",
      author: "Emily Rodriguez",
      category: "Branding",
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Insights & News</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, tips, and insights from our team of experts in design, content, SEO,
            and digital marketing.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-purple-600 shadow-sm border border-purple-200 hover:bg-purple-50 transition-colors"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

