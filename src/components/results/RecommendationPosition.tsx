import Image from 'next/image'

interface RecommendationPositionProps {
    color: string
    icon: string
    label: string
    className?: string
}

export default function RecommendationPosition({
    color,
    icon,
    label,
    className,
}: RecommendationPositionProps) {
    return (
        <div
            className={`z-30 inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm ${className ?? ''}`}
            style={{ background: color }}
        >
            <Image src={`/images/results/${icon}.svg`} alt={icon} width={16} height={16} />
            <span>{label}</span>
        </div>
    )
}
