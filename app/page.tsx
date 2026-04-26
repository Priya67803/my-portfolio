import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
import ImageSequenceViewer from "@/components/ImageSequenceViewer";

// ✅ FIXED ICON IMPORTS
import { Link, Mail, Download, ArrowRight } from "lucide-react";

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
                    <span className="text-xl font-bold text-white tracking-tighter">
                        Priya<span className="text-cyan-500">.dev</span>
                    </span>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 min-h-screen flex flex-col justify-center">
                <div className="max-w-6xl mx-auto px-6">
                    <Badge className="mb-6">Available for Internships</Badge>

                    <h1 className="text-5xl md:text-8xl font-extrabold text-white">
                        Priyadarshini V
                    </h1>

                    <p className="text-xl text-slate-400 mt-6">
                        AIML-focused Computer Science student building intelligent systems.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Button asChild>
                            <a href="#projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                        <Button variant="outline" asChild>
                            <a href="/resume.pdf">
                                Resume <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {skills.map((skill) => (
                        <AntiGravitySkill key={skill} name={skill} />
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-24">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

                    <Card>
                        <ImageSequenceViewer folderName="1" frameCount={40} />
                        <CardHeader>
                            <CardTitle>Tourist Recommendation</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card>
                        <ImageSequenceViewer folderName="2" frameCount={40} />
                        <CardHeader>
                            <CardTitle>NLP Detection</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card>
                        <ImageSequenceViewer folderName="3" frameCount={40} />
                        <CardHeader>
                            <CardTitle>Interview Agent</CardTitle>
                        </CardHeader>
                    </Card>

                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-black">
                <div className="flex justify-center gap-6">

                    {/* ✅ FIXED ICONS */}
                    <a href="#">
                        <Link className="w-6 h-6" />
                    </a>

                    <a href="#">
                        <Mail className="w-6 h-6" />
                    </a>

                </div>
            </footer>

        </main>
    );
}