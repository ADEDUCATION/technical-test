import KeywordText from '@/components/KeywordText'

interface QuestionTextProps {
    question: string
    keyword?: string
}

const style = 'text-question mb-6 text-3xl'

export default function QuestionText({ question, keyword }: QuestionTextProps) {
    if (!keyword) return <h2 className={style}>{question}</h2>

    const [before, after] = question.split(keyword)
    return (
        <h2 className={style}>
            {before}
            <KeywordText>{keyword}</KeywordText>
            {after}
        </h2>
    )
}
