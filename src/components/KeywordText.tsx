interface KeywordTextProps {
    children: React.ReactNode
    className?: string
}

export default function KeywordText({ children, className }: KeywordTextProps) {
    return <span className={`text-keyword ${className ?? ''}`}>{children}</span>
}
