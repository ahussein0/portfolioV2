"use client"

import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from "react"
import { Minus, X } from "lucide-react"

type Position = { x: number; y: number }

interface PortfolioWindowProps {
  id: string
  title: string
  icon: ReactNode
  children: ReactNode
  position: Position
  zIndex: number
  isOpen: boolean
  isActive: boolean
  className?: string
  onFocus: () => void
  onClose: () => void
  onPositionChange: (position: Position) => void
}

export function PortfolioWindow({
  id,
  title,
  icon,
  children,
  position,
  zIndex,
  isOpen,
  isActive,
  className = "",
  onFocus,
  onClose,
  onPositionChange,
}: PortfolioWindowProps) {
  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(max-width: 899px)").matches) return

    const target = event.target as HTMLElement
    if (target.closest("button, a")) return

    onFocus()
    event.currentTarget.setPointerCapture(event.pointerId)

    const startX = event.clientX
    const startY = event.clientY
    const startPosition = position

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const maxX = Math.max(16, window.innerWidth - 360)
      const nextX = Math.min(maxX, Math.max(16, startPosition.x + moveEvent.clientX - startX))
      const nextY = Math.max(72, startPosition.y + moveEvent.clientY - startY)
      onPositionChange({ x: nextX, y: nextY })
    }

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerup", handlePointerUp, { once: true })
  }

  if (!isOpen) return null

  const style = {
    "--window-x": `${position.x}px`,
    "--window-y": `${position.y}px`,
    zIndex,
  } as CSSProperties

  return (
    <section
      id={id}
      className={`os-window ${isActive ? "is-active" : ""} ${className}`}
      style={style}
      onPointerDown={onFocus}
      aria-label={`${title} window`}
    >
      <div className="os-window-titlebar" onPointerDown={handlePointerDown}>
        <div className="os-window-title">
          <span className="os-window-icon" aria-hidden="true">{icon}</span>
          <span>{title}</span>
        </div>
        <div className="os-window-actions">
          <button type="button" onClick={onClose} aria-label={`Minimize ${title}`}>
            <Minus aria-hidden="true" />
          </button>
          <button type="button" onClick={onClose} aria-label={`Close ${title}`}>
            <X aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="os-window-content">{children}</div>
    </section>
  )
}
