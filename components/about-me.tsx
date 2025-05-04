"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, Award } from "lucide-react"
import { useState } from "react"

const timelineData = [
  {
    id: 1,
    company: "Work et Yamo",
    role: "Intern",
    period: "Nov 2024 - Present",
    location: "Cameroon",
    type: "Internship",
    logo: "/placeholder.svg?height=56&width=56",
    skills: ["Design", "Development", "Marketing"],
  },
  {
    id: 2,
    company: "ICT University",
    role: "Marketing Intern",
    period: "2023 - 2024",
    location: "Cameroon",
    type: "Internship",
    logo: "/placeholder.svg?height=56&width=56",
    skills: ["Marketing", "Design", "Event Planning"],
  },
  {
    id: 3,
    company: "Django Cameroon Community",
    role: "Volunteer Designer",
    period: "2023 - Present",
    location: "Cameroon",
    type: "Volunteer",
    logo: "/placeholder.svg?height=56&width=56",
    skills: ["Design", "Event Organization", "Community Management"],
  },
]

const skillsData = {
  Design: [
    { name: "UI/UX Design", proficiency: 90 },
    { name: "Photoshop", proficiency: 85 },
    { name: "Illustrator", proficiency: 75 },
    { name: "Canva", proficiency: 95 },
  ],
  Development: [
    { name: "Flutter", proficiency: 80 },
    { name: "HTML/CSS", proficiency: 90 },
    { name: "Python", proficiency: 70 },
    { name: "Firebase", proficiency: 65 },
  ],
  Tools: [
    { name: "Git", proficiency: 75 },
    { name: "VS Code", proficiency: 95 },
    { name: "Jira", proficiency: 60 },
    { name: "WordPress", proficiency: 70 },
  ],
}

const achievementsData = [
  {
    id: 1,
    title: "A2SV Hackathon 2024 - Quarterfinalist",
    description:
      'Made it to the quarterfinals (top 128 teams out of 700+) in the A2SV Hackathon focused on "Solving Africa\'s Challenges" through AI.',
    details: "Developed an AI-powered chatbot for first aid treatment with appointment booking system.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "3rd Position - Hackathon Piaget Switzerland 2022",
    description:
      "Secured 3rd place in the Piaget Switzerland Hackathon 2022 with Team Orbit, competing against teams from around the world.",
    details: "Developed an innovative solution that impressed judges with its creativity and technical implementation.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "48-Hour Hackathon at Mont Febe Hotel",
    description:
      "Participated in a 48-hour hackathon in support of Yaoundé Innovation, working with Team InnoPulse to provide creative solutions.",
    details: "Developed a solution to link local talent with both internal and external opportunities.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Vice President of ICTU Creative Club",
    description:
      "Leading the ICT University Creative Club, organizing sessions and workshops to encourage young people to get involved in technology and design.",
    details: "Recently organized a session teaching Adobe Illustrator for flyer creation.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">About Me</span>
            <span className="ml-2">👨‍💻</span>
          </motion.h2>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Feupa Heumou Fraidy Cadin"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-2/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Front-end Developer 💻 and UI/UX Designer 🎨. Creating beautiful, functional digital experiences.
                  Student pursuing a degree in computer sciences with a passion for technology and creativity.
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <motion.p
                    className="text-xl mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    🚀 <strong>Hello, I'm Feupa Heumou Fraidy Cadin!</strong>
                  </motion.p>
                  <motion.p
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I'm a <strong>Front-end Developer</strong> and <strong>UI/UX Designer</strong> currently pursuing a
                    degree in <strong>Computer Sciences</strong>. I'm passionate about creating beautiful, functional
                    digital experiences that solve real-world problems.
                  </motion.p>
                  <motion.p
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    As the <strong>Vice President of the ICT University Creative Club</strong>, I encourage young people
                    to get involved in technology and design. I'm also a{" "}
                    <strong>volunteer at the Django Cameroon Community</strong>, where I help organize events and create
                    graphics for different activities.
                  </motion.p>
                  <motion.p
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                My Journey
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </motion.h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg?height=56&width=56"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-blue-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + skillIndex * 0.1 }}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 text-blue-300 border border-blue-500/20"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full hidden md:block"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 }}
                    ></motion.div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                My Skills
              </span>
              <span className="ml-2 text-white">⚡</span>
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-xl font-bold mb-4 text-blue-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                      delay={skillIndex * 0.1}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-20">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                Achievements & Highlights
              </span>
              <span className="ml-2 text-white">🏆</span>
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievementsData.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  title={achievement.title}
                  description={achievement.description}
                  details={achievement.details}
                  image={achievement.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency, delay = 0 }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut", delay }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-500 to-green-500"
        />
      </div>
    </div>
  )
}

function AchievementCard({ title, description, details, image, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 overflow-hidden rounded-lg relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {index === 1 && (
          <motion.div
            className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
          >
            <Award className="w-3 h-3 mr-1" />
            3rd Place
          </motion.div>
        )}
      </div>
      <motion.h4
        className="text-xl font-bold mb-3 text-white"
        animate={{ color: isHovered ? "#3b82f6" : "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h4>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-gray-400">{details}</p>
    </motion.div>
  )
}
