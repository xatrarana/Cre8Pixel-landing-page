"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { mobile, pdPhoto, rebrand, seo, website } from "@/assets"

interface Project {
  id: number
  title: string
  category: string
  image: string | StaticImageData
  description: string
  client: string
  date: string
  services: string[]
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      id: 1,
      title: "Eco Brand Redesign",
      category: "branding",
      image: rebrand,
      description:
        "Complete brand overhaul for an eco-friendly product line, including logo design, packaging, and brand guidelines.",
      client: "GreenLife Products",
      date: "January 2023",
      services: ["Brand Strategy", "Logo Design", "Packaging", "Brand Guidelines"],
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: website,
      description:
        "Custom e-commerce platform with seamless user experience, integrated payment systems, and mobile-responsive design.",
      client: "Fashion Forward",
      date: "March 2023",
      services: ["Web Design", "Development", "E-commerce", "UX/UI"],
    },
    {
      id: 3,
      title: "Product Photography",
      category: "content",
      image: pdPhoto,
      description:
        "High-quality product photography showcasing a new line of premium kitchenware with lifestyle context.",
      client: "Culinary Essentials",
      date: "July 2023",
      services: ["Photography", "Art Direction", "Editing", "Asset Management"],
    },
    {
      id: 4,
      title: "SEO Optimization",
      category: "marketing",
      image: seo,
      description:
        "Comprehensive SEO strategy that resulted in a 65% increase in organic traffic and improved search rankings for key terms.",
      client: "Legal Advisors Inc.",
      date: "August 2023",
      services: ["SEO Audit", "Keyword Strategy", "Content Optimization", "Link Building"],
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "web",
      image: mobile,
      description:
        "Intuitive and engaging mobile app design for a health and wellness platform with personalized user experiences.",
      client: "Wellness Connect",
      date: "October 2023",
      services: ["UX Research", "UI Design", "Prototyping", "User Testing"],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Showcasing Our Creative Excellence</h2>
          <p className="text-gray-600 text-lg">
            Browse through our selected projects that demonstrate our expertise and creative approach across different
            industries and challenges.
          </p>
        </motion.div>

        <div ref={ref} className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "branding" ? "default" : "outline"}
              onClick={() => setFilter("branding")}
              className={filter === "branding" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Branding
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className={filter === "web" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Web & Mobile
            </Button>
            <Button
              variant={filter === "marketing" ? "default" : "outline"}
              onClick={() => setFilter("marketing")}
              className={filter === "marketing" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Marketing
            </Button>
            <Button
              variant={filter === "content" ? "default" : "outline"}
              onClick={() => setFilter("content")}
              className={filter === "content" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Content
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-purple-600 font-medium uppercase tracking-wider">
                      {project.category === "branding" && "Branding"}
                      {project.category === "web" && "Web & Mobile"}
                      {project.category === "marketing" && "Marketing"}
                      {project.category === "content" && "Content"}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm text-purple-600 font-medium uppercase tracking-wider">
                  {selectedProject.category === "branding" && "Branding"}
                  {selectedProject.category === "web" && "Web & Mobile"}
                  {selectedProject.category === "marketing" && "Marketing"}
                  {selectedProject.category === "content" && "Content"}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Client</h4>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Date</h4>
                      <p className="text-gray-600">{selectedProject.date}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Services</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.services.map((service, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

