export interface AssessmentQuestion {
  id: string;
  section: 'psychometric' | 'technical' | 'wiscar';
  type: 'likert' | 'multiple-choice' | 'scenario';
  question: string;
  options?: string[];
  category?: string;
  weight?: number;
}

export interface AssessmentResponse {
  questionId: string;
  value: number;
  section: string;
}

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
  insights: string[];
  careerPaths: CareerPath[];
}

export interface CareerPath {
  title: string;
  description: string;
  skillMatch: number;
  requiredSkills: string[];
}

export interface AssessmentState {
  currentSection: 'intro' | 'psychometric' | 'technical' | 'wiscar' | 'results';
  currentQuestionIndex: number;
  responses: AssessmentResponse[];
  results?: AssessmentResults;
  startTime?: Date;
}