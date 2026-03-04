import type { CardConfig, CardImage } from '@/types'

/**
 * Defines the 3D position, rotation, and animation timing for each floating card.
 * Cards are arranged symmetrically left/right, receding into the center.
 * z values are negative to push cards further into the scene.
 */
export const CARD_CONFIGS: CardConfig[] = [
    // — Left side (near → far) —
    { x: -42, y: -18, z: 0, rx: -5, ry: 12, rz: -8, scale: 1.1, delay: 0.0 },
    { x: -30, y: 10, z: -60, rx: 3, ry: 10, rz: -5, scale: 0.9, delay: 0.4 },
    { x: -20, y: -8, z: -130, rx: -2, ry: 8, rz: -3, scale: 0.75, delay: 0.8 },
    { x: -13, y: 5, z: -210, rx: 2, ry: 6, rz: -2, scale: 0.6, delay: 1.2 },
    { x: -8, y: -3, z: -290, rx: 0, ry: 4, rz: -1, scale: 0.45, delay: 1.6 },
    { x: -4, y: 2, z: -370, rx: 0, ry: 2, rz: 0, scale: 0.3, delay: 2.0 },
    // — Right side (near → far) —
    { x: 42, y: -18, z: 0, rx: -5, ry: -12, rz: 8, scale: 1.1, delay: 0.2 },
    { x: 30, y: 10, z: -60, rx: 3, ry: -10, rz: 5, scale: 0.9, delay: 0.6 },
    { x: 20, y: -8, z: -130, rx: -2, ry: -8, rz: 3, scale: 0.75, delay: 1.0 },
    { x: 13, y: 5, z: -210, rx: 2, ry: -6, rz: 2, scale: 0.6, delay: 1.4 },
    { x: 8, y: -3, z: -290, rx: 0, ry: -4, rz: 1, scale: 0.45, delay: 1.8 },
    { x: 4, y: 2, z: -370, rx: 0, ry: -2, rz: 0, scale: 0.3, delay: 2.2 },
]

/**
 * Replace these with your own images.
 * Using Next.js <Image> requires either remote domains in next.config.ts
 * or local images imported from /public.
 */
export const CARD_IMAGES: CardImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        alt: 'Chaussure Nike rouge',
    },
    {
        src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
        alt: 'Clavier piano',
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        alt: 'Paysage montagnes',
    },
    {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        alt: 'Voiture de sport',
    },
    {
        src: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=400',
        alt: 'Architecture',
    },
    {
        src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400',
        alt: 'Photographie',
    },
    {
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        alt: 'Scène de concert',
    },
    {
        src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
        alt: 'Caméra Polaroid',
    },
    {
        src: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400',
        alt: 'Tablette',
    },
    {
        src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
        alt: 'Casque',
    },
    {
        src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400',
        alt: 'Architecture',
    },
    {
        src: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400',
        alt: 'Portefeuille',
    },
]
