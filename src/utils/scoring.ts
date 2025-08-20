import { AssessmentResponse, AssessmentResults, CareerPath } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';

export function calculateResults(responses: AssessmentResponse[]): AssessmentResults {
  // Group responses by section
  const psychometricResponses = responses.filter(r => r.section === 'psychometric');
  const technicalResponses = responses.filter(r => r.section === 'technical');
  const wiscarResponses = responses.filter(r => r.section === 'wiscar');

  // Calculate section scores
  const psychometricScore = calculateSectionScore(psychometricResponses, 'psychometric');
  const technicalScore = calculateSectionScore(technicalResponses, 'technical');
  
  // Calculate WISCAR scores
  const wiscarScores = calculateWiscarScores(wiscarResponses);
  
  // Calculate overall score
  const overallScore = Math.round(
    (psychometricScore * 0.4 + technicalScore * 0.3 + getAverageWiscarScore(wiscarScores) * 0.3)
  );

  // Determine recommendation
  const recommendation = getRecommendation(overallScore, psychometricScore, technicalScore);
  
  // Generate insights
  const insights = generateInsights(psychometricScore, technicalScore, wiscarScores, overallScore);
  
  // Get career paths
  const careerPaths = getCareerPaths(overallScore, wiscarScores);

  return {
    psychometricScore,
    technicalScore,
    wiscarScores,
    overallScore,
    recommendation,
    insights,
    careerPaths
  };
}

function calculateSectionScore(responses: AssessmentResponse[], section: string): number {
  const sectionQuestions = assessmentQuestions.filter(q => q.section === section);
  let totalWeightedScore = 0;
  let totalWeight = 0;

  responses.forEach(response => {
    const question = sectionQuestions.find(q => q.id === response.questionId);
    if (question) {
      const weight = question.weight || 1;
      const normalizedScore = (response.value / 5) * 100; // Convert to 0-100 scale
      totalWeightedScore += normalizedScore * weight;
      totalWeight += weight;
    }
  });

  return totalWeight > 0 ? Math.round(totalWeightedScore / totalWeight) : 0;
}

function calculateWiscarScores(responses: AssessmentResponse[]) {
  const categories = ['will', 'interest', 'skill', 'cognitive', 'ability', 'realWorld'];
  const scores: any = {};

  categories.forEach(category => {
    const categoryResponses = responses.filter(response => {
      const question = assessmentQuestions.find(q => q.id === response.questionId);
      return question?.category === category;
    });

    if (categoryResponses.length > 0) {
      const avgScore = categoryResponses.reduce((sum, r) => sum + r.value, 0) / categoryResponses.length;
      scores[category] = Math.round((avgScore / 5) * 100);
    } else {
      scores[category] = 0;
    }
  });

  return scores;
}

function getAverageWiscarScore(wiscarScores: any): number {
  const values = Object.values(wiscarScores) as number[];
  return values.reduce((sum, score) => sum + score, 0) / values.length;
}

function getRecommendation(
  overallScore: number, 
  psychometricScore: number, 
  technicalScore: number
): 'yes' | 'maybe' | 'no' {
  if (overallScore >= 75 && psychometricScore >= 70 && technicalScore >= 60) {
    return 'yes';
  } else if (overallScore >= 55 && (psychometricScore >= 60 || technicalScore >= 50)) {
    return 'maybe';
  } else {
    return 'no';
  }
}

function generateInsights(
  psychometricScore: number,
  technicalScore: number,
  wiscarScores: any,
  overallScore: number
): string[] {
  const insights: string[] = [];

  if (psychometricScore >= 80) {
    insights.push("Your natural empathy and interpersonal awareness are exceptional strengths for EQ assessment work.");
  } else if (psychometricScore >= 60) {
    insights.push("You show good emotional awareness that can be further developed with practice.");
  } else {
    insights.push("Consider developing your emotional intelligence and interpersonal sensitivity before pursuing this career.");
  }

  if (technicalScore >= 80) {
    insights.push("You have strong technical knowledge of EQ concepts and assessment practices.");
  } else if (technicalScore >= 60) {
    insights.push("Your foundational knowledge is solid, but additional training in EQ theory would be beneficial.");
  } else {
    insights.push("You would benefit from formal training in emotional intelligence theory and assessment methods.");
  }

  if (wiscarScores.will >= 80) {
    insights.push("Your motivation and persistence suggest you'd thrive in this challenging but rewarding field.");
  }

  if (wiscarScores.interest >= 80) {
    insights.push("Your genuine interest in human behavior and psychology is a key asset for this career.");
  }

  if (overallScore >= 75) {
    insights.push("You show excellent potential for success as an EQ Assessor with the right training and experience.");
  } else if (overallScore >= 55) {
    insights.push("With focused development in key areas, you could build the skills needed for this career path.");
  }

  return insights;
}

function getCareerPaths(overallScore: number, wiscarScores: any): CareerPath[] {
  const paths: CareerPath[] = [
    {
      title: "EQ Assessor",
      description: "Administer and interpret emotional intelligence assessments for individuals and organizations",
      skillMatch: overallScore,
      requiredSkills: ["Emotional Intelligence", "Assessment Tools", "Data Interpretation", "Communication"]
    },
    {
      title: "Organizational Psychologist",
      description: "Apply psychological principles to improve workplace dynamics and performance",
      skillMatch: Math.round((overallScore + wiscarScores.cognitive) / 2),
      requiredSkills: ["Psychology", "Research Methods", "Organizational Behavior", "Consulting"]
    },
    {
      title: "Executive Coach",
      description: "Coach leaders on emotional intelligence and interpersonal effectiveness",
      skillMatch: Math.round((wiscarScores.interest + wiscarScores.realWorld) / 2),
      requiredSkills: ["Coaching", "Leadership Development", "Communication", "Business Acumen"]
    },
    {
      title: "HR Learning & Development Specialist",
      description: "Design and implement EQ-focused training programs for organizations",
      skillMatch: Math.round((overallScore + wiscarScores.skill) / 2),
      requiredSkills: ["Training Design", "HR Knowledge", "Program Management", "Assessment Tools"]
    }
  ];

  return paths.sort((a, b) => b.skillMatch - a.skillMatch);
}