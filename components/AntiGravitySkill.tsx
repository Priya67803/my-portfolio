"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AntiGravitySkill({ name }: { name: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const [randomY, setRandomY] = useState(10);
    const [randomDuration, setRandomDuration] = useState(4);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    useEffect(() => {
        setRandomY(Math.random() * 15 + 10);
        setRandomDuration(Math.random() * 2 + 3);
        setRotateX(Math.random() * 20 - 10);
        setRotateY(Math.random() * 20 - 10);
    }, []);

    return (
        <motion.div
            className="relative flex items-center justify-center px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-shadow"
            whileHover={{
                y: -10,
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            animate={{
                y: [0, -randomY, 0],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{ perspective: 1000 }}
        >
            <span className="text-cyan-50 font-semibold tracking-wide">
                {name}
            </span>
        </motion.div>
    );
}