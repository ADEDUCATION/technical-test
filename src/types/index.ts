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

export interface QuizState {
    currentQuestion: number
    answers: QuizAnswers
    tagScores: TagScores // tag -> accumulated score
    isCompleted: boolean
}

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
