'use client'

import { useReducer, useEffect, useCallback } from 'react'
import { quizReducer, initialQuizState } from './quizReducer'
import { areAllQuestionsAnswered } from '@/domain/scoring'
import type { QuizState } from './quizReducer'
import type { QuizQuestion } from '@/types'

const STORAGE_KEY = 'quiz-state'

function saveToStorage(state: QuizState): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
        console.warn('Failed to save quiz state to localStorage')
    }
}

function loadFromStorage(): QuizState | null {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? (JSON.parse(saved) as QuizState) : null
    } catch {
        return null
    }
}

function clearStorage(): void {
    try {
        localStorage.removeItem(STORAGE_KEY)
    } catch {
        console.warn('Failed to clear quiz state from localStorage')
    }
}

export function useQuiz(questions: QuizQuestion[]) {
    const [state, dispatch] = useReducer(quizReducer, initialQuizState)

    // Restore from localStorage on mount
    useEffect(() => {
        const saved = loadFromStorage()
        if (saved) {
            dispatch({ type: 'RESTORE_FROM_STORAGE', state: saved })
        }
    }, [])

    // Sync to localStorage on every state change
    useEffect(() => {
        saveToStorage(state)
    }, [state])

    const answerQuestion = useCallback((questionId: string, optionId: string) => {
        dispatch({ type: 'ANSWER_QUESTION', questionId, optionId })
    }, [])

    const goToNextQuestion = useCallback(() => {
        dispatch({ type: 'NEXT_QUESTION' })
    }, [])

    const completeQuiz = useCallback(() => {
        dispatch({ type: 'COMPLETE_QUIZ' })
    }, [])

    const resetQuiz = useCallback(() => {
        clearStorage()
        dispatch({ type: 'RESET_QUIZ' })
    }, [])

    const goToQuestion = useCallback(
        (index: number) => {
            if (index >= 0 && index < questions.length) {
                dispatch({ type: 'GO_TO_QUESTION', payload: index })
            }
        },
        [questions.length],
    )

    const currentQuestion = questions[state.currentQuestion] ?? null
    const isLastQuestion = state.currentQuestion === questions.length - 1
    const allAnswered = areAllQuestionsAnswered(questions, state.answers)

    return {
        // State
        state,
        currentQuestion,
        // Derived
        isLastQuestion,
        allAnswered,
        // Actions
        answerQuestion,
        goToNextQuestion,
        completeQuiz,
        resetQuiz,
        goToQuestion,
    }
}
