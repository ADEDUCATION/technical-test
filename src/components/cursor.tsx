'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Hand from '../../public/images/cursor-hand.svg'
import Mouse from '../../public/images/cursor-main.svg'

export function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        function handleMouseOver(e: MouseEvent) {
            const target = e.target as HTMLElement
            setIsHovering(!!target.closest('button, a, [data-cursor="pointer"]'))
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-50"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            {isHovering ? (
                <Image src={Hand} alt="Hand cursor" width={24} height={24} />
            ) : (
                <Image src={Mouse} alt="Mouse cursor" width={31} height={33} />
            )}
        </div>
    )
}
