import Image from 'next/image'

interface RecommendationImageProps {
    imgSrc: string
    className?: string
}

export default function RecommendationImage({ imgSrc, className }: RecommendationImageProps) {
    return (
        <div className={`relative h-48 w-full overflow-hidden rounded-xl ${className ?? ''}`}>
            <Image
                src={imgSrc}
                alt="image de fond"
                fill
                priority
                className="object-cover object-center"
            />
        </div>
    )
}
