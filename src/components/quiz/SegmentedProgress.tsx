interface SegmentedProgressProps {
    questions: { id: string }[]
    answers: Record<string, string>
    currentQuestion: number
    onNavigate: (index: number) => void
}

export default function SegmentedProgress({
    questions,
    answers,
    currentQuestion,
    onNavigate,
}: SegmentedProgressProps) {
    return (
        <div className="flex gap-1.5 px-1 pb-1">
            {questions.map((q, i) => {
                const isAnswered = !!answers[q.id]
                const isCurrent = i === currentQuestion
                const isReachable = i <= currentQuestion

                return (
                    <button
                        key={q.id}
                        onClick={() => isReachable && onNavigate(i)}
                        disabled={!isReachable}
                        className={[
                            'h-1.5 flex-1 rounded-full transition-all duration-300',
                            isCurrent
                                ? 'bg-primary scale-y-[1.6]'
                                : isAnswered
                                  ? 'bg-primary cursor-pointer hover:scale-y-[1.4]'
                                  : 'bg-primary]/10 cursor-default',
                        ].join(' ')}
                        aria-label={`Aller à la question ${i + 1}`}
                    />
                )
            })}
        </div>
    )
}
