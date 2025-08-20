import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, TrendingUp, CheckCircle, Clock, Target } from "lucide-react";
import heroImage from "@/assets/eq-hero-bg.jpg";

interface AssessmentIntroProps {
  onStart: () => void;
}

export function AssessmentIntro({ onStart }: AssessmentIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-eq-hero opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
              <Brain className="w-4 h-4 mr-2" />
              Pathfinder Series Assessment
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-eq-gradient bg-clip-text text-transparent">
              Should I Become an EQ Assessor?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover your potential as an Emotional Intelligence professional through our comprehensive career assessment
            </p>
            <Button 
              onClick={onStart}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Start Assessment
              <Target className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* About the Role */}
        <Card className="shadow-soft border-0 bg-eq-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="mr-3 w-6 h-6 text-primary" />
              About the EQ Assessor Role
            </CardTitle>
            <CardDescription className="text-lg">
              Emotional Intelligence Assessors help individuals and organizations unlock their interpersonal potential
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              As an EQ Assessor, you'll measure, interpret, and provide insights into emotional intelligence, 
              helping people enhance their interpersonal skills, leadership capabilities, and overall performance. 
              This role combines psychology, data analysis, and human development to create meaningful impact.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Typical Career Paths:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Organizational Psychologist</li>
                  <li>• HR Learning & Development Specialist</li>
                  <li>• Executive Coach</li>
                  <li>• Business Psychologist</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Key Success Traits:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• High emotional awareness and empathy</li>
                  <li>• Strong analytical and interpretive skills</li>
                  <li>• Excellent communication abilities</li>
                  <li>• Ethical handling of sensitive data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-soft border-0 bg-card">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Psychometric Analysis</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Evaluates your personality compatibility, empathy levels, and motivation for EQ assessment work.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-card">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">Technical Aptitude</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Tests your knowledge of EQ concepts, assessment tools, and data interpretation skills.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-card">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">WISCAR Framework</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Analyzes Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Details */}
        <Card className="shadow-soft border-0 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Clock className="mr-3 w-5 h-5 text-primary" />
              What to Expect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Assessment Structure:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 20+ carefully designed questions</li>
                  <li>• Multiple question types (scenarios, self-assessment)</li>
                  <li>• Approximately 15-20 minutes to complete</li>
                  <li>• Immediate detailed results and recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Your Results Will Include:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Detailed compatibility analysis</li>
                  <li>• Personalized career recommendations</li>
                  <li>• Learning pathway suggestions</li>
                  <li>• Alternative career options if not a fit</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}