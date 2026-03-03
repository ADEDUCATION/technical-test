'use client'

import { useEffect, useState } from 'react'
import IconPointFilled from '@ad-education/ui/dist/icons/IconPointFilled'

export function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-50"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            <IconPointFilled />
        </div>
    )
}
