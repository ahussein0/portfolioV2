"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CopyButtonProps {
  value: string
  label?: string
  className?: string
  children?: React.ReactNode
}

export function CopyButton({ value, label, className, children }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setHasCopied(true)
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    } catch (error) {
      console.error("Failed to copy text: ", error)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="default" className={className} onClick={copyToClipboard}>
            {children}
            {hasCopied ? <Check className="h-4 w-4 ml-2" /> : <Copy className="h-4 w-4 ml-2" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{hasCopied ? "Copied!" : label || "Copy to clipboard"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
