"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";

interface ImageSequenceViewerProps {
    folderName: string;
    frameCount: number;
}

export default function ImageSequenceViewer({ folderName, frameCount }: ImageSequenceViewerProps) {
    const [frameIndex, setFrameIndex] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isHovered) {
            interval = setInterval(() => {
                setFrameIndex((prev) => (prev % frameCount) + 1);
            }, 50);
        } else {
            if (frameIndex !== 1) {
                setFrameIndex(1);
            }
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered, frameCount, frameIndex]);

    const paddedIndex = frameIndex.toString().padStart(3, "0");
    const imageSrc = `/${folderName}/ezgif-frame-${paddedIndex}.jpg`;

    return (
        <div
            className="w-full h-48 bg-gray-900 rounded-t-xl overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imageSrc}
                alt="Project Preview"
                className="object-cover w-full h-full transition-opacity duration-300"
            />

            {!isHovered && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-widest uppercase opacity-70">
                        Hover to animate
                    </span>
                </div>
            )}
        </div>
    );
}