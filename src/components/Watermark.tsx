type WatermarkProps = React.ComponentPropsWithoutRef<'span'> & {
    label: string | number
    className?: string
}

/* Watermark text — purely decorative, hidden from screen readers */

export default function Watermark({ label, className, ...props }: WatermarkProps) {
    return (
        <span aria-hidden="true" className={`text-watermark ${className || ''}`} {...props}>
            {label}
        </span>
    )
}
