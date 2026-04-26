"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageSequenceViewerProps {
    folderName: string;
    frameCount: number;
    className?: string;
}

export default function ImageSequenceViewer({ folderName, frameCount, className }: ImageSequenceViewerProps) {
    const [frameIndex, setFrameIndex] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const isAnimating = isHovered || isClicked;

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isAnimating) {
            interval = setInterval(() => {
                setFrameIndex((prev) => (prev % frameCount) + 1);
            }, 50);
        } else {
            setFrameIndex(1);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAnimating, frameCount]);

    const paddedIndex = frameIndex.toString().padStart(3, "0");
    const imageSrc = `/${folderName}/ezgif-frame-${paddedIndex}.jpg`;

    return (
        <div
            className={cn("w-full h-48 bg-gray-900 rounded-t-xl overflow-hidden relative cursor-pointer", className)}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imageSrc}
                alt="Project Preview"
                className="object-cover w-full h-full transition-opacity duration-300"
                onError={(e) => {
                    // Fallback if image doesn't exist yet
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23333" font-family="sans-serif" font-size="24">Image Seq</text></svg>';
                }}
            />

            {!isAnimating && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-sm font-medium tracking-widest uppercase opacity-70">
                        Hover or Click to animate
                    </span>
                </div>
            )}
        </div>
    );
}