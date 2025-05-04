"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
  Palette,
  Code,
  Monitor,
  Globe,
  Heart,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-blue-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              Hey! I'm Feupa Heumou Fraidy Cadin
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              🚀 Front-end Developer | UI/UX Designer | Creative Technologist
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Code className="w-10 h-10 text-blue-500" />}
                title="Front-end Development"
                description="Creating responsive and interactive user interfaces with Flutter, HTML, CSS, and modern frameworks."
              />
              <ServiceCard
                icon={<Palette className="w-10 h-10 text-green-500" />}
                title="UI/UX Design"
                description="Designing intuitive and visually appealing user experiences with Photoshop, Illustrator, and Canva."
              />
              <ServiceCard
                icon={<Monitor className="w-10 h-10 text-blue-500" />}
                title="Web Development"
                description="Building modern websites with responsive design, animations, and seamless user experiences."
              />
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-green-500" />}
                title="Mobile App Development"
                description="Creating cross-platform mobile applications with Flutter that work seamlessly on iOS and Android."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-blue-500" />}
                title="Python Development"
                description="Building applications, automation scripts, and data analysis tools with Python."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-green-500" />}
                title="Creative Design"
                description="Crafting eye-catching graphics, logos, and marketing materials for digital and print media."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="NERALA - Language Preservation App"
                description="A mobile application designed to preserve and revitalize Cameroonian vernacular languages through interactive learning methods."
                tags={["Flutter", "Cultural Preservation", "Education"]}
                image="/placeholder.svg?height=200&width=400"
                index={0}
                details="Dans un contexte où la mondialisation menace la survie des langues vernaculaires camerounaises, Nerala se positionne comme une solution innovante visant à préserver et revitaliser ce patrimoine culturel essentiel. Notre application mobile propose une approche moderne et interactive pour l'apprentissage des langues locales, répondant à une problématique cruciale : aujourd'hui, seul 1/7 des jeunes de moins de 25 ans parle/pratique leur langue maternelle."
                features={[
                  "Flashcards interactives",
                  "Histoires culturelles",
                  "Exercices pratiques",
                  "Enregistrements audio authentiques",
                ]}
                icon={<Globe className="w-6 h-6" />}
              />
              <ProjectCard
                title="AI Health Assistant"
                description="An innovative mobile application integrating AI with natural healthcare solutions, providing personalized health reports and remedy suggestions."
                tags={["Flutter", "AI", "Healthcare"]}
                image="/placeholder.svg?height=200&width=400"
                index={1}
                details="The Natural Treatment AI Health Assistant is an innovative mobile application designed to integrate artificial intelligence with natural healthcare solutions. This project, developed using Flutter, features a web page to promote the app, educate users on its benefits, and provide an AI-powered chatbot for instant health assistance."
                features={[
                  "AI Voice Consultation",
                  "Personalized Health Reports",
                  "Natural Remedy Suggestions",
                  "Secure Document Storage",
                ]}
                icon={<Heart className="w-6 h-6" />}
              />
              <ProjectCard
                title="AI-Powered Healthcare Chatbot"
                description="An AI chatbot for first aid treatment with appointment booking system developed during A2SV Hackathon 2024."
                tags={["AI", "Healthcare", "Web Development"]}
                image="/placeholder.svg?height=200&width=400"
                index={2}
              />
              <ProjectCard
                title="Innovation Bridge Solution"
                description="A solution developed during a 48-hour hackathon at Mont Febe Hotel to link local talent with opportunities."
                tags={["Hackathon", "Team Project", "Innovation"]}
                image="/placeholder.svg?height=200&width=400"
                index={3}
              />
              <ProjectCard
                title="ICTU Creatives Club Platform"
                description="A platform for the ICT University Creative Club to showcase student work and organize events."
                tags={["UI/UX", "Community", "Design"]}
                image="/placeholder.svg?height=200&width=400"
                index={4}
              />
              <ProjectCard
                title="Django Cameroon Community Website"
                description="Contributed to the Django Cameroon Community website as a volunteer designer."
                tags={["Django", "Web Design", "Community"]}
                image="/placeholder.svg?height=200&width=400"
                index={5}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                Get In Touch
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Prefer to connect directly?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/Heumou-Fraidy" label="GitHub" />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/heumou-fraidy-cadin-228488273"
              label="LinkedIn"
            />
            <SocialIcon icon={<Twitter />} href="#" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="#" label="Discord" />
            <SocialIcon icon={<PenTool />} href="#" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Feupa Heumou Fraidy Cadin. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
      }}
    >
      <motion.div
        className="mb-4 flex justify-center md:justify-start"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ title, description, tags, image, index = 0, details, features, icon }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
      }}
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-white text-center md:text-left">{title}</h3>
        {icon && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-blue-400"
          >
            {icon}
          </motion.div>
        )}
      </div>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>

      {details && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mb-4"
        >
          <p className="text-gray-400 text-sm mb-3">{details}</p>

          {features && features.length > 0 && (
            <div className="mt-3">
              <p className="text-blue-400 font-medium mb-2">Key Features:</p>
              <ul className="list-disc list-inside text-gray-400 text-sm">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {details && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-4 flex items-center"
        >
          {isExpanded ? "Show less" : "Learn more"}
          <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-1">
            ↓
          </motion.span>
        </button>
      )}

      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + tagIndex * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-300"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:fraidyheumou@gmail.com" className="text-blue-400 hover:text-blue-300">
        fraidyheumou@gmail.com
      </a>
    </div>
  )
}
