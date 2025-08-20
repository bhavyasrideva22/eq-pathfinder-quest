import { AssessmentResults } from "@/types/assessment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Brain, 
  TrendingUp, 
  Target,
  Download,
  RefreshCw,
  ExternalLink 
} from "lucide-react";

interface ResultsPageProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export function ResultsPage({ results, onRestart }: ResultsPageProps) {
  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'yes': return 'success';
      case 'maybe': return 'warning';
      case 'no': return 'destructive';
      default: return 'secondary';
    }
  };

  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'yes': return <CheckCircle className="w-5 h-5" />;
      case 'maybe': return <AlertTriangle className="w-5 h-5" />;
      case 'no': return <XCircle className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getRecommendationText = () => {
    switch (results.recommendation) {
      case 'yes': return 'Strongly Recommended';
      case 'maybe': return 'Conditionally Recommended';
      case 'no': return 'Alternative Paths Suggested';
      default: return 'Assessment Complete';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-eq-gradient bg-clip-text text-transparent">
            Your EQ Assessor Evaluation Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of your suitability for the EQ Assessor profession
          </p>
        </div>

        {/* Overall Result */}
        <Card className="shadow-hero border-0 bg-eq-card backdrop-blur-sm mb-8">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4">
              <Badge variant={getRecommendationColor() as any} className="px-4 py-2 text-lg">
                {getRecommendationIcon()}
                <span className="ml-2">{getRecommendationText()}</span>
              </Badge>
            </div>
            <CardTitle className="text-3xl mb-2">
              Overall Score: <span className={getScoreColor(results.overallScore)}>{results.overallScore}%</span>
            </CardTitle>
            <CardDescription className="text-base">
              Your comprehensive readiness for the EQ Assessor career path
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Scores */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Scores */}
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 w-5 h-5 text-primary" />
                  Core Assessment Scores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Psychometric Compatibility</span>
                    <span className={`font-bold ${getScoreColor(results.psychometricScore)}`}>
                      {results.psychometricScore}%
                    </span>
                  </div>
                  <Progress value={results.psychometricScore} className="h-3" />
                  <p className="text-sm text-muted-foreground mt-1">
                    Your natural personality traits and emotional compatibility for EQ assessment work
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Technical Readiness</span>
                    <span className={`font-bold ${getScoreColor(results.technicalScore)}`}>
                      {results.technicalScore}%
                    </span>
                  </div>
                  <Progress value={results.technicalScore} className="h-3" />
                  <p className="text-sm text-muted-foreground mt-1">
                    Your current knowledge of EQ concepts and assessment methodologies
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* WISCAR Framework */}
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 w-5 h-5 text-secondary" />
                  WISCAR Framework Analysis
                </CardTitle>
                <CardDescription>
                  Will, Interest, Skill, Cognitive readiness, Ability to learn, Real-world alignment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(results.wiscarScores).map(([key, score]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="capitalize font-medium">{key === 'realWorld' ? 'Real-World Fit' : key}</span>
                        <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader>
                <CardTitle>Recommended Career Paths</CardTitle>
                <CardDescription>
                  Based on your assessment results, ranked by compatibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.careerPaths.slice(0, 3).map((path, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{path.title}</h4>
                        <Badge variant="outline" className={getScoreColor(path.skillMatch)}>
                          {path.skillMatch}% match
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{path.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {path.requiredSkills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Insights & Actions */}
          <div className="space-y-6">
            {/* Personalized Insights */}
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader>
                <CardTitle>Personalized Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.insights.map((insight, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/30 text-sm">
                      {insight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.recommendation === 'yes' && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-success">Recommended Actions:</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Pursue EQ certification programs</li>
                      <li>• Practice with EQ assessment tools</li>
                      <li>• Gain supervised assessment experience</li>
                      <li>• Build coaching or consulting skills</li>
                    </ul>
                  </div>
                )}
                
                {results.recommendation === 'maybe' && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-warning">Development Areas:</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Strengthen foundational EQ knowledge</li>
                      <li>• Develop interpersonal sensitivity</li>
                      <li>• Practice data interpretation skills</li>
                      <li>• Consider related roles first</li>
                    </ul>
                  </div>
                )}

                {results.recommendation === 'no' && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-destructive">Alternative Paths:</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• HR support roles</li>
                      <li>• Basic data analysis</li>
                      <li>• Customer service training</li>
                      <li>• General psychology education</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 w-4 h-4" />
                  Download Results (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Explore Learning Resources
                </Button>
                <Button 
                  variant="outline" 
                  onClick={onRestart}
                  className="w-full justify-start"
                >
                  <RefreshCw className="mr-2 w-4 h-4" />
                  Retake Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}