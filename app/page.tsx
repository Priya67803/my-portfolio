"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
import ImageSequenceViewer from "@/components/ImageSequenceViewer";
import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase, GraduationCap, Award, BookOpen, ShieldCheck, Code, Globe, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
    // Animation variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const coreSkills = [
        "Python", "Java", "Machine Learning", "Deep Learning",
        "TensorFlow", "Snowflake", "Activepieces", "Cybersecurity"
    ];

    return (
        <main className="min-h-screen bg-[#030303] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-white tracking-tighter">
                        Priya<span className="text-cyan-500">.ai</span>
                    </span>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                        <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
                    </div>
                </div>
            </nav>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-40 pb-20 min-h-screen flex flex-col justify-center">
                    <motion.div 
                        className="max-w-6xl mx-auto px-6 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-1.5 text-sm">
                                Available for Internships
                            </Badge>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                            Priyadarshini V<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                                AI/ML Engineer
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mt-6">
                            AIML-focused Computer Science student with strong expertise in programming, machine learning, deep learning, and data analysis.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-10">
                            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white border-0 shadow-[0_0_20px_rgba(8,145,178,0.3)] px-8 h-12 text-base rounded-full">
                                <a href="#projects">
                                    Explore Work <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="border-white/10 hover:bg-white/5 bg-[#111] text-white h-12 px-8 text-base rounded-full">
                                <a href="/resume.pdf">
                                    Download Resume <Download className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* About / Executive Summary */}
                <section id="about" className="py-24 border-t border-white/5">
                    <motion.div 
                        className="max-w-6xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-[2px] bg-cyan-500" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Executive Summary</h2>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                                I am an AIML-focused Computer Science student with strong expertise in programming, machine learning, deep learning, and data analysis. I have a keen interest in research and development of intelligent systems. Experienced in working on comprehensive AI/ML projects, I aim to contribute to innovative, scalable, and research-driven solutions that make a tangible impact.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="flex items-center justify-end gap-4 mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Arsenal</h2>
                            <div className="w-12 h-[2px] bg-blue-500" />
                        </motion.div>

                        {/* Top Interactive Skills */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                        >
                            {coreSkills.map((skill) => (
                                <motion.div key={skill} variants={fadeInUp}>
                                    <AntiGravitySkill name={skill} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Detailed Skills Breakdown */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                            >
                                <Card className="bg-[#0a0a0a] border-white/10 h-full">
                                    <CardHeader>
                                        <CardTitle className="text-cyan-400 flex items-center gap-2">
                                            <Code className="w-5 h-5" /> Technical Domain
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h4 className="text-white font-medium mb-2">AI/ML & Deep Learning</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Machine Learning, Deep Learning, CNN, RNN, LSTM, Transformers, Explainable AI</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Frameworks & Libraries</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">NumPy, Pandas, Matplotlib, TensorFlow, Keras, Scikit-learn</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Data & Modeling</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Data Preprocessing, Feature Engineering, Time-Series Analysis, Model Evaluation</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Data Engineering & Cloud</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Snowflake, Databricks, CI/CD Pipelines</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                            >
                                <Card className="bg-[#0a0a0a] border-white/10 h-full">
                                    <CardHeader>
                                        <CardTitle className="text-blue-400 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5" /> Systems & Core CS
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Programming & Core CS</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Java, Python, C, Data Structures, Algorithms, OS, Database Systems</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Cybersecurity & Networking</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Network Security, Secure Systems, Vulnerability Analysis, TCP/IP, Subnetting, Troubleshooting, Cisco Packet Tracer</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">AI Automation & Agents</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Activepieces (LLM-based workflow automation)</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Design & Creative Tools</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Adobe Photoshop, Blender</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Professional Skills */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mt-12"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Professional Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Analytical Thinking", "Problem Solving", "Time Management", "Logical Reasoning", "Research & Critical Thinking", "Technical Documentation", "Project Management", "Team Collaboration", "Adaptability to AI Trends"].map((skill) => (
                                    <Badge key={skill} variant="outline" className="border-white/10 bg-white/5 py-2 px-4 text-slate-300">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" className="py-24 border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="flex items-center gap-4 mb-16"
                        >
                            <div className="w-12 h-[2px] bg-cyan-500" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="relative border-l border-white/10 pl-8 ml-4 md:ml-6"
                        >
                            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                            
                            <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-center">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-cyan-500" /> Internship Trainee
                                </h3>
                                <Badge variant="secondary" className="w-fit mt-3 md:mt-0 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    Jan 2024 - Apr 2024
                                </Badge>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-6 font-medium">Razz Security, Bengaluru (560076)</h4>
                            
                            <ul className="space-y-4">
                                {[
                                    "Performed Vulnerability Assessment & Penetration Testing (VAPT) on web applications using tools such as Burp Suite, Nmap, and Metasploit.",
                                    "Analyzed and mitigated common web vulnerabilities based on OWASP Top 10 (SQL Injection, XSS, CSRF).",
                                    "Conducted basic incident response activities including log analysis and threat identification.",
                                    "Studied malware types and applied foundational detection techniques."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-500/70 mr-3 mt-0.5 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Publications */}
                <section className="py-24 border-t border-white/5 bg-[#0a0a0a]/50">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="flex items-center justify-center gap-4 mb-16"
                        >
                            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Publications & Conferences</h2>
                            <div className="w-12 h-[2px] bg-gradient-to-l from-cyan-500 to-blue-500" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid gap-6"
                        >
                            {[
                                { title: "Hybrid Intelligence Learning Architecture for Pulmonary Hypertension Diagnosis", conf: "ICEFEET 2026", status: "Under Review" },
                                { title: "Scalable Fault Detection in Aircraft Engines via Sequence Modeling and Attention-Based Autoencoding", conf: "ICDSNE 2026", status: "Under Review" },
                                { title: "Real-Time Detection of Online Grooming Behaviors Using YOLOv8 for Risk Assessment", conf: "ICDSNE 2026", status: "Under Review" }
                            ].map((pub, i) => (
                                <motion.div key={i} variants={fadeInUp}>
                                    <Card className="bg-[#111] border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                                        <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div className="flex items-start gap-4">
                                                <BookOpen className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{pub.title}</h3>
                                                    <p className="text-slate-400 font-medium">{pub.conf}</p>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="shrink-0 bg-blue-500/10 text-blue-400 border-blue-500/20 whitespace-nowrap">
                                                {pub.status}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-32 border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="flex items-center gap-4 mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Works</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {/* Project 1 */}
                            <motion.div variants={fadeInUp} className="h-full">
                                <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-500/30 transition-all duration-500 h-full flex flex-col">
                                    <ImageSequenceViewer folderName="1" frameCount={40} />
                                    <CardHeader className="flex-grow">
                                        <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">Context-Aware Tourist Recommendation System</CardTitle>
                                        <CardDescription className="text-slate-400 mt-2 line-clamp-4">
                                            Developed a real-time recommendation system using Decision Tree algorithm, integrating weather APIs, user preferences, and travel conditions.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {["Flask", "JavaScript", "Decision Tree", "OpenStreetMap API"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div variants={fadeInUp} className="h-full">
                                <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
                                    <ImageSequenceViewer folderName="2" frameCount={40} />
                                    <CardHeader className="flex-grow">
                                        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">NLP-based Language Detection & Bias Analysis</CardTitle>
                                        <CardDescription className="text-slate-400 mt-2 line-clamp-4">
                                            Built an NLP dashboard for real-time language detection, sentiment analysis, and readability scoring with interactive visualizations.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {["FastText", "VADER", "TextStat", "NLP"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div variants={fadeInUp} className="h-full">
                                <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden group hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-purple-500/30 transition-all duration-500 h-full flex flex-col">
                                    <ImageSequenceViewer folderName="3" frameCount={40} />
                                    <CardHeader className="flex-grow">
                                        <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">Smart Interview Preparation Agent</CardTitle>
                                        <CardDescription className="text-slate-400 mt-2 line-clamp-4">
                                            Implemented an end-to-end pipeline for dynamic question generation, answer analysis, and performance tracking using GenAI.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {["GenAI", "Activepieces", "LLM", "Workflow"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Education & Certifications */}
                <section id="education" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0a0a]">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                        
                        {/* Education */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
                                <GraduationCap className="w-8 h-8 text-cyan-500" />
                                <h2 className="text-3xl font-bold text-white">Education</h2>
                            </motion.div>

                            <div className="space-y-8">
                                <motion.div variants={fadeInUp} className="relative border-l border-white/10 pl-6 ml-3">
                                    <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6px] top-1.5" />
                                    <h3 className="text-xl font-bold text-white mb-1">Bachelor of Engineering (B.E.)</h3>
                                    <h4 className="text-cyan-400 font-medium mb-3">Computer Science and Engineering (AI & ML)</h4>
                                    <p className="text-slate-300">M. S. Ramaiah Institute of Technology, Bengaluru</p>
                                    <p className="text-slate-500 text-sm mt-1">Currently in 6th Semester (2024–2027)</p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="relative border-l border-white/10 pl-6 ml-3">
                                    <div className="absolute w-3 h-3 bg-slate-500 rounded-full -left-[6px] top-1.5" />
                                    <h3 className="text-xl font-bold text-white mb-1">Diploma</h3>
                                    <h4 className="text-slate-400 font-medium mb-3">Computer Science and Engineering</h4>
                                    <p className="text-slate-300">MEI Polytechnic, Bengaluru</p>
                                    <p className="text-slate-500 text-sm mt-1">2021–2024</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Certifications & Languages */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
                                <Award className="w-8 h-8 text-blue-500" />
                                <h2 className="text-3xl font-bold text-white">Certifications</h2>
                            </motion.div>

                            <motion.ul variants={staggerContainer} className="space-y-4 mb-16">
                                {[
                                    "Internship Certification — Razz Security",
                                    "AWS Academy Graduate — Machine Learning Foundations",
                                    "Generative AI Leader track — Google Cloud",
                                    "Machine Learning — Infosys Springboard",
                                    "Deep Learning — Google Cloud",
                                    "Ethical Hacking Bootcamp — Udemy"
                                ].map((cert, i) => (
                                    <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 bg-[#111] border border-white/5 p-4 rounded-xl">
                                        <Award className="w-5 h-5 text-blue-400 shrink-0" />
                                        <span className="text-slate-300">{cert}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                                <Globe className="w-6 h-6 text-cyan-500" />
                                <h2 className="text-2xl font-bold text-white">Languages</h2>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                                {["English", "Hindi", "Tamil", "Kannada", "Telugu"].map(lang => (
                                    <Badge key={lang} variant="secondary" className="bg-white/10 text-white hover:bg-white/20 px-4 py-2 text-sm">{lang}</Badge>
                                ))}
                            </motion.div>
                        </motion.div>

                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 font-medium">© 2026 Priyadarshini V. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="mailto:priya6780@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}