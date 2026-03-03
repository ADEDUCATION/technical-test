'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface LoaderProps {
    fullscreen?: boolean
}

export default function Loader({ fullscreen = false }: LoaderProps) {
    if (fullscreen) {
        return (
            <div className="bg-background fixed inset-0 z-50 flex items-center justify-center">
                <DotLottieReact
                    src="/animations/Loading_Animation.lottie"
                    loop
                    autoplay
                    className="h-48 w-48"
                />
            </div>
        )
    }

    return (
        <DotLottieReact
            src="/animations/Loading_Animation.lottie"
            loop
            autoplay
            className="h-24 w-24"
        />
    )
}
