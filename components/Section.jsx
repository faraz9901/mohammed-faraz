'use client'

import React, { useRef } from 'react';
import * as motion from 'motion/react-client';
import { useInView } from 'motion/react';

export default function Section({ children, ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.section
            {...props}
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {children}
        </motion.section>
    );
};