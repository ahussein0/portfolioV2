"use client"

import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { CopyButton } from "@/components/copy-button"
import { AlternatingText } from "@/components/alternating-text"
import { useState } from "react"

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false)
  const email = "anasmhussein000@gmail.com"

  const handleEmailClick = () => {
    try {
      window.location.href = `mailto:${email}`
    } catch (error) {
      console.error("Failed to open mail client:", error)
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(email).then(() => {
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
      })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-semibold">
            <AlternatingText texts={["Portfolio", "yo, i'm Anas!"]} interval={5000} />
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 flex flex-col items-center text-center">
        <div className="mb-6 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
          <Image
            src="/profile-image.jpg"
            alt="Anas Hussein"
            width={150}
            height={150}
            className="h-[150px] w-[150px] object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Anas Hussein</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Software Engineer</p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/ahussein0" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/anas-hussein1/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" onClick={handleEmailClick}>
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
        {emailCopied && (
          <div className="mt-2 text-sm text-green-600 dark:text-green-400">Email copied to clipboard!</div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="container py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">About Me</h2>
        <Card className="bg-white dark:bg-gray-900 shadow-sm">
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              generalist swe. wide range. no limits
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              outside the digital world, I game, I hoop, and I hit the trails
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend Skills */}
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">HTML/CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Swift</span>
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">C++/C</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Swift</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">GraphQL</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">REST APIs</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Authentication</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Serverless</span>
              </div>
            </CardContent>
          </Card>

          {/* Tools & Others */}
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Git/GitHub</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">CI/CD</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Netlify</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">npm/yarn</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Linux</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">APIs</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">SQL</span>
              </div>
            </CardContent>
          </Card>

          {/* Other Skills */}
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">UI/UX Design</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  Testing (Jest/Cypress)
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  Performance Optimization
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Agile/Scrum</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Prompt Engineering</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="container py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Resume</h2>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Experience</h3>
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-900 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="font-semibold">Copado</h4>
                  <span className="text-gray-500 dark:text-gray-400">May 2025 - Present</span>
                </div>
                <h5 className="text-gray-600 dark:text-gray-300 mb-2">Software Engineer</h5>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                   DevOps.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-900 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="font-semibold">Ripplematch</h4>
                  <span className="text-gray-500 dark:text-gray-400">Janruary 2023- May 2023</span>
                </div>
                <h5 className="text-gray-600 dark:text-gray-300 mb-2">Leadership Development Intern</h5>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Recognized as a top 1% intern performer in a large cohort by RippleMatch Leadership; exceeded
                    expectations in project delivery, leading to a notable enhancement in team productivity.
                  </li>
                  <li>
                    Increased student sign-ups by 30% through a strategic growth plan that integrated social media
                    campaigns, email outreach, and networking initiatives.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                <span className="text-gray-500 dark:text-gray-400">2023 - 2025</span>
              </div>
              <h5 className="text-gray-600 dark:text-gray-300">University of Houston</h5>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-semibold">Bachelor of Science in Public Health Minor in Biology</h4>
                <span className="text-gray-500 dark:text-gray-400">2019 - 2022</span>
              </div>
              <h5 className="text-gray-600 dark:text-gray-300">University of Houston</h5>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Consensus</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developed an AI Agent Network that simulates real population opinions by polling 100+ synthetic agents
and aggregating results into agreement rates and confidence scores. First Place Hackathon :)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Multi-Agent</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">HTML/CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">SixtyFour API</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">OpenAI API</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Cole-Gilbert/agentjam-hackathon" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Cole-Gilbert/agentjam-hackathon" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Ingrenius</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                AI-powered recipe generator using Next.js, React, TypeScript, and Tailwind CSS that creates custom
                recipes based on user-provided ingredients, dietary preferences, and cuisine types.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">OpenAI API</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://ingrenius.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/ahussein0/AIRecipe" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Footy Guess</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A full-stack web app football player guessing game with blurred silhouettes for football fans.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">REST API</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://footy-guess.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/ahussein0/Footy-Guess" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Volunteer Management Application</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                An app that matches users to events based on preferences such as location, skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Geolocation API</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/ahussein0/task4" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Hooptime</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A real-time pick-up basketball tracker that allows users to sign up for weekly basketball runs and
                tracks payments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Typescript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Stripe Payments</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://hooptime.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/ahussein0/hooptime" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Get In Touch</h2>
        <Card className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
              <div className="flex gap-4 mt-4">
                <CopyButton value={email} label="Copy email address">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me
                </CopyButton>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/anas-hussein1/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 dark:border-gray-800">
        <div className="container text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Anas Hussein. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
