import type { QuizOption as QuizOptionType } from '@/types'

interface QuizOptionProps {
    option: QuizOptionType
    index: number
    isSelected: boolean
    onSelect: (optionId: string) => void
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E']

export function AnswerOption({ option, index, isSelected, onSelect }: QuizOptionProps) {
    return (
        <button
            onClick={() => onSelect(option.id)}
            aria-pressed={isSelected}
            className={`flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all duration-200 ${
                isSelected
                    ? 'bg-secondary text-primary border-primary-border'
                    : 'bg-neutral-background hover:text-neutral-foreground hover:bg-neutral hover:border-neutral-border border-transparent'
            }`}
        >
            <div className="flex gap-1">
                <span className="font-semibold">{OPTION_LABELS[index]}.</span>
                {option.label}
            </div>
        </button>
    )
}
