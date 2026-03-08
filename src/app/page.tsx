import { FloatingCard } from '@/components/home/FloatingCard'
import Watermark from '@/components/Watermark'
import KeywordText from '@/components/KeywordText'
import ArrowButton from '@/components/home/ArrowButton'
import Image from 'next/image'
import { CARD_CONFIGS, CARD_IMAGES } from '@/data/constants'

export default function Home() {
    return (
        <section className="relative flex h-screen w-full flex-col overflow-hidden">
            <Watermark label="Prisme" className="text-center" />

            {/* 3D scene container — perspective set here so all children share the same vanishing point */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    perspective: '900px',
                    perspectiveOrigin: '50% 45%',
                }}
            >
                {CARD_CONFIGS.map((config, i) => {
                    const image = CARD_IMAGES[i % CARD_IMAGES.length]
                    if (!image) return null
                    return <FloatingCard key={i} config={config} image={image} index={i} />
                })}
            </div>

            {/* Top half — logo centré */}
            <div className="flex flex-1 items-center justify-center">
                <Image src="/images/logo.png" alt="logo" width={80} height={80} />
            </div>

            {/* Bottom half — contenu */}
            <div className="flex flex-1 flex-col items-center justify-end pb-22 text-center">
                <h1 className="spacing-2xl text-2xl leading-8 font-bold">
                    Ta formation <KeywordText className="text-[23px]">idéale</KeywordText>
                    {', '}en quelques clics.
                </h1>

                <p className="w-137.5 px-10 text-lg text-[15px] leading-7 font-normal tracking-wide text-(--color-text-light)">
                    Découvre la formation de tes rêves en répondant à sept questions sur toi, tes
                    aspirations, tes motivations,&nbsp;…
                </p>

                <ArrowButton
                    href="/quiz"
                    label="Trouver ma formation"
                    className="mt-8"
                ></ArrowButton>
            </div>
        </section>
    )
}
