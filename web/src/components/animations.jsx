export const fadeIn = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
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

export const swipe = {
    initial: { left: '-200%' },
    animate: {
        left: '-50%',
        transition: {
            duration: 0.6,
            ease: 'easeIn',
        },
    },
};

export const fadeAndSlide = {
    initial: { y: -24, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeIn',
        },
    },
};
