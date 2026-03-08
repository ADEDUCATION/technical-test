'use client'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@ad-education/ui/dist/components/Tooltip'
import IconDownload from '@ad-education/ui/dist/icons/IconDownload'

type DownloadButtonProps = React.ComponentProps<typeof Button> & {
    label: string
    href: string
}

export default function DownloadButton({ label, href, className, ...props }: DownloadButtonProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a href={href} download>
                    <Button aria-label={label} className={`cursor-pointer ${className}`} {...props}>
                        <IconDownload />
                    </Button>{' '}
                </a>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
        </Tooltip>
    )
}
