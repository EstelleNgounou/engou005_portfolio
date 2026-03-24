'use client'

import { useEffect, useRef } from 'react'

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Grid points
    const SPACING = 40
    const cols = Math.ceil(canvas.width  / SPACING) + 1
    const rows = Math.ceil(canvas.height / SPACING) + 1

    let animId: number
    let time = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const baseX = j * SPACING
          const baseY = i * SPACING

          // Distance from mouse
          const dx   = baseX - mouse.x
          const dy   = baseY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Repulsion effect
          const maxDist  = 120
          const strength = Math.max(0, 1 - dist / maxDist)
          const offsetX  = (dx / (dist || 1)) * strength * 20
          const offsetY  = (dy / (dist || 1)) * strength * 20

          // Ambient wave
          const wave = Math.sin(i * 0.5 + j * 0.3 + time) * 3

          const x = baseX + offsetX + wave
          const y = baseY + offsetY + wave

          // Opacity based on distance from mouse
          const opacity = 0.60 + strength * 0.6

          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(79, 255, 164, ${opacity})`
          ctx.fill()
        }
      }
    }

    animate()

    const handleResize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}