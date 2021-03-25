export const fadeIn = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 2,
            ease: 'easeIn',
        },
    },
};

export const slideIn = {
    initial: { width: 0 },
    animate: {
        width: '100%',
        transition: {
            duration: 0.6,
            delay: 1,
            ease: 'easeIn',
        },
    },
};
