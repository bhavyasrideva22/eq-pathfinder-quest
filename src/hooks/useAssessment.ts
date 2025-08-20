import { useState } from 'react';
import { AssessmentState, AssessmentResponse } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';
import { calculateResults } from '@/utils/scoring';

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>({
    currentSection: 'intro',
    currentQuestionIndex: 0,
    responses: [],
  });

  const currentQuestion = assessmentQuestions[state.currentQuestionIndex];
  const totalQuestions = assessmentQuestions.length;
  const canGoBack = state.currentQuestionIndex > 0;

  const startAssessment = () => {
    setState({
      currentSection: 'psychometric',
      currentQuestionIndex: 0,
      responses: [],
      startTime: new Date(),
    });
  };

  const answerQuestion = (value: number) => {
    if (!currentQuestion) return;

    const response: AssessmentResponse = {
      questionId: currentQuestion.id,
      value,
      section: currentQuestion.section,
    };

    setState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionId !== currentQuestion.id),
        response
      ]
    }));
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < totalQuestions - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      // Complete assessment
      const results = calculateResults(state.responses);
      setState(prev => ({
        ...prev,
        currentSection: 'results',
        results
      }));
    }
  };

  const previousQuestion = () => {
    if (canGoBack) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const restartAssessment = () => {
    setState({
      currentSection: 'intro',
      currentQuestionIndex: 0,
      responses: [],
    });
  };

  const getCurrentResponse = () => {
    return state.responses.find(r => r.questionId === currentQuestion?.id)?.value;
  };

  return {
    state,
    currentQuestion,
    totalQuestions,
    canGoBack,
    startAssessment,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    restartAssessment,
    getCurrentResponse,
  };
}