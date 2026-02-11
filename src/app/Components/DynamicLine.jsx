"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DynamicLine = () => {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const blurPathRef = useRef(null);

    // More states = More continuous movement
    const pathStates = {
        start: "M0,300 C250,300 750,300 1000,300",
        state1: "M0,300 C250,100 750,500 1000,300",
        state2: "M0,300 C250,500 750,100 1000,300",
        state3: "M0,300 C100,600 900,0 1000,300",
        state4: "M0,300 C400,0 600,600 1000,300",
        end: "M0,300 C250,300 750,300 1000,300",
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom", // Stretches the animation to the very end of the 400vh
                scrub: 2,
            },
        });

        // Chain the animations so they happen one after another based on scroll
        [pathRef.current, blurPathRef.current].forEach(path => {
            tl.to(path, { attr: { d: pathStates.state1 }, ease: "none" })
                .to(path, { attr: { d: pathStates.state2 }, ease: "none" })
                .to(path, { attr: { d: pathStates.state3 }, ease: "none" })
                .to(path, { attr: { d: pathStates.state4 }, ease: "none" })
                .to(path, { attr: { d: pathStates.end }, ease: "none" });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-[500vh] pointer-events-none">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <svg
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                >
                    <defs>
                        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="20" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4311af" stopOpacity="0" />
                            <stop offset="20%" stopColor="#932eb0" stopOpacity="1" />
                            <stop offset="80%" stopColor="#1b03ae" stopOpacity="1" />
                            <stop offset="100%" stopColor="#8429b0" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Outer Glow Path */}
                    <path
                        ref={blurPathRef}
                        d={pathStates.start}
                        stroke="#8429b0"
                        strokeWidth="40"
                        fill="transparent"
                        strokeLinecap="round"
                        filter="url(#neonGlow)"
                        className="opacity-30"
                    />

                    {/* Main Core Path */}
                    <path
                        ref={pathRef}
                        d={pathStates.start}
                        stroke="url(#lineGrad)"
                        strokeWidth="40"
                        fill="transparent"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default DynamicLine;