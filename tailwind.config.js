module.exports = {
    theme: {
        extend: {
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
};