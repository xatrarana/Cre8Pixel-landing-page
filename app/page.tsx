import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Blog from "@/components/blog"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cre8Pixel | Creative Agency",
  description:
    "Cre8Pixel Company is a creative agency specializing in graphics design, content creation, SEO, and digital marketing.",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </main>
  )
}

