"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
    const sectionRef = useRef(null);
    const boxRefs = useRef([]);

    boxRefs.current = [];

    const addToRefs = (el) => {
        if (el && !boxRefs.current.includes(el)) {
            boxRefs.current.push(el);
        }
    };

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                    markers: false,
                },
            }
        );

        gsap.fromTo(
            boxRefs.current,
            {
                opacity: 0,
                scale: 0.5,
                rotation: -180,
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                    markers: false,
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#282c34",
                color: "#61dafb",
                marginBottom: "50px",
                fontSize: "2rem",
                border: "2px solid #333",
                borderRadius: "10px",
            }}
        >
            <h2>Scroll to Animate</h2>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                <div
                    ref={addToRefs}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#61dafb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        fontSize: "1.5rem",
                        color: "#282c34",
                    }}
                >
                    1
                </div>
                <div
                    ref={addToRefs}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#61dafb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        fontSize: "1.5rem",
                        color: "#282c34",
                    }}
                >
                    2
                </div>
                <div
                    ref={addToRefs}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#61dafb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        fontSize: "1.5rem",
                        color: "#282c34",
                    }}
                >
                    3
                </div>
            </div>
        </section>
    );
};

export default AnimatedComponent;
