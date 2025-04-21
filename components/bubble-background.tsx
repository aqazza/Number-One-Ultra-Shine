"use client"

import { useEffect, useRef, useState } from "react"

interface BubbleBackgroundProps {
  small?: boolean
}

export function BubbleBackground({ small = false }: BubbleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const animationSpeedRef = useRef(0)
  const requestRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Bubble properties
    const bubbles: {
      x: number
      y: number
      radius: number
      speed: number
      opacity: number
      initialY: number
    }[] = []

    // Create bubbles
    const createBubbles = () => {
      const bubbleCount = small ? 15 : 30
      for (let i = 0; i < bubbleCount; i++) {
        const y = canvas.height + Math.random() * 100
        bubbles.push({
          x: Math.random() * canvas.width,
          y: y,
          initialY: y,
          radius: small ? Math.random() * 10 + 2 : Math.random() * 20 + 5,
          speed: small ? Math.random() * 1 + 0.5 : Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    createBubbles()

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gradually adjust animation speed based on hover state
      if (isHovering && animationSpeedRef.current < 1) {
        animationSpeedRef.current += 0.01 // Slower acceleration for smoother start
      } else if (!isHovering && animationSpeedRef.current > 0) {
        animationSpeedRef.current -= 0.005 // Even slower deceleration for smoother stop
      }

      // Clamp animation speed
      animationSpeedRef.current = Math.max(0, Math.min(1, animationSpeedRef.current))

      // Draw and update bubbles
      bubbles.forEach((bubble, index) => {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)

        // Add a subtle gradient to bubbles
        const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 1.5})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${bubble.opacity * 0.5})`)

        ctx.fillStyle = gradient
        ctx.fill()

        // Only move bubbles when animation is active
        if (animationSpeedRef.current > 0) {
          // Move bubble up based on animation speed with some randomness
          bubble.y -= bubble.speed * animationSpeedRef.current * (0.9 + Math.random() * 0.2)

          // Add slight horizontal movement for more natural effect
          bubble.x += Math.sin(Date.now() * 0.001 + index) * 0.3 * animationSpeedRef.current

          // Reset bubble if it goes off screen
          if (bubble.y < -bubble.radius * 2) {
            bubble.y = canvas.height + bubble.radius
            bubble.x = Math.random() * canvas.width
          }
        } else {
          // Gradually reset bubbles to their initial positions when not hovering
          bubble.y = bubble.initialY
        }
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    // Add hover event listeners to the parent element
    const parentElement = canvas.parentElement
    if (parentElement) {
      parentElement.addEventListener("mouseenter", () => setIsHovering(true))
      parentElement.addEventListener("mouseleave", () => setIsHovering(false))
    }

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      if (parentElement) {
        parentElement.removeEventListener("mouseenter", () => setIsHovering(true))
        parentElement.removeEventListener("mouseleave", () => setIsHovering(false))
      }
    }
  }, [small, isHovering])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
