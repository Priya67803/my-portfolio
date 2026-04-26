import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
import ImageSequenceViewer from "@/components/ImageSequenceViewer";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const skills = [
    "Python", "Java", "Machine Learning", "Deep Learning",
    "TensorFlow", "Snowflake", "Activepieces", "Cybersecurity"
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tighter">Priya<span className="text-cyan-500">.dev</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Futuristic Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 z-10 w-full">
          <Badge variant="outline" className="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">
            Available for Internships
          </Badge>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 text-white">
            Hi, I'm <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Priyadarshini V
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            AIML-focused Computer Science student building intelligent systems and creating data-driven solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white border-0 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
              <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 bg-[#111] text-white">
              <a href="/resume.pdf" download>Download Resume <Download className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center">
            <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span>
            About Me
          </h2>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm max-w-3xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning.
              My expertise spans across programming, machine learning, deep learning, and data analysis. I have a keen
              interest in the research and development of intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently, I am pursuing my B.E. at <span className="text-cyan-400 font-medium">M. S. Ramaiah Institute of Technology</span> (2024-2027),
              where I am actively expanding my knowledge base and applying theoretical concepts to practical projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section (Anti-Gravity Effect) */}
      <section id="skills" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white flex items-center md:justify-end">
            Core Skills
            <span className="hidden md:block w-8 h-[2px] bg-blue-500 ml-4"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <AntiGravitySkill key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center">
            <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span>
            Experience
          </h2>
          <div className="relative border-l border-white/10 pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-2xl font-bold text-white">Internship Trainee</h3>
              <Badge variant="secondary" className="w-fit mt-2 md:mt-0 bg-white/10 text-cyan-300 hover:bg-white/20">Jan 2024 - Apr 2024</Badge>
            </div>
            <h4 className="text-lg text-cyan-500 mb-4 font-medium">Razz Security</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li>Performed Vulnerability Assessment and Penetration Testing (VAPT) on web applications.</li>
              <li>Identified and mitigated critical OWASP Top 10 vulnerabilities.</li>
              <li>Documented security flaws and provided actionable remediation strategies.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white flex items-center justify-center">
            <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 mr-4"></span>
            Featured Projects
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 ml-4"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="bg-[#111] border-white/10 text-white overflow-hidden group hover:border-cyan-500/50 transition-colors">
              <ImageSequenceViewer folderName="1" frameCount={40} />
              <CardHeader>
                <CardTitle className="text-xl">Tourist Recommendation System</CardTitle>
                <CardDescription className="text-slate-400">Context-Aware recommendations for travelers.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-white/20">Decision Tree</Badge>
                  <Badge variant="outline" className="border-white/20">Flask</Badge>
                  <Badge variant="outline" className="border-white/20">JavaScript</Badge>
                  <Badge variant="outline" className="border-white/20">OpenStreetMap API</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-[#111] border-white/10 text-white overflow-hidden group hover:border-blue-500/50 transition-colors">
              <ImageSequenceViewer folderName="2" frameCount={40} />
              <CardHeader>
                <CardTitle className="text-xl">NLP Language Detection</CardTitle>
                <CardDescription className="text-slate-400">Advanced language detection using natural language processing.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-white/20">FastText</Badge>
                  <Badge variant="outline" className="border-white/20">VADER</Badge>
                  <Badge variant="outline" className="border-white/20">TextStat</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-[#111] border-white/10 text-white overflow-hidden group hover:border-purple-500/50 transition-colors">
              <ImageSequenceViewer folderName="3" frameCount={40} />
              <CardHeader>
                <CardTitle className="text-xl">Smart Interview Agent</CardTitle>
                <CardDescription className="text-slate-400">Automated interview preparation agent using generative AI.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-white/20">GenAI</Badge>
                  <Badge variant="outline" className="border-white/20">Activepieces</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 mb-4 md:mb-0">© 2026 Priyadarshini V. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:priya6780@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
