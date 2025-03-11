"use client";
import * as motion from "motion/react-client";

export default function Transition({ children }) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
        >
            {children}
        </motion.div>
    );
}
