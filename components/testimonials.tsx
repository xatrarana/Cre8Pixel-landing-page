'use client'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { Quote } from "lucide-react"
import { User1, User3, User4, User5, User2 } from "@/assets"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string | StaticImageData
  quote: string
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechInnovate",
      image: User1,
      quote:
        "Working with Cre8Pixel Company transformed our brand presence. Their team delivered exceptional design work and a marketing strategy that exceeded our expectations. Our website traffic has increased by 150% since the launch.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "GreenEco Solutions",
      image: User2,
      quote:
        "The team at Cre8Pixel Company truly understood our vision and translated it into a compelling brand identity. Their attention to detail and creative approach helped us stand out in a competitive market.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "Lifestyle Brands Inc.",
      image: User3,
      quote:
        "The SEO and content strategy developed by Cre8Pixel Company has been a game-changer for our online presence. We've seen a significant improvement in our search rankings and engagement metrics.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder",
      company: "Artisan Collective",
      image: User4,
      quote:
        "Cre8Pixel Company delivered a website that perfectly captures our brand essence. Their design work is not only beautiful but also functional, resulting in a 40% increase in online inquiries.",
    },
    {
      id: 5,
      name: "Jessica Williams",
      position: "Creative Director",
      company: "Modern Media",
      image: User5,
      quote:
        "As a creative professional myself, I have high standards. The Cre8Pixel team not only met but exceeded them. Their collaborative approach and innovative ideas made the entire process enjoyable and productive.",
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
    hidden: { opacity: 0, x: -100 }, // Slide in from the left
    visible: {
      opacity: 1,
      x: 0, // End position at 0 (default position)
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience working with
            Cre8Pixel Company.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Quote className="text-white h-6 w-6" />
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
