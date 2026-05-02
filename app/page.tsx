"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
// import ImageSequenceViewer from "@/components/ImageSequenceViewer";
import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase, Award, CheckCircle2, BrainCircuit, MessageSquare, Zap, Users, Send, Code2, Database, Cpu, Layers, ShieldCheck, Terminal, Network, Workflow, Menu, X } from "lucide-react";
import React from "react";

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLElement>(null);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, []);

    // Animation variants

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } }
    };

    const slideInLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2, duration: 1.2 } }
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2, duration: 1.2 } }
    };

    const slideUp: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 1.0 } }
    };

    const coreSkills = [
        { name: "Python", icon: Terminal },
        { name: "Deep Learning", icon: Layers },
        { name: "TensorFlow", icon: Zap },
        { name: "Snowflake", icon: Database },
        { name: "Cybersecurity", icon: ShieldCheck },
        { name: "NLP", icon: MessageSquare },
        { name: "Computer Vision", icon: Cpu },
        { name: "API Integration", icon: Network },
        { name: "Generative AI", icon: BrainCircuit }
    ];

    return (
        <div className="bg-[#0B0E14]">
            {/* Navigation - Pinned at top */}
            <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                        Priya<span className="text-cyan-500">.ai</span>
                    </span>
                    <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-300">
                        <a href="#about" className="hover:text-cyan-400 transition-colors relative group py-2">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#publications" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Publications
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Projects
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Skills
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-4 ml-6 pl-6 border-l border-white/10">
                        <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden border-white/20 text-white text-xs h-9 px-4 rounded-full flex items-center gap-2"
                    >
                        {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        {isMenuOpen ? "Close" : "Menu"}
                    </Button>
                </div>

                {/* Mobile Menu Overlay */}
                <motion.div 
                    initial={false}
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, y: 0, pointerEvents: "auto" },
                        closed: { opacity: 0, y: -20, pointerEvents: "none" }
                    }}
                    className="absolute top-full left-0 w-full mt-2 md:hidden"
                >
                    <div className="glass rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4">
                        {["home", "about", "publications", "projects", "skills", "education", "contact"].map((item) => (
                            <a 
                                key={item}
                                href={`#${item}`} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-slate-300 hover:text-cyan-400 font-bold py-3 px-4 border-b border-white/5 capitalize transition-colors flex items-center justify-between group"
                            >
                                {item}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </nav>

            <main ref={containerRef} className="h-screen text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative snap-container">
                {/* Data Grid Overlay */}
                <div className="fixed inset-0 grid-overlay z-0 opacity-20 pointer-events-none" />

            <div className="relative z-10">
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center overflow-hidden snap-section pt-20">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12 gap-8 md:gap-12 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={staggerContainer} className="col-span-12 md:col-span-7 text-center md:text-left order-2 md:order-1 mt-8 md:mt-0">
                            <motion.div variants={fadeInUp}>
                                <div className="inline-flex items-center gap-2 mb-6 md:mb-8 glass px-4 py-2 rounded-full border border-cyan-500/30 animate-breathe">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                    </span>
                                    <span className="text-xs md:text-sm font-semibold text-cyan-400 uppercase tracking-wider">Available for Internships</span>
                                </div>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                                Priyadarshini V<br />
                                <span className="text-gradient">AI/ML Engineer</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-400 max-w-xl leading-relaxed mt-6 font-medium">
                                Specializing in Deep Learning research and the development of scalable neural architectures for complex industrial challenges.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-10 md:mt-12">
                                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/20 px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                    <a href="#projects">
                                        View Projects <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="border-white/20 hover:bg-white/5 text-white h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                    <a href="/resume.pdf">
                                        Download CV <Download className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="col-span-12 md:col-span-5 relative flex justify-center items-center order-1 md:order-2">
                            <div className="relative w-[280px] sm:w-[350px] md:w-full max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,209,255,0.2)] glass group">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent z-10 pointer-events-none opacity-60" />
                                <video 
                                    src="/Profile.mp4" 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none z-20" />
                            </div>
                            {/* Decorative Glow */}
                            <div className="absolute -z-10 w-[110%] h-[110%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
                        </motion.div>
                    </motion.div>
                </section>



                {/* Executive Summary */}
                <section id="about" className="min-h-screen flex items-center justify-center overflow-hidden snap-section">
                    <motion.div 
                        className="max-w-4xl mx-auto px-6 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-200px" }}
                        variants={slideInLeft}
                    >
                        <motion.div className="inline-block mb-6">
                            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
                            Research-Driven & Scalable
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                            I am a Deep Learning Researcher and AI Engineer dedicated to architecting intelligent systems that solve real-world complexities. My work spans from medical diagnosis optimization to predictive engine maintenance, leveraging state-of-the-art sequence modeling and attention mechanisms.
                        </p>
                    </motion.div>
                </section>

                {/* Publications & Conferences */}
                <section id="publications" className="min-h-screen flex items-center py-24 bg-[#0B0E14]/50 overflow-hidden snap-section">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-200px" }}
                        variants={slideInRight}
                    >
                        <div className="flex items-center gap-4 mb-20">
                            <h2 className="text-4xl md:text-6xl font-bold text-white">Publications</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                        </div>

                        <div className="grid grid-cols-1 gap-12">
                            {/* Pub 1 */}
                            <motion.div variants={slideUp}>
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 flex flex-col lg:flex-row min-h-[400px]">
                                    <div className="w-full lg:w-[45%] shrink-0 border-r border-white/10 relative overflow-hidden">
                                        <video src="/4.mp4" autoPlay muted loop playsInline className="w-full h-64 lg:h-full object-cover" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                                        <Badge variant="outline" className="w-fit mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 text-sm px-3 py-1">
                                            ICEFEET 2026 — Under Review
                                        </Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                                            Hybrid Intelligence Learning Architecture for Pulmonary Hypertension Diagnosis
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            A novel architectural approach utilizing hybrid intelligence to accurately and efficiently diagnose pulmonary hypertension from complex medical datasets.
                                        </p>
                                        <Button variant="outline" className="w-fit border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 font-bold gap-2">
                                            Request Abstract <Mail className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Pub 2 */}
                            <motion.div variants={slideUp}>
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:border-blue-500/50 transition-all duration-500 flex flex-col lg:flex-row-reverse min-h-[400px]">
                                    <div className="w-full lg:w-[45%] shrink-0 border-l border-white/10 relative overflow-hidden">
                                        <video src="/5.mp4" autoPlay muted loop playsInline className="w-full h-64 lg:h-full object-cover" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                                        <Badge variant="outline" className="w-fit mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 text-sm px-3 py-1">
                                            ICAIHC 2026 — Under Review
                                        </Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                            Scalable Fault Detection in Aircraft Engines via Sequence Modeling and Attention-Based Autoencoding
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            Advanced deep learning framework analyzing time-series sensor data to predict remaining useful life and classify engine faults before they occur.
                                        </p>
                                        <Button variant="outline" className="w-fit border-blue-500/30 hover:bg-blue-500/10 text-blue-400 font-bold gap-2">
                                            Request Abstract <Mail className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Pub 3 */}
                            <motion.div variants={slideUp}>
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:border-purple-500/50 transition-all duration-500 flex flex-col lg:flex-row min-h-[400px]">
                                    <div className="w-full lg:w-[45%] shrink-0 border-r border-white/10 relative overflow-hidden">
                                        <video src="/6.mp4" autoPlay muted loop playsInline className="w-full h-64 lg:h-full object-cover" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                                        <Badge variant="outline" className="w-fit mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 text-sm px-3 py-1">
                                            ICDSNE 2026 — Under Review
                                        </Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">
                                            Real-Time Detection of Online Grooming Behaviors Using YOLOv8 for Risk Assessment
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            Leveraging state-of-the-art computer vision models like YOLOv8 to identify and assess risks associated with online grooming in real-time environments.
                                        </p>
                                        <Button variant="outline" className="w-fit border-purple-500/30 hover:bg-purple-500/10 text-purple-400 font-bold gap-2">
                                            Request Abstract <Mail className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="min-h-screen flex items-center py-24 overflow-hidden snap-section">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-200px" }}
                        variants={slideInLeft}
                    >
                        <div className="flex items-center gap-4 mb-20 flex-row-reverse">
                            <h2 className="text-4xl md:text-6xl font-bold text-white">Projects</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-l from-blue-500/50 to-transparent mr-4" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Project 1 */}
                            <motion.div variants={slideUp} className="h-full">
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[500px]">
                                    <div className="relative h-64 shrink-0">
                                        <video src="/1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover border-b border-white/10" />
                                    </div>
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">Tourist Recommendation System</CardTitle>
                                        <CardDescription className="text-slate-400 mt-4 text-base">
                                            Developed a real-time recommendation system achieving <span className="text-cyan-400 font-bold">94% accuracy</span> in user-preference matching using custom decision tree heuristics.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8 mt-auto flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {["Flask", "JavaScript", "Decision Tree", "OpenStreetMap API"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <Button variant="outline" size="sm" className="flex-1 border-white/10 hover:bg-white/5 text-white gap-2">
                                                <Github className="w-4 h-4" /> Code
                                            </Button>
                                            <Button size="sm" className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white gap-2">
                                                <ArrowRight className="w-4 h-4" /> Demo
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div variants={slideUp} className="h-full">
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[500px]">
                                    <div className="relative h-64 shrink-0">
                                        <video src="/2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover border-b border-white/10" />
                                    </div>
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">NLP Language & Bias Detection</CardTitle>
                                        <CardDescription className="text-slate-400 mt-4 text-base">
                                            Built a high-performance NLP dashboard that <span className="text-blue-400 font-bold">reduced latency by 20%</span> while detecting nuanced linguistic biases in real-time.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8 mt-auto flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {["FastText", "VADER", "TextStat", "NLP"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <Button variant="outline" size="sm" className="flex-1 border-white/10 hover:bg-white/5 text-white gap-2">
                                                <Github className="w-4 h-4" /> Code
                                            </Button>
                                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white gap-2">
                                                <ArrowRight className="w-4 h-4" /> Demo
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div variants={slideUp} className="h-full">
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:border-purple-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[500px]">
                                    <div className="relative h-64 shrink-0">
                                        <video src="/3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover border-b border-white/10" />
                                    </div>
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">Smart Interview Agent</CardTitle>
                                        <CardDescription className="text-slate-400 mt-4 text-base line-clamp-3">
                                            Implemented an end-to-end pipeline for dynamic question generation, answer analysis, and performance tracking using Generative AI.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8 mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {["GenAI", "Activepieces", "LLM", "Workflow"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Experience and Skills (Technical Arsenal) */}
                <section id="skills" className="min-h-screen flex items-center py-24 bg-[#0B0E14]/50 snap-section">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Video First on Mobile (order-1), Second on Desktop (lg:order-2) */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full max-w-[450px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10 order-1 lg:order-2"
                        >
                            <video src="/8.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                            <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="flex flex-col items-center lg:items-start order-2 lg:order-1"
                        >
                            <motion.div variants={slideInRight} className="mb-12 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
                                <p className="text-slate-400 text-lg max-w-lg">A deep dive into the frameworks, languages, and tools I use to build scalable AI systems.</p>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                                {coreSkills.map((skill) => (
                                    <motion.div key={skill.name} variants={fadeInUp}>
                                        <div className="glass p-5 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group">
                                            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                                <skill.icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm md:text-base font-bold text-slate-100">{skill.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Education & Certifications */}
                <section id="education" className="min-h-screen flex items-center py-24 snap-section">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Video First on Mobile (order-1) */}
                        <motion.div 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, margin: "-100px" }} 
                            variants={slideInLeft} 
                            className="relative w-full max-w-[450px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] border border-white/10 order-1"
                        >
                            <video src="/7.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                            <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />
                        </motion.div>

                        <motion.div 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, margin: "-100px" }} 
                            variants={staggerContainer} 
                            className="flex flex-col items-center lg:items-start order-2"
                        >
                            <motion.div variants={slideInRight} className="mb-12 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education and Credentials</h2>
                                <p className="text-slate-400 text-lg">Academic background and continuous learning certifications.</p>
                            </motion.div>

                            <motion.div variants={slideInRight} className="bg-[#12161F]/50 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Science (AI and ML)</h3>
                                <p className="text-cyan-400 font-medium mb-2">M. S. Ramaiah Institute of Technology</p>
                                <p className="text-slate-500 text-sm">6th Semester (2024–2027)</p>
                            </motion.div>

                            <motion.div variants={slideInRight} className="bg-[#12161F]/50 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Diploma in Computer Science</h3>
                                <p className="text-slate-400 font-medium mb-2">MEI Polytechnic, Bengaluru</p>
                                <p className="text-slate-500 text-sm">2021–2024</p>
                            </motion.div>

                            <motion.div variants={slideInRight}>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Award className="w-6 h-6 text-blue-500" /> Top Certifications
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Internship Certification — Razz Security",
                                        "AWS Academy — ML Foundations",
                                        "Generative AI Leader — Google Cloud",
                                        "Deep Learning — Google Cloud",
                                        "Ethical Hacking — Udemy",
                                        "Machine Learning — Infosys"
                                    ].map((cert, i) => (
                                        <li key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors">
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Professional (Soft) Skills */}
                <section className="min-h-screen flex items-center py-24 snap-section">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        {/* Video First on Mobile (order-1), Second on Desktop (lg:order-2) */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full max-w-[450px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)] border border-white/10 order-1 lg:order-2"
                        >
                            <video src="/11.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover max-h-[300px] md:max-h-full" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="flex flex-col items-center lg:items-start order-2 lg:order-1"
                        >
                            <motion.div variants={slideInRight} className="mb-12 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Skills</h2>
                                <p className="text-slate-400 text-lg">Beyond code, I bring strong interpersonal and strategic skills to every team I join.</p>
                            </motion.div>
                            <div className="space-y-6">
                                {[
                                    { title: "Analytical Problem Solving", desc: "Breaking down complex ML problems into actionable components.", icon: BrainCircuit },
                                    { title: "Effective Communication", desc: "Articulating technical constraints to non-technical stakeholders.", icon: MessageSquare },
                                    { title: "Agile Adaptability", desc: "Thriving in fast-paced, iterative development environments.", icon: Zap },
                                    { title: "Collaborative Leadership", desc: "Guiding peers and collaborating on best practices.", icon: Users }
                                ].map((skill, i) => {
                                    const Icon = skill.icon;
                                    return (
                                    <motion.div key={i} variants={slideInRight} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-purple-500 mb-2">{skill.title}</h3>
                                            <p className="text-slate-300">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                )})}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact and Networking */}
                <section id="contact" className="min-h-screen flex items-center py-24 snap-section">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div 
                            className="glass rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
                                    <p className="text-slate-400 mb-8 max-w-sm">Open for internship opportunities, research collaborations, or technical networking.</p>
                                    
                                    <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden border border-white/10 mb-8">
                                        <video src="/13.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex gap-4">
                                        <a href="mailto:priya6780@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                        <a href="https://linkedin.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block ml-1">Name</label>
                                            <input type="text" placeholder="Enter your name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block ml-1">Email</label>
                                            <input type="email" placeholder="Enter mail" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block ml-1">Message</label>
                                            <textarea placeholder="How can we collaborate?" rows={3} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                                        </div>
                                        <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold h-12 rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                                            Send Neural Message <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Integrated Footer */}
                    <footer className="mt-24 pt-20 pb-10 border-t border-white/5 bg-black/40 backdrop-blur-xl w-full">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                                {/* Brand Column */}
                                <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                                    <span className="text-2xl font-bold text-white tracking-tighter mb-4">
                                        Priya<span className="text-cyan-500">.ai</span>
                                    </span>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                                        Architecting the next generation of intelligent systems through research-driven AI and scalable deep learning architectures.
                                    </p>
                                </div>

                                {/* Quick Links */}
                                <div className="flex flex-col items-center md:items-start">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
                                    <ul className="space-y-4 text-slate-400 text-sm">
                                        <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                                        <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                                        <li><a href="#publications" className="hover:text-cyan-400 transition-colors">Publications</a></li>
                                        <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                                        <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                                    </ul>
                                </div>

                                {/* Socials/Connect */}
                                <div className="flex flex-col items-center md:items-start">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="mailto:priya6780@gmail.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-all">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Resume CTA */}
                                <div className="flex flex-col items-center md:items-start">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Credentials</h4>
                                    <Button variant="outline" asChild className="border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 font-bold px-6 h-12 rounded-xl transition-all">
                                        <a href="/resume.pdf">Download Full CV <Download className="ml-2 w-4 h-4" /></a>
                                    </Button>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
                                    Built with Next.js and Framer Motion
                                </p>
                                <p className="text-slate-500 text-xs font-medium">
                                    © 2026 Priyadarshini V. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        </main>
    </div>
);
}