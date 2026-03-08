import type {
    TagScores,
    QuizQuestion,
    QuizAnswers,
    Formation,
    School,
    FormationResult,
    QuizResult,
} from '@/types'

const LEVEL_BONUS = 10
const ALTERNANCE_BONUS = 5
const LEVEL_THRESHOLD = 3
const ALTERNANCE_THRESHOLD = 4

const BACHELOR_LEVELS = new Set<string>(['Prépa', 'Bachelor', 'Bachelor 3'])
const MASTER_LEVELS = new Set<string>(['Mastère'])

function getTagScore(tagScores: TagScores, tag: string): number {
    return tagScores[tag] ?? 0
}

function calculateBaseScore(
    formation: Formation,
    tagScores: TagScores,
): { score: number; matchedTags: number } {
    let score = 0
    let matchedTags = 0

    for (const tag of formation.tags) {
        const tagScore = getTagScore(tagScores, tag)

        if (tagScore > 0) {
            score += tagScore
            matchedTags++
        }
    }

    return { score, matchedTags }
}

function wantsBachelor(tagScores: TagScores): boolean {
    return getTagScore(tagScores, '_level_bachelor') > LEVEL_THRESHOLD
}

function wantsMaster(tagScores: TagScores): boolean {
    return getTagScore(tagScores, '_level_mastere') > LEVEL_THRESHOLD
}

function addLevelBonus(formation: Formation, tagScores: TagScores): number {
    if (wantsBachelor(tagScores) && BACHELOR_LEVELS.has(formation.level)) return LEVEL_BONUS
    if (wantsMaster(tagScores) && MASTER_LEVELS.has(formation.level)) return LEVEL_BONUS
    return 0
}

function wantsAlternance(tagScores: TagScores): boolean {
    return getTagScore(tagScores, '_alternance_required') >= ALTERNANCE_THRESHOLD
}

function addAlternanceBonus(formation: Formation, tagScores: TagScores): number {
    if (wantsAlternance(tagScores) && formation.alternance) return ALTERNANCE_BONUS
    return 0
}

// If tie breaker, prefer formations with more matching tags
function sortScoreDescending(a: FormationResult, b: FormationResult): number {
    return b.score - a.score || b.matchedTags - a.matchedTags
}

// Step 1 & 2 — Init & build tag scores
function addTagScores(questions: QuizQuestion[], answers: QuizAnswers): TagScores {
    const tagScores: TagScores = {}

    for (const question of questions) {
        const answerId = answers[question.id]
        if (!answerId) continue

        const option = question.options.find((option) => option.id === answerId)
        if (!option) continue

        for (const [tag, score] of Object.entries(option.scores)) {
            tagScores[tag] = (tagScores[tag] ?? 0) + score
        }
    }

    return tagScores
}

// Steps 3 & 4 — Score per formation & apply bonuses
function calculateFormationScore(
    formation: Formation,
    school: School,
    tagScores: TagScores,
): FormationResult {
    const { score: baseScore, matchedTags } = calculateBaseScore(formation, tagScores)

    const levelBonus = addLevelBonus(formation, tagScores)
    const alternanceBonus = addAlternanceBonus(formation, tagScores)
    const score = baseScore + levelBonus + alternanceBonus

    return { formation, school, score, matchedTags }
}

export function areAllQuestionsAnswered(questions: QuizQuestion[], answers: QuizAnswers): boolean {
    return questions.every((question) => answers[question.id])
}

export function calculateQuizResult(
    questions: QuizQuestion[],
    answers: QuizAnswers,
    schools: School[],
): QuizResult {
    const tagScores = addTagScores(questions, answers)

    const results = schools
        .flatMap((school) =>
            school.formations.map((formation) =>
                calculateFormationScore(formation, school, tagScores),
            ),
        )
        // Step 5 — Sort formations by score and return top recommendations
        .sort(sortScoreDescending)

    return {
        topRecommendation: results[0] ?? null,
        alternatives: results.slice(1, 3), // Step 6 - Two alternatives to get top three
        tagScores,
    }
}
