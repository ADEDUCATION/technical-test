import type { QuizAnswers } from '@/types'

export interface QuizState {
    currentQuestion: number
    answers: QuizAnswers
    isCompleted: boolean
}

export type QuizAction =
    | { type: 'ANSWER_QUESTION'; questionId: string; optionId: string }
    | { type: 'NEXT_QUESTION' }
    | { type: 'PREV_QUESTION' }
    | { type: 'GO_TO_QUESTION'; payload: number }
    | { type: 'COMPLETE_QUIZ' }
    | { type: 'RESET_QUIZ' }
    | { type: 'RESTORE_FROM_STORAGE'; state: QuizState }

export const initialQuizState: QuizState = {
    currentQuestion: 0,
    answers: {},
    isCompleted: false,
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.questionId]: action.optionId,
                },
            }

        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
            }

        case 'PREV_QUESTION':
            return {
                ...state,
                currentQuestion: Math.max(0, state.currentQuestion - 1),
            }

        case 'GO_TO_QUESTION':
            return { ...state, currentQuestion: action.payload }

        case 'COMPLETE_QUIZ':
            return {
                ...state,
                isCompleted: true,
            }

        case 'RESET_QUIZ':
            return initialQuizState

        case 'RESTORE_FROM_STORAGE':
            return action.state

        default:
            return state
    }
}
