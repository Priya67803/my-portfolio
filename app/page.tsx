"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
// import ImageSequenceViewer from "@/components/ImageSequenceViewer";
import { Github, Linkedin, Mail, Download, ArrowRight, ExternalLink, FileText, Award, BrainCircuit, MessageSquare, Zap, Users, Send, Database, Cpu, Layers, ShieldCheck, Terminal, Network, Menu, X } from "lucide-react";
import React from "react";

function useTypingEffect(words: string[], typingSpeed = 90, deletingSpeed = 55, pauseMs = 1800) {
    const [displayed, setDisplayed] = React.useState("");
    const [wordIdx, setWordIdx] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const current = words[wordIdx];
        let timeout: ReturnType<typeof setTimeout>;
        if (!isDeleting && displayed === current) {
            timeout = setTimeout(() => setIsDeleting(true), pauseMs);
        } else if (isDeleting && displayed === "") {
            setIsDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
            }, isDeleting ? deletingSpeed : typingSpeed);
        }
        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

    return displayed;
}

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLElement>(null);
    const typedTitle = useTypingEffect(["AI/ML Engineer", "Deep Learning Researcher", "Neural Architect", "AI Systems Builder"]);

    const [expandedPub, setExpandedPub] = React.useState<number | null>(null);

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
                    <a href="#home" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Priya Logo" className="h-10 md:h-12 w-auto object-contain" />
                    </a>
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
                        <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
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

            <main ref={containerRef} className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
                {/* Data Grid Overlay */}
                <div className="fixed inset-0 grid-overlay z-0 opacity-20 pointer-events-none" />

            <div className="relative z-10">
                {/* Hero Section */}
                <section id="home" className="min-h-[90vh] flex items-center overflow-hidden pt-24 pb-12">
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

                            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                                Priyadarshini V<br />
                                <span className="text-gradient">{typedTitle}<span className="animate-pulse text-cyan-400">|</span></span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mt-4 font-medium">
                                Specializing in deep learning, machine learning, and the development of scalable AI solutions for solving complex industrial and real-world challenges.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-8 md:mt-10">
                                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/20 px-6 md:px-8 h-12 md:h-14 text-sm md:text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                    <a href="#projects">
                                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="border-white/20 hover:bg-white/5 text-white h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                        Download CV <Download className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                    <a href="#contact">
                                        Contact Me <Mail className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="col-span-12 md:col-span-5 relative flex justify-center items-center order-1 md:order-2">
                            <div className="relative w-[240px] sm:w-[300px] md:w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,209,255,0.2)] glass group">
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
                <section id="about" className="min-h-[50vh] flex items-center justify-center overflow-hidden py-24">
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
                        <motion.div variants={fadeInUp} className="mb-4">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 glass px-4 py-2 rounded-full border border-cyan-500/20">
                                About Me
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
                            Research-Driven AI Solutions
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                            I am an aspiring Artificial Intelligence and Machine Learning engineer passionate about developing intelligent systems that solve real-world problems. My expertise spans machine learning, deep learning, predictive analytics, and full-stack development. I transform data into actionable insights and build scalable solutions that deliver measurable impact.
                        </p>
                    </motion.div>
                </section>

                {/* Publications & Conferences */}
                <section id="publications" className="min-h-[80vh] flex items-center py-20 bg-[#0B0E14]/50 overflow-hidden">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-200px" }}
                        variants={slideInRight}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Publications</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                        </div>
                        <p className="text-muted-foreground text-lg mb-14 max-w-3xl">
                            My research focuses on applying artificial intelligence to solve complex engineering, healthcare, and predictive maintenance challenges.
                        </p>

                        <div className="grid grid-cols-1 gap-12">
                            {[
                                {
                                    id: 1,
                                    title: "Hybrid Intelligence Learning Architecture for Pulmonary Hypertension Diagnosis",
                                    badge: "ICEFEET 2026 — Under Review",
                                    desc: "A novel architectural approach utilizing hybrid intelligence to accurately and efficiently diagnose pulmonary hypertension from complex medical datasets.",
                                    abstract: "Pulmonary Hypertension (PH) is a progressive and severe heart disease that needs to be diagnosed early for successful treatment. However, the current gold standard diagnostic technique, Right Heart Catheterization, is invasive, expensive, and painful for patients. Most of the current computer-aided diagnosis systems based on CT images are single-model deep learning solutions, inadequately validated, and may be restricted to binary classification tasks. This work aims to develop a non-invasive, multi-model deep learning solution for the diagnosis and classification of various PH types from CT images. It combines the strengths of Multi-Class Classification, advanced deep learning models like DenseNet. It was trained using 5-fold cross validation. Grad-CAM++ is used to improve interpretability by pointing out key CT image regions, which is helpful for sound decision-making.",
                                    video: "/4.mp4",
                                    color: "cyan",
                                    reversed: false
                                },
                                {
                                    id: 2,
                                    title: "Scalable Fault Detection in Aircraft Engines via Sequence Modeling and Attention-Based Autoencoding",
                                    badge: "ICAIHC 2026 — Under Review",
                                    desc: "Advanced deep learning framework analyzing time-series sensor data to predict remaining useful life and classify engine faults before they occur.",
                                    abstract: "Anomaly detection in turbofan engine predictive maintenance is key to achieving safe and efficient operations in flight activities. Although contemporary approaches to predictive maintenance employ single-model structures to perform anomaly detection and estimate Remaining Useful Life (RUL), their effectiveness remains constrained by noisy sensor readings and complex degradation dynamics. In this paper, we propose a new architecture of the Learned Fusion Autoencoder Ensemble and Interpretability Transformer for turbofan engine anomaly detection and RUL prediction. We start by obtaining a reliable index of engine condition based on Principal Component Analysis (PCA) applied to smoothed sensor readings. For anomaly detection purposes, four reconstruction errors obtained from diverse autoencoders (LSTM, Dense, CNN, Transformer) are fused via a meta classifier. The Transformer regressor is applied alongside and provides an interpretable model due to explicitly obtained self-attention weights, thus facilitating an understanding of engine condition deterioration. Our methodology yields the best known results in F1-score terms and competitive results in RMSE for the benchmark NASA CMAPSS FD001 dataset.",
                                    video: "/5.mp4",
                                    color: "blue",
                                    reversed: true
                                },
                                {
                                    id: 3,
                                    title: "Real-Time Detection of Online Grooming Behaviors Using YOLOv8 for Risk Assessment",
                                    badge: "ICDSNE 2026 — Under Review",
                                    desc: "Leveraging state-of-the-art computer vision models like YOLOv8 to identify and assess risks associated with online grooming in real-time environments.",
                                    abstract: "Kids are spending a lot of time on communication platforms like social media and instant messaging apps. This is a part of their social lives now. With more kids using these platforms there is a bigger risk of something called cyber grooming. Cyber-grooming is when someone tries to trick a kid into doing something by being nice to them and pretending to be their friend. It is hard to catch people who do this because they do not use words. Instead they use words that sound nice and try to make the kid feel special. The problem is that the people who do this are much stronger than the kids so they can easily trick them. The kids think they are talking to a friend. Really they are talking to someone who wants to hurt them. The way we try to stop this is by looking for bad words but this does not work very well. The people who do cyber-grooming are too smart for this. So we need a way to stop cyber-grooming. We are working on a system that uses computers to find the bad people. This system can look at how people're talking and figure out if they are trying to trick a kid. It uses something called Natural Language Processing to do this.",
                                    video: "/6.mp4",
                                    color: "cyan",
                                    reversed: false
                                }
                            ].map((pub) => (
                                <motion.div key={pub.id} variants={slideUp}>
                                    <Card className={`bg-[#12161F] border-white/10 overflow-hidden group hover:border-${pub.color}-500/50 transition-all duration-500 flex flex-col ${pub.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[400px]`}>
                                        <div className={`w-full lg:w-[45%] shrink-0 ${pub.reversed ? 'border-l' : 'border-r'} border-white/10 relative overflow-hidden`}>
                                            <video src={pub.video} autoPlay muted loop playsInline className="w-full h-64 lg:h-full object-cover" />
                                        </div>
                                        <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                                            <Badge variant="outline" className={`w-fit mb-6 bg-${pub.color}-500/10 text-${pub.color}-400 border-${pub.color}-500/20 text-sm px-3 py-1`}>
                                                {pub.badge}
                                            </Badge>
                                            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-${pub.color}-400 transition-colors`}>
                                                {pub.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                                {pub.desc}
                                            </p>
                                            
                                            <motion.div 
                                                initial={false}
                                                animate={{ height: expandedPub === pub.id ? "auto" : 0, opacity: expandedPub === pub.id ? 1 : 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 text-slate-300 leading-relaxed border-t border-white/5 pt-6 mt-2">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">Abstract</h4>
                                                    {pub.abstract}
                                                </div>
                                            </motion.div>

                                            <div className="flex flex-wrap gap-3 mt-auto">
                                                <Button 
                                                    variant="outline" 
                                                    onClick={() => setExpandedPub(expandedPub === pub.id ? null : pub.id)}
                                                    className={`w-fit border-${pub.color}-500/30 hover:bg-${pub.color}-500/10 text-${pub.color}-400 font-bold gap-2`}
                                                >
                                                    {expandedPub === pub.id ? "Hide Abstract" : "View Abstract"} <FileText className="w-4 h-4" />
                                                </Button>
                                                <Button variant="outline" asChild className="w-fit border-white/10 hover:bg-white/5 text-slate-300 font-bold gap-2">
                                                    <a href={`mailto:priya6780@gmail.com?subject=Paper Request: ${pub.title}`}>
                                                        Request Paper <Mail className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="min-h-[80vh] flex items-center py-20 overflow-hidden">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-200px" }}
                        variants={slideInLeft}
                    >
                        <div className="flex items-center gap-4 mb-12 flex-row-reverse">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Projects</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-l from-blue-500/50 to-transparent mr-4" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Project 1 */}
                            <motion.div variants={slideUp} whileHover={{ y: -8, transition: { duration: 0.25 } }} className="h-full">
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:shadow-[0_24px_48px_rgba(6,182,212,0.18)] hover:border-cyan-500/40 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[500px]">
                                    <div className="relative h-64 shrink-0">
                                        <video src="/1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover border-b border-white/10" />
                                    </div>
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">Tourist Recommendation System</CardTitle>
                                        <CardDescription className="text-muted-foreground mt-4 text-lg">
                                            Developed a real-time recommendation system achieving <span className="text-cyan-400 font-bold">94% accuracy</span> in user-preference matching using custom decision tree heuristics.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8 mt-auto flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {["Flask", "JavaScript", "Decision Tree", "OpenStreetMap API"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button variant="outline" size="sm" asChild className="flex-1 border-white/10 hover:bg-white/5 text-white gap-2">
                                                <a href="https://github.com/Priya67803/tourist_recommender.git" target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4" /> GitHub</a>
                                            </Button>
                                            <Button size="sm" asChild className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white gap-2">
                                                <a href="https://tourist-recommender.onrender.com" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4" /> Demo</a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div variants={slideUp} whileHover={{ y: -8, transition: { duration: 0.25 } }} className="h-full">
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:shadow-[0_24px_48px_rgba(59,130,246,0.18)] hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[500px]">
                                    <div className="relative h-64 shrink-0">
                                        <video src="/2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover border-b border-white/10" />
                                    </div>
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">NLP Language & Bias Detection</CardTitle>
                                        <CardDescription className="text-muted-foreground mt-4 text-lg">
                                            Built a high-performance NLP dashboard that <span className="text-blue-400 font-bold">reduced latency by 20%</span> while detecting nuanced linguistic biases in real-time.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8 mt-auto flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {["FastText", "VADER", "TextStat", "NLP"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button variant="outline" size="sm" asChild className="flex-1 border-white/10 hover:bg-white/5 text-white gap-2">
                                                <a href="https://github.com/Priya67803/NLP_.git" target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4" /> GitHub</a>
                                            </Button>
                                            <Button size="sm" asChild className="flex-1 bg-blue-600 hover:bg-blue-500 text-white gap-2">
                                                <a href="#" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4" /> Demo</a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div variants={slideUp} whileHover={{ y: -8, transition: { duration: 0.25 } }} className="h-full">
                                <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:shadow-[0_24px_48px_rgba(168,85,247,0.18)] hover:border-cyan-500/40 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[500px]">
                                    <div className="relative h-64 shrink-0">
                                        <video src="/3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover border-b border-white/10" />
                                    </div>
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">Multi-Modal Graph RAG for Intelligent Driver Safety Monitoring</CardTitle>
                                        <CardDescription className="text-muted-foreground mt-4 text-lg line-clamp-3">
                                            Architected a multi-modal Graph RAG system integrating telemetry and spatial analysis to enable context-aware driver safety monitoring and risk prediction.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8 mt-auto flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {["Graph RAG", "Multi-Modal", "AI", "Safety"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button variant="outline" size="sm" asChild className="flex-1 border-white/10 hover:bg-white/5 text-white gap-2">
                                                <a href="https://github.com/Priya67803/RAG.git" target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4" /> GitHub</a>
                                            </Button>
                                            <Button size="sm" asChild className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white gap-2">
                                                <a href="https://rag-six-rho.vercel.app" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4" /> Demo</a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Experience and Skills (Technical Arsenal) */}
                <section id="skills" className="py-20 bg-[#0B0E14]/50">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Video First on Mobile (order-1), Second on Desktop (lg:order-2) */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full max-w-[380px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10 order-1 lg:order-2"
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
                            <motion.div variants={slideInRight} className="mb-10 text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
                                <p className="text-muted-foreground text-base max-w-lg">A comprehensive toolkit spanning machine learning, deep learning, data engineering, cloud platforms, and modern software development.</p>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                                {coreSkills.map((skill) => (
                                    <motion.div key={skill.name} variants={fadeInUp}>
                                        <div className="glass p-5 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group">
                                            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] skill-icon-glow">
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
                <section id="education" className="py-20">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Video First on Mobile (order-1) */}
                        <motion.div 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, margin: "-100px" }} 
                            variants={slideInLeft} 
                            className="relative w-full max-w-[380px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] border border-white/10 order-1"
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
                            <motion.div variants={slideInRight} className="mb-10 text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education and Credentials</h2>
                                <p className="text-muted-foreground text-base">Academic background and continuous learning certifications.</p>
                            </motion.div>

                            <motion.div variants={slideInRight} className="bg-[#12161F]/50 p-6 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">B.E. Computer Science (AI and ML)</h3>
                                <p className="text-cyan-400 font-medium mb-2">M. S. Ramaiah Institute of Technology</p>
                                <p className="text-slate-500 text-sm">6th Semester (2024–2027)</p>
                            </motion.div>

                            <motion.div variants={slideInRight} className="bg-[#12161F]/50 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Diploma in Computer Science</h3>
                                <p className="text-muted-foreground font-medium mb-2">MEI Polytechnic, Bengaluru</p>
                                <p className="text-slate-500 text-sm">2021–2024</p>
                            </motion.div>

                            <motion.div variants={slideInRight}>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Award className="w-6 h-6 text-blue-500" /> Top Certifications
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { name: "Internship Certification — Razz Security", link: "/internship certificate.pdf" },
                                        { name: "AWS Academy — ML Foundations", link: "/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_Badge_Badge20251110-30-ja54zf.pdf" },
                                        { name: "Generative AI Leader — Google Cloud", link: "/Gen ai.pdf" },
                                        { name: "Deep Learning — Google Cloud", link: "/deep learning.pdf" },
                                        { name: "Ethical Hacking — Udemy", link: "/Ethical hacking.pdf" },
                                        { name: "Machine Learning — Infosys", link: "/ML certificate.pdf" }
                                    ].map((cert, i) => (
                                        <li key={i}>
                                            <a 
                                                href={cert.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="block bg-white/5 border border-white/5 p-4 rounded-xl text-slate-200 text-base font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
                                            >
                                                <span>{cert.name}</span>
                                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Professional (Soft) Skills */}
                <section className="py-20 snap-section">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        {/* Video First on Mobile (order-1), Second on Desktop (lg:order-2) */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full max-w-[380px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)] border border-white/10 order-1 lg:order-2"
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
                            <motion.div variants={slideInRight} className="mb-10 text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Skills</h2>
                                <p className="text-muted-foreground text-base">Beyond code, I bring strong interpersonal and strategic skills to every team I join.</p>
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
                                    <motion.div key={i} variants={slideInRight} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-cyan-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-cyan-500 mb-2">{skill.title}</h3>
                                            <p className="text-slate-300">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                )})}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact and Networking */}
                <section id="contact" className="py-20">
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
                                    <p className="text-muted-foreground mb-8 max-w-sm">I'm always open to discussing AI, Machine Learning, research collaborations, and exciting career opportunities.</p>
                                    
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
                                            <input type="email" placeholder="Enter your mail" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors" />
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
                                    <div className="mb-4">
                                        <img src="/logo.png" alt="Priya Logo" className="h-10 w-auto object-contain" />
                                    </div>
                                    <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
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
                                <p className="text-muted-foreground/60 text-xs font-medium uppercase tracking-widest">
                                    Designed and developed with passion for Artificial Intelligence and Innovation.
                                </p>
                                <p className="text-muted-foreground/80 text-xs font-medium">
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
