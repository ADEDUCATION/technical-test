'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { CardConfig, CardImage } from '@/types'

interface FloatingCardProps {
    config: CardConfig
    image: CardImage
    /** Used to vary float speed per card */
    index: number
}

/**
 * A single card positioned in 3D space with a continuous floating animation.
 *
 * Animation strategy:
 * - `fadeInCard` runs once on mount (controlled by delay)
 * - `floatCard` loops forever with a per-card duration offset
 *
 * We use inline `style` only for dynamic values that Tailwind can't express
 * (3D transforms with runtime values, custom animation delays).
 * Everything else uses Tailwind utilities.
 */
export function FloatingCard({ config, image, index }: FloatingCardProps) {
    const { x, y, z, rx, ry, rz, scale, delay } = config
    const [hovered, setHovered] = useState(false)

    // Depth-based opacity: cards further back (more negative z) fade out
    const depthRatio = 1 + z / 400 // 1.0 at z=0 → ~0.075 at z=-370
    const opacity = Math.max(0.1, depthRatio * 0.95)

    // Float duration varies slightly per card so they don't move in sync
    const floatDuration = `${4 + (index % 5) * 0.6}s`

    /**
     * The base 3D transform string.
     * translate(-50%, -50%) anchors the card to its center point.
     * translate(xvw, yvh) positions it relative to the scene center.
     */
    const baseTransform = [
        'translate(-50%, -50%)',
        `translate(${x}vw, ${y}vh)`,
        `translateZ(${z}px)`,
        `rotateX(${rx}deg)`,
        `rotateY(${ry}deg)`,
        `rotateZ(${rz}deg)`,
        `scale(${scale})`,
    ].join(' ')

    return (
        <div
            className="absolute top-1/2 left-1/2 h-32 w-44 overflow-hidden shadow-xl will-change-transform"
            style={{
                transform: baseTransform,
                opacity,
                // Two animations run in parallel:
                // 1. floatCard — infinite vertical bob
                // 2. fadeInCard — one-shot entrance
                animation: [
                    `floatCard ${floatDuration} ease-in-out ${delay}s infinite`,
                    `fadeInCard 0.7s ease-out ${delay * 0.3}s both`,
                ].join(', '),
                // CSS custom property consumed by the @keyframes in globals.css
                ['--base-transform' as string]: baseTransform,
                ['--target-opacity' as string]: String(opacity),
                // Re-enable pointer events so hover works
                pointerEvents: 'auto',
                cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="176px"
                className="object-cover"
                // Stagger loading priority — only the two closest cards are eager
                priority={index < 2}
            />

            {/* Hover overlay — dark semi-transparent layer + school logo */}
            <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: hovered ? 1 : 0 }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75" />

                {/* School logo on top */}
                <div className="relative z-10">
                    <Image
                        src="/images/home/example.png"
                        alt="School logo"
                        width={64}
                        height={64}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
