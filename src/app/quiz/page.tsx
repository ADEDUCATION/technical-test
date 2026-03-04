'use client'

import { useRouter } from 'next/navigation'
import { useQuiz } from '@/hooks/useQuiz'
import { calculateQuizResult } from '@/domain/scoring'
import schoolsData from '@/data/schools-data.json'
import type { SchoolsData } from '@/types'
import { useCallback } from 'react'
import Image from 'next/image'
import { AnswerOption } from '@/components/quiz/AnswerOption'
import ArrowButton from '@/components/home/ArrowButton'
import QuestionText from '@/components/quiz/QuestionText'
import Watermark from '@/components/Watermark'
import SegmentedProgress from '@/components/quiz/SegmentedProgress'

const { schools, quizQuestions } = schoolsData as SchoolsData

const RESULT_STORAGE_KEY = 'quiz-result'

export default function QuizPage() {
    const router = useRouter()
    const {
        state,
        currentQuestion,
        isLastQuestion,
        allAnswered,
        answerQuestion,
        goToNextQuestion,
        resetQuiz,
        goToQuestion,
    } = useQuiz(quizQuestions)

    const handleValidate = useCallback(() => {
        if (isLastQuestion) {
            const result = calculateQuizResult(quizQuestions, state.answers, schools)
            localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result))
            resetQuiz()
            router.push('/results')
        } else {
            goToNextQuestion()
        }
    }, [isLastQuestion, state.answers, resetQuiz, goToNextQuestion, router, quizQuestions, schools])

    if (!currentQuestion) return null

    const selectedOptionId = state.answers[currentQuestion.id] ?? null
    const hasAnsweredCurrent = selectedOptionId !== null
    const currentQuestionNumber = state.currentQuestion + 1

    return (
        <div className="flex min-h-screen gap-10">
            {/* Left — illustration */}
            <div
                className="my-3 ml-3 flex w-1/2 items-center justify-center rounded-4xl p-20"
                style={{ background: 'var(--gradient-primary)' }}
            >
                <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                        src="/images/quiz-illustration.png"
                        alt="Illustration quiz"
                        width={429}
                        height={492}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Right — question */}
            <div className="my-3 mr-10 ml-3 flex w-1/2 flex-col">
                <Watermark label={currentQuestionNumber} />

                <div className="my-8 mt-auto mb-22 px-28">
                    <QuestionText
                        question={currentQuestion.question}
                        keyword={currentQuestion.keyword}
                    />

                    <div className="my-10 flex flex-col gap-3">
                        {currentQuestion.options.map((option, index) => (
                            <AnswerOption
                                key={option.id}
                                option={option}
                                index={index}
                                isSelected={selectedOptionId === option.id}
                                onSelect={(optionId) =>
                                    answerQuestion(currentQuestion.id, optionId)
                                }
                            />
                        ))}
                    </div>

                    <ArrowButton
                        variant={hasAnsweredCurrent ? 'default' : 'secondary'}
                        onClick={handleValidate}
                        disabled={!hasAnsweredCurrent}
                        size="lg"
                        label="Valider"
                        className="w-full"
                    ></ArrowButton>
                </div>

                <SegmentedProgress
                    questions={quizQuestions}
                    answers={state.answers}
                    currentQuestion={state.currentQuestion}
                    onNavigate={goToQuestion}
                />
            </div>
        </div>
    )
}
