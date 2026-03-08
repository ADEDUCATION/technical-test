'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface LoaderProps {
    fullscreen?: boolean
}

export default function Loader({ fullscreen = false }: LoaderProps) {
    if (fullscreen) {
        return (
            <div className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center">
                <DotLottieReact
                    src="/animations/Loading_Animation.lottie"
                    loop
                    autoplay
                    className="h-48 w-48"
                />
                <h1 className="spacing-2xl text-center text-2xl leading-8 font-bold">
                    À la recherche de la formation qui te correspond
                    <br></br>
                    <span className="text-text-light font-normal">
                        Et si tu profitais pour{' '}
                        <i className="text-primary">prendre un petit café ?</i>
                    </span>
                </h1>
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
