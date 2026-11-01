"use client"

import Image from "next/image"
import { useEffect, useMemo, useState, type CSSProperties } from "react"
import {
  BriefcaseBusiness, Code2, ExternalLink, FolderGit2, Github, GraduationCap,
  House, Linkedin, Mail, Maximize2, Sparkles, UserRound,
} from "lucide-react"

import { PortfolioWindow } from "@/components/portfolio-window"
import { ThemeToggle } from "@/components/theme-toggle"

type WindowId = "home" | "about" | "work" | "projects" | "contact"
type Position = { x: number; y: number }

const initialPositions: Record<WindowId, Position> = {
  home: { x: 48, y: 96 }, about: { x: 700, y: 132 }, work: { x: 92, y: 520 },
  projects: { x: 540, y: 560 }, contact: { x: 880, y: 448 },
}

const windowMeta: Record<WindowId, { title: string; dockLabel: string; icon: typeof House }> = {
  home: { title: "hello-anas.app", dockLabel: "Home", icon: House },
  about: { title: "about-me.txt", dockLabel: "About", icon: UserRound },
  work: { title: "experience.log", dockLabel: "Work", icon: BriefcaseBusiness },
  projects: { title: "projects.folder", dockLabel: "Projects", icon: FolderGit2 },
  contact: { title: "contact.app", dockLabel: "Contact", icon: Mail },
}

