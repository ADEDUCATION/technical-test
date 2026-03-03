// Shared

export type TagScores = Record<string, number>

// School

export interface School {
    id: string
    name: string
    fullName: string
    domain: string
    website: string
    color: string
    formations: Formation[]
}

export interface SchoolsData {
    schools: School[]
    quizQuestions: QuizQuestion[]
}

// Formation

export type FormationLevel =
    | 'Prépa'
    | 'Bachelor'
    | 'Bachelor 3'
    | 'Mastère'
    | 'Formation professionnelle'

export interface Formation {
    id: string
    name: string
    level: FormationLevel
    duration: string
    alternance: boolean
    tags: string[]
    description: string
    careers: string[]
}

// Quiz

export interface QuizOption {
    id: string
    label: string
    scores: TagScores
}

export interface QuizQuestion {
    id: string
    question: string
    options: QuizOption[]
}

export type QuizAnswers = Record<string, string> // questionId -> optionId

export interface FormationResult {
    formation: Formation
    school: School
    score: number
    matchedTags: number
}

export interface QuizResult {
    topRecommendation: FormationResult | null
    alternatives: FormationResult[]
    tagScores: TagScores
}

// UI

export interface CardConfig {
    /** Horizontal offset from center in viewport width units */
    x: number
    /** Vertical offset from center in viewport height units */
    y: number
    /** Z-axis depth in pixels (negative = further back) */
    z: number
    /** X-axis rotation in degrees */
    rx: number
    /** Y-axis rotation in degrees */
    ry: number
    /** Z-axis rotation in degrees */
    rz: number
    /** Uniform scale factor */
    scale: number
    /** Animation delay in seconds */
    delay: number
}

export interface CardImage {
    src: string
    alt: string
}
