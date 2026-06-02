"use client"

import type React from "react"
import Link from "next/link"
import "./shiny-button.css"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  href?: string
  target?: string
  rel?: string
  ariaLabel?: string
  highlightColor?: string
  subtleColor?: string
  bgColor?: string
  fgColor?: string
}

export function ShinyButton({ 
  children, 
  onClick, 
  className = "", 
  href,
  target,
  rel,
  ariaLabel,
  highlightColor,
  subtleColor,
  bgColor,
  fgColor
}: ShinyButtonProps) {
  const customStyles = {
    "--shiny-btn-highlight": highlightColor,
    "--shiny-btn-highlight-subtle": subtleColor,
    "--shiny-btn-bg": bgColor,
    "--shiny-btn-fg": fgColor,
  } as React.CSSProperties

  const content = <span>{children}</span>

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isExternal) {
      return (
        <a 
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : rel}
          aria-label={ariaLabel}
          className={`shinyCta ${className}`} 
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          style={customStyles}
        >
          {content}
        </a>
      )
    }

    return (
      <Link 
        href={href} 
        aria-label={ariaLabel}
        className={`shinyCta ${className}`} 
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        style={customStyles}
      >
        {content}
      </Link>
    )
  }

  return (
    <button 
      aria-label={ariaLabel}
      className={`shinyCta ${className}`} 
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      style={customStyles}
    >
      {content}
    </button>
  )
}
