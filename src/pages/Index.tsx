import { useAssessment } from "@/hooks/useAssessment";
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro";
import { QuestionCard } from "@/components/assessment/QuestionCard";
import { ResultsPage } from "@/components/assessment/ResultsPage";

const Index = () => {
  const {
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
  } = useAssessment();

  if (state.currentSection === 'intro') {
    return <AssessmentIntro onStart={startAssessment} />;
  }

  if (state.currentSection === 'results' && state.results) {
    return <ResultsPage results={state.results} onRestart={restartAssessment} />;
  }

  if (currentQuestion) {
    return (
      <QuestionCard
        question={currentQuestion}
        questionNumber={state.currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        onAnswer={answerQuestion}
        onNext={nextQuestion}
        onPrevious={previousQuestion}
        canGoBack={canGoBack}
        currentValue={getCurrentResponse()}
      />
    );
  }

  return <AssessmentIntro onStart={startAssessment} />;
};

export default Index;
