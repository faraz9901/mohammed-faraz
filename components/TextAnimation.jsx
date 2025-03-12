"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TextAnimation({ words }) {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = isDeleting ? 100 : 150; // Adjust typing speed

        if (!isDeleting && displayText === currentWord) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 1000);
            return;
        }

        if (isDeleting && displayText === "") {
            // Move to next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayText((prev) =>
                isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, wordIndex]);

    return (
        <motion.div className="text-xl lg:text-3xl font-bold dark:text-[#e58206] text-[#D84040]">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            >
                |
            </motion.span>
        </motion.div>
    );
}