const skills = ["React", "Next.js", "TypeScript", "Python", "Go", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS", "AI Agents", "REST APIs"]

const projects = [
  { name: "Consensus", label: "Hackathon winner", description: "An AI agent network that polls 100+ synthetic agents and turns their opinions into agreement rates and confidence scores.", tech: ["Python", "Multi-Agent", "OpenAI API"], demo: "https://github.com/Cole-Gilbert/agentjam-hackathon", github: "https://github.com/Cole-Gilbert/agentjam-hackathon", color: "coral" },
  { name: "Ingrenius", label: "AI cooking companion", description: "Custom recipes generated from the ingredients, dietary preferences, and cuisine ideas already on your mind.", tech: ["Next.js", "TypeScript", "OpenAI API"], demo: "https://ingrenius.vercel.app/", github: "https://github.com/ahussein0/AIRecipe", color: "yellow" },
  { name: "Footy Guess", label: "Daily sports game", description: "A full-stack football player guessing game built around blurred silhouettes and quick daily challenges.", tech: ["React", "Next.js", "MongoDB"], demo: "https://footy-guess.vercel.app/", github: "https://github.com/ahussein0/Footy-Guess", color: "violet" },
  { name: "Hooptime", label: "Pickup basketball", description: "A real-time pickup basketball tracker for weekly runs, player signups, and payment tracking.", tech: ["React", "TypeScript", "Stripe"], demo: "https://hooptime.vercel.app/", github: "https://github.com/ahussein0/hooptime", color: "mint" },
  { name: "Volunteer Match", label: "Community platform", description: "Matches volunteers to local opportunities using location, interests, and skills.", tech: ["React", "Express", "PostgreSQL"], github: "https://github.com/ahussein0/task4", color: "blue" },
]

export default function Home() {
  const [positions, setPositions] = useState(initialPositions)
  const [openWindows, setOpenWindows] = useState<Record<WindowId, boolean>>({ home: true, about: true, work: true, projects: true, contact: true })
  const [activeWindow, setActiveWindow] = useState<WindowId>("home")
  const [isOverview, setIsOverview] = useState(true)
  const [windowOrder, setWindowOrder] = useState<WindowId[]>(["work", "projects", "contact", "about", "home"])
  const [time, setTime] = useState("")
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit" }).format(new Date()))
    updateTime()
    const timer = window.setInterval(updateTime, 30_000)
    return () => window.clearInterval(timer)
  }, [])

  const zIndexes = useMemo(() => windowOrder.reduce<Record<WindowId, number>>((result, id, index) => {
    result[id] = index + 10
    return result
  }, {} as Record<WindowId, number>), [windowOrder])

  const stageIndex = (id: WindowId) => (Object.keys(windowMeta) as WindowId[])
    .filter((windowId) => openWindows[windowId] && windowId !== activeWindow)
    .indexOf(id)

  const focusWindow = (id: WindowId) => {
    setActiveWindow(id)
    setIsOverview(false)
    setOpenWindows((current) => ({ ...current, [id]: true }))
    setWindowOrder((current) => [...current.filter((windowId) => windowId !== id), id])
    if (window.matchMedia("(max-width: 899px)").matches) {
      window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }))
    }
  }
  const closeWindow = (id: WindowId) => {
    const nextActiveWindow = [...windowOrder].reverse().find((windowId) => windowId !== id && openWindows[windowId])
    setOpenWindows((current) => ({ ...current, [id]: false }))
    if (activeWindow === id && nextActiveWindow) setActiveWindow(nextActiveWindow)
  }
  const updatePosition = (id: WindowId, position: Position) => setPositions((current) => ({ ...current, [id]: position }))
  const resetDesktop = () => {
    setPositions(initialPositions)
    setOpenWindows({ home: true, about: true, work: true, projects: true, contact: true })
    setWindowOrder(["work", "projects", "contact", "about", "home"])
    setActiveWindow("home")
    setIsOverview(true)
    if (window.matchMedia("(max-width: 899px)").matches) {
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }))
    }
  }
  const copyEmail = async () => {
    await navigator.clipboard.writeText("anasmhussein000@gmail.com")
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 1800)
  }

  return (
    <main className="portfolio-os">
      <div className="os-wallpaper" aria-hidden="true" />
      <header className="os-menu-bar">
        <div className="os-menu-left">
          <button type="button" className="os-brand" onClick={resetDesktop}><Sparkles aria-hidden="true" /><span>AnasOS</span></button>
          <nav aria-label="Portfolio sections">
            {(Object.keys(windowMeta) as WindowId[]).map((id) => <button type="button" key={id} onClick={() => focusWindow(id)}>{windowMeta[id].dockLabel}</button>)}
          </nav>
        </div>
        <div className="os-menu-right"><span className="os-online"><span /> Available</span><ThemeToggle /><time>{time}</time></div>
      </header>

      <div className="os-mobile-intro"><span className="os-mobile-kicker">Welcome to my desktop</span><p>See everything at a glance. Choose a window to bring it into focus.</p></div>

      <div className={`os-desktop ${isOverview ? "is-overview" : "is-focused"}`}>
        <PortfolioWindow id="home" title={windowMeta.home.title} icon={<House />} position={positions.home} zIndex={zIndexes.home} isOpen={openWindows.home} isActive={activeWindow === "home"} stageIndex={stageIndex("home")} onFocus={() => focusWindow("home")} onClose={() => closeWindow("home")} onPositionChange={(position) => updatePosition("home", position)} className="os-window-home">
          <div className="os-hero">
            <div className="os-hero-copy"><span className="os-eyebrow">Software engineer</span><p>I build useful software, experiment with AI agents, and turn ambitious ideas into products people enjoy using.</p><div className="os-hero-actions"><button type="button" className="os-primary-button" onClick={() => focusWindow("projects")}>Open projects <FolderGit2 aria-hidden="true" /></button><button type="button" className="os-secondary-button" onClick={() => focusWindow("contact")}>Let&apos;s talk <Mail aria-hidden="true" /></button></div></div>
            <div className="os-profile-wrap"><Image src="/profile-image.jpg" alt="Anas Hussein hiking in the mountains" width={420} height={315} className="os-profile-image" priority /></div>
          </div>
        </PortfolioWindow>

        <PortfolioWindow id="about" title={windowMeta.about.title} icon={<UserRound />} position={positions.about} zIndex={zIndexes.about} isOpen={openWindows.about} isActive={activeWindow === "about"} stageIndex={stageIndex("about")} onFocus={() => focusWindow("about")} onClose={() => closeWindow("about")} onPositionChange={(position) => updatePosition("about", position)} className="os-window-about">
          <div className="os-about"><span className="os-file-label">ABOUT_ME.TXT</span><p>I care about products that feel clear, fast, and a little unexpected. Outside the digital world, I hoop and hit the trails.</p><div className="os-skill-cloud" aria-label="Technical skills">{skills.map((skill, index) => <span key={skill} style={{ "--skill-index": index } as CSSProperties}>{skill}</span>)}</div></div>
        </PortfolioWindow>

        <PortfolioWindow id="work" title={windowMeta.work.title} icon={<BriefcaseBusiness />} position={positions.work} zIndex={zIndexes.work} isOpen={openWindows.work} isActive={activeWindow === "work"} stageIndex={stageIndex("work")} onFocus={() => focusWindow("work")} onClose={() => closeWindow("work")} onPositionChange={(position) => updatePosition("work", position)} className="os-window-work">
          <div className="os-timeline"><div className="os-section-heading"><div><span>CAREER.LOG</span><h2>Experience</h2></div><Code2 aria-hidden="true" /></div><article className="os-timeline-item current"><span className="os-timeline-dot" /><div><div className="os-timeline-meta"><strong>Software Engineer · Copado</strong><span>May 2025 — now</span></div><p>Building developer-facing software and helping teams ship with more confidence.</p></div></article><article className="os-timeline-item"><span className="os-timeline-dot" /><div><div className="os-timeline-meta"><strong>Leadership Development Intern · RippleMatch</strong><span>Jan — May 2023</span></div><p>Recognized as a top 1% intern and increased student sign-ups by 30% through a focused growth plan.</p></div></article><div className="os-education"><GraduationCap aria-hidden="true" /><div><strong>B.S. Computer Science</strong><span>University of Houston · 2025</span></div><div><strong>B.S. Public Health</strong><span>University of Houston · 2022</span></div></div></div>
        </PortfolioWindow>

        <PortfolioWindow id="projects" title={windowMeta.projects.title} icon={<FolderGit2 />} position={positions.projects} zIndex={zIndexes.projects} isOpen={openWindows.projects} isActive={activeWindow === "projects"} stageIndex={stageIndex("projects")} onFocus={() => focusWindow("projects")} onClose={() => closeWindow("projects")} onPositionChange={(position) => updatePosition("projects", position)} className="os-window-projects">
          <div className="os-project-browser"><div className="os-section-heading"><div><span>PROJECTS.FOLDER</span><h2>Selected work</h2></div><span className="os-project-count">{projects.length} items</span></div><div className="os-project-grid">{projects.map((project) => <article className={`os-project-card ${project.color}`} key={project.name}><div className="os-project-top"><span>{project.label}</span><Maximize2 aria-hidden="true" /></div><h3>{project.name}</h3><p>{project.description}</p><div className="os-project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><div className="os-project-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live <ExternalLink aria-hidden="true" /></a>}<a href={project.github} target="_blank" rel="noreferrer">Code <Github aria-hidden="true" /></a></div></article>)}</div></div>
        </PortfolioWindow>

        <PortfolioWindow id="contact" title={windowMeta.contact.title} icon={<Mail />} position={positions.contact} zIndex={zIndexes.contact} isOpen={openWindows.contact} isActive={activeWindow === "contact"} stageIndex={stageIndex("contact")} onFocus={() => focusWindow("contact")} onClose={() => closeWindow("contact")} onPositionChange={(position) => updatePosition("contact", position)} className="os-window-contact">
          <div className="os-contact"><span className="os-contact-status"><span /> Connection ready</span><p>Feel free to reach out always down to chat!</p><div className="os-contact-actions"><a href="mailto:anasmhussein000@gmail.com"><Mail aria-hidden="true" /> Email me</a><button type="button" onClick={copyEmail}>{emailCopied ? "Copied!" : "Copy email"}</button></div><div className="os-social-links"><a href="https://github.com/ahussein0" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a><a href="https://www.linkedin.com/in/anas-hussein1/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a></div></div>
        </PortfolioWindow>
      </div>

      <nav className="os-dock" aria-label="Open portfolio windows">
        {(Object.keys(windowMeta) as WindowId[]).map((id) => {
          const Icon = windowMeta[id].icon
          return <button type="button" key={id} className={activeWindow === id && openWindows[id] ? "is-active" : ""} onClick={() => focusWindow(id)} aria-label={`Open ${windowMeta[id].dockLabel}`} aria-current={activeWindow === id && openWindows[id] ? "true" : undefined}><Icon aria-hidden="true" /><span>{windowMeta[id].dockLabel}</span>{openWindows[id] && <i aria-hidden="true" />}</button>
        })}
        <span className="os-dock-divider" /><button type="button" onClick={resetDesktop} aria-label="Show all apps"><Maximize2 aria-hidden="true" /><span>All apps</span></button>
      </nav>
    </main>
  )
}
