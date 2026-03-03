import Link from 'next/link'
import { Button } from '@/components/ui/button'
import IconArrowRight from '@ad-education/ui/dist/icons/IconArrowRight'

type ArrowButtonProps = React.ComponentProps<typeof Button> & {
    href?: string
    label: string
}

export default function ArrowButton({
    href,
    label,
    className,
    onClick,
    ...props
}: ArrowButtonProps) {
    if (href) {
        return (
            <Button className={`cursor-pointer ${className}`} asChild {...props}>
                <Link href={href}>
                    {label}
                    <IconArrowRight />
                </Link>
            </Button>
        )
    }

    return (
        <Button className={`cursor-pointer ${className}`} onClick={onClick} {...props}>
            {label}
            <IconArrowRight />
        </Button>
    )
}
