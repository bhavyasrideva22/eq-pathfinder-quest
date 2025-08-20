import { AssessmentQuestion } from '@/types/assessment';

export const assessmentQuestions: AssessmentQuestion[] = [
  // Psychometric Section - Interest & Personality
  {
    id: 'p1',
    section: 'psychometric',
    type: 'likert',
    question: 'I find myself naturally curious about what motivates people and drives their behavior.',
    category: 'interest',
    weight: 1.2
  },
  {
    id: 'p2',
    section: 'psychometric',
    type: 'likert',
    question: 'I enjoy helping others understand their emotions and improve their interpersonal skills.',
    category: 'empathy',
    weight: 1.5
  },
  {
    id: 'p3',
    section: 'psychometric',
    type: 'likert',
    question: 'I am comfortable handling sensitive or confidential information about people.',
    category: 'ethics',
    weight: 1.3
  },
  {
    id: 'p4',
    section: 'psychometric',
    type: 'likert',
    question: 'I remain calm and objective when others share difficult emotions or personal challenges.',
    category: 'emotional_stability',
    weight: 1.4
  },
  {
    id: 'p5',
    section: 'psychometric',
    type: 'likert',
    question: 'I prefer working with people over working with data or technical systems.',
    category: 'preference',
    weight: 1.0
  },
  {
    id: 'p6',
    section: 'psychometric',
    type: 'scenario',
    question: 'During a team meeting, you notice a colleague seems withdrawn and upset. What would you most likely do?',
    options: [
      'Approach them privately after the meeting to check if they\'re okay',
      'Mention it to the team leader so they can address it',
      'Give them space and wait for them to bring it up if they want to',
      'Try to lighten the mood with humor or casual conversation'
    ],
    category: 'interpersonal',
    weight: 1.3
  },
  {
    id: 'p7',
    section: 'psychometric',
    type: 'likert',
    question: 'I can easily recognize when someone is masking their true feelings.',
    category: 'emotional_awareness',
    weight: 1.4
  },
  {
    id: 'p8',
    section: 'psychometric',
    type: 'likert',
    question: 'I find satisfaction in seeing others achieve personal growth and self-awareness.',
    category: 'motivation',
    weight: 1.2
  },

  // Technical & Aptitude Section
  {
    id: 't1',
    section: 'technical',
    type: 'multiple-choice',
    question: 'Which of the following best describes Emotional Intelligence (EQ)?',
    options: [
      'The ability to control your emotions at all times',
      'The ability to understand, use, and manage emotions effectively',
      'Being naturally empathetic and caring toward others',
      'Having good social skills and being popular'
    ],
    category: 'eq_knowledge',
    weight: 1.5
  },
  {
    id: 't2',
    section: 'technical',
    type: 'multiple-choice',
    question: 'According to Daniel Goleman\'s model, which is NOT one of the main EQ competencies?',
    options: [
      'Self-awareness',
      'Social skills',
      'IQ correlation',
      'Self-regulation'
    ],
    category: 'eq_theory',
    weight: 1.3
  },
  {
    id: 't3',
    section: 'technical',
    type: 'scenario',
    question: 'You\'re interpreting EQ assessment results that show high self-awareness but low social skills. What would be your primary recommendation?',
    options: [
      'Focus on developing interpersonal communication and relationship management',
      'Work on emotional self-control and stress management',
      'Increase empathy and understanding of others\' emotions',
      'Build confidence and assertiveness skills'
    ],
    category: 'interpretation',
    weight: 1.4
  },
  {
    id: 't4',
    section: 'technical',
    type: 'likert',
    question: 'I understand basic statistical concepts like averages, percentiles, and standard deviations.',
    category: 'statistics',
    weight: 1.1
  },
  {
    id: 't5',
    section: 'technical',
    type: 'multiple-choice',
    question: 'What is the most important ethical consideration when conducting EQ assessments?',
    options: [
      'Ensuring the assessment is completed quickly',
      'Maintaining confidentiality and informed consent',
      'Focusing on positive results to build confidence',
      'Using the most advanced assessment tools available'
    ],
    category: 'ethics',
    weight: 1.5
  },
  {
    id: 't6',
    section: 'technical',
    type: 'scenario',
    question: 'A client receives low EQ scores and becomes defensive. How do you handle this situation?',
    options: [
      'Explain that the scores are just numbers and not that important',
      'Focus on growth opportunities and frame results positively',
      'Suggest they retake the assessment when they\'re feeling better',
      'Recommend they work with a different type of coach'
    ],
    category: 'client_management',
    weight: 1.4
  },

  // WISCAR Framework Questions
  {
    id: 'w1',
    section: 'wiscar',
    type: 'likert',
    question: 'I am motivated to learn new skills even when the learning process is challenging.',
    category: 'will',
    weight: 1.3
  },
  {
    id: 'w2',
    section: 'wiscar',
    type: 'likert',
    question: 'I actively seek out opportunities to understand human behavior and psychology.',
    category: 'interest',
    weight: 1.2
  },
  {
    id: 'w3',
    section: 'wiscar',
    type: 'likert',
    question: 'I have experience in counseling, coaching, HR, or related people-focused roles.',
    category: 'skill',
    weight: 1.1
  },
  {
    id: 'w4',
    section: 'wiscar',
    type: 'likert',
    question: 'I can analyze complex information and identify patterns or trends.',
    category: 'cognitive',
    weight: 1.2
  },
  {
    id: 'w5',
    section: 'wiscar',
    type: 'likert',
    question: 'I am open to feedback and actively use it to improve my performance.',
    category: 'ability',
    weight: 1.3
  },
  {
    id: 'w6',
    section: 'wiscar',
    type: 'scenario',
    question: 'You\'re asked to assess a senior executive who is skeptical about EQ. How do you approach this?',
    options: [
      'Present research and business case for EQ in leadership',
      'Start with a brief, less formal conversation about their goals',
      'Use data-driven examples from similar executive assessments',
      'Focus on ROI and performance metrics related to EQ'
    ],
    category: 'realWorld',
    weight: 1.4
  },
  {
    id: 'w7',
    section: 'wiscar',
    type: 'likert',
    question: 'I persist through setbacks and view challenges as learning opportunities.',
    category: 'will',
    weight: 1.2
  },
  {
    id: 'w8',
    section: 'wiscar',
    type: 'likert',
    question: 'I genuinely enjoy learning about emotional intelligence research and applications.',
    category: 'interest',
    weight: 1.3
  }
];

export const likertScale = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' }
];