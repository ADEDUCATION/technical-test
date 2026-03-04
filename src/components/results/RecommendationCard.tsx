'use client'

import type { FormationResult } from '@/types'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle,
} from '@ad-education/ui/dist/components/Card'
import { Badge } from '@ad-education/ui/dist/components/Badge'
import ArrowButton from '@/components/home/ArrowButton'
import RecommendationPosition from './RecommendationPosition'
import RecommendationImage from './RecommendationImage'

type BadgeVariant = 'top1' | 'top2' | 'top3'

const RECOMMENDATION_CONFIG: Record<
    BadgeVariant,
    { label: string; icon: string; color: string; imgSrc: string }
> = {
    top1: {
        label: 'Match parfait',
        icon: 'Trophy',
        color: 'var(--gradient-top1)',
        imgSrc: '/images/results/result-1.png',
    },
    top2: {
        label: 'Fort potentiel',
        icon: 'Compass',
        color: 'var(--gradient-top2)',
        imgSrc: '/images/results/result-2.png',
    },
    top3: {
        label: 'Bonne alternative',
        icon: 'Rocket',
        color: 'var(--gradient-top3)',
        imgSrc: '/images/results/result-3.png',
    },
}

interface RecommendationCardProps {
    result?: FormationResult
    variant?: BadgeVariant
    featured?: boolean
}

export default function RecommendationCard({
    result,
    variant = 'top1',
    featured = false,
}: RecommendationCardProps) {
    if (!result) return null

    const { formation, school } = result
    const { label, icon, color, imgSrc } = RECOMMENDATION_CONFIG[variant]

    const badgeClass = featured
        ? 'px-3 py-1 text-primary bg-(--primary-background)'
        : 'px-3 py-1 text-muted-foreground bg-(--secondary-background)'

    const infoBadges = [
        formation.level,
        formation.duration,
        formation.alternance ? 'Alternance' : null,
    ].filter((badge): badge is string => badge !== null)

    return (
        <div className="relative w-full max-w-sm">
            <div className="relative z-30 mb-4 flex justify-center">
                <RecommendationPosition color={color} icon={icon} label={label} />
            </div>

            <div className="relative z-20 mx-auto -mb-26 w-[90%]">
                <RecommendationImage imgSrc={imgSrc} />
            </div>

            <Card className="relative z-10 w-full rounded-lg border-none pt-32 shadow-sm">
                <CardHeader>
                    <div className="mb-6 flex flex-wrap gap-2">
                        {infoBadges.map((badge) => (
                            <Badge key={badge} variant="secondary" className={badgeClass}>
                                {badge}
                            </Badge>
                        ))}
                    </div>

                    <span className="text-xs leading-4 font-normal" style={{ color: school.color }}>
                        {school.fullName}
                    </span>
                    <CardTitle>{formation.name}</CardTitle>
                    <CardDescription>{formation.description}</CardDescription>
                </CardHeader>
                <CardContent className="mb-8">
                    <p className="text-muted-foreground mb-2 text-xs leading-4 font-normal">
                        Débouchés métier
                    </p>

                    {formation.careers.map((career) => (
                        <Badge
                            key={career}
                            variant="secondary"
                            className={`mr-1 mb-1 px-3 py-1 ${
                                featured
                                    ? 'text-primary bg-(--primary-background)'
                                    : 'text-muted-foreground bg-(--secondary-background)'
                            }`}
                        >
                            {career}
                        </Badge>
                    ))}
                </CardContent>

                <ArrowButton
                    label="Candidater"
                    className={`absolute -bottom-5 left-1/2 w-50 -translate-x-1/2 ${
                        featured ? '' : 'text-primary bg-(--primary-background)'
                    }`}
                />
            </Card>
        </div>
    )
}
