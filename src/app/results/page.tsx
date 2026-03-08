'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { QuizResult } from '@/types'
import RecommendationCard from '@/components/results/RecommendationCard'
import ArrowButton from '@/components/home/ArrowButton'
import Watermark from '@/components/Watermark'
import KeywordText from '@/components/KeywordText'
import Loader from '@/components/Loader'

const RESULT_STORAGE_KEY = 'quiz-result'

export default function ResultsPage() {
    const router = useRouter()
    const [result, setResult] = useState<QuizResult | null>(null)

    useEffect(() => {
        const saved = localStorage.getItem(RESULT_STORAGE_KEY)

        if (!saved) {
            router.push('/quiz')
            return
        }

        try {
            // TODO: add runtime validation (e.g. zod) in production
            const parsed = JSON.parse(saved) as QuizResult
            if (!parsed.topRecommendation) {
                router.push('/quiz')
                return
            }
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setResult(parsed)
        } catch {
            router.push('/quiz')
        }
    }, [router])

    function handleRetake() {
        localStorage.removeItem(RESULT_STORAGE_KEY)
        router.push('/quiz')
    }

    if (!result) return <Loader fullscreen />
    if (!result.topRecommendation) return null
    const { topRecommendation, alternatives } = result

    return (
        <>
            <Watermark label="Résultats" className="absolute text-center" />

            <div className="relative flex min-h-screen w-full flex-col items-center justify-around gap-8 px-4 py-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="spacing-2xl max-w-sm text-2xl leading-8 font-bold">
                        Voici les formations qui vous{' '}
                        <KeywordText className="text-[23px]">correspondent</KeywordText> le mieux!
                    </h1>

                    <p className="text-text-light w-137.5 px-10 text-lg text-[15px] leading-7 font-normal tracking-wide">
                        Ces recommendations sont basées sur vos réponses, vos priorités et les
                        caractéristiques réelles des formations.
                    </p>
                </div>

                <div className="flex items-end gap-12">
                    {alternatives[0] && (
                        <RecommendationCard result={alternatives[0]} variant="top2" />
                    )}
                    <RecommendationCard result={topRecommendation} variant="top1" featured />
                    {alternatives[1] && (
                        <RecommendationCard result={alternatives[1]} variant="top3" />
                    )}
                </div>

                <ArrowButton label="Refaire le quiz" onClick={handleRetake} variant="secondary" />
            </div>
        </>
    )
}
