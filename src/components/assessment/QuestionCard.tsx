import { AssessmentQuestion } from "@/types/assessment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { likertScale } from "@/data/questions";
import { useState } from "react";

interface QuestionCardProps {
  question: AssessmentQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  currentValue?: number;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  canGoBack,
  currentValue
}: QuestionCardProps) {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(currentValue);
  const progress = (questionNumber / totalQuestions) * 100;

  const handleValueChange = (value: string) => {
    const numValue = parseInt(value);
    setSelectedValue(numValue);
    onAnswer(numValue);
  };

  const getSectionTitle = () => {
    switch (question.section) {
      case 'psychometric':
        return 'Psychometric Assessment';
      case 'technical':
        return 'Technical & Aptitude';
      case 'wiscar':
        return 'WISCAR Framework';
      default:
        return 'Assessment';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-primary">{getSectionTitle()}</h2>
            <span className="text-sm text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-glow border-0 bg-eq-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {question.type === 'likert' ? (
              <RadioGroup
                value={selectedValue?.toString()}
                onValueChange={handleValueChange}
                className="space-y-4"
              >
                {likertScale.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <RadioGroupItem value={option.value.toString()} id={`option-${option.value}`} />
                    <Label
                      htmlFor={`option-${option.value}`}
                      className="flex-1 cursor-pointer text-sm font-medium"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <RadioGroup
                value={selectedValue?.toString()}
                onValueChange={handleValueChange}
                className="space-y-3"
              >
                {question.options?.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <RadioGroupItem value={(index + 1).toString()} id={`option-${index}`} className="mt-1" />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-sm leading-relaxed"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={!canGoBack}
              >
                Previous
              </Button>
              <Button
                onClick={onNext}
                disabled={selectedValue === undefined}
                variant="default"
              >
                {questionNumber === totalQuestions ? 'Complete Assessment' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}