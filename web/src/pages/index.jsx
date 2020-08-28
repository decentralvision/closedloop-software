import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SEO, Intro } from '../components';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

const container = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export default function IndexPage({ location }) {
    const isFirstMount = !location.action;

    return (
        <>
            <SEO title="Home" />
            <motion.section exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={container}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla
                        facilisi nullam vehicula ipsum a arcu cursus. At imperdiet dui accumsan sit.
                        Nisl condimentum id venenatis a condimentum vitae sapien pellentesque
                        habitant. In fermentum et sollicitudin ac. Egestas egestas fringilla
                        phasellus faucibus. Diam maecenas sed enim ut sem viverra aliquet eget. At
                        augue eget arcu dictum varius. Tristique et egestas quis ipsum suspendisse.
                        Ut lectus arcu bibendum at varius vel. Amet mauris commodo quis imperdiet.
                        Arcu dui vivamus arcu felis bibendum. Malesuada fames ac turpis egestas sed
                        tempus. Orci dapibus ultrices in iaculis nunc sed augue. Consequat ac felis
                        donec et. Faucibus turpis in eu mi bibendum. Eget aliquet nibh praesent
                        tristique. Est lorem ipsum dolor sit amet consectetur. Erat pellentesque
                        adipiscing commodo elit at imperdiet dui accumsan. Tellus mauris a diam
                        maecenas sed enim ut. Platea dictumst vestibulum rhoncus est pellentesque.
                        Malesuada fames ac turpis egestas sed tempus urna. Mauris pharetra et
                        ultrices neque. Penatibus et magnis dis parturient montes nascetur.
                        Consectetur purus ut faucibus pulvinar elementum integer enim neque.
                        Habitant morbi tristique senectus et netus et. Elementum curabitur vitae
                        nunc sed velit. Urna condimentum mattis pellentesque id nibh. Gravida neque
                        convallis a cras semper auctor neque vitae tempus. Magnis dis parturient
                        montes nascetur ridiculus. Rhoncus mattis rhoncus urna neque viverra justo.
                        Orci a scelerisque purus semper eget duis at. Gravida quis blandit turpis
                        cursus in hac habitasse. Nulla porttitor massa id neque aliquam vestibulum
                        morbi blandit. Pharetra diam sit amet nisl suscipit adipiscing bibendum est
                        ultricies. Tempus imperdiet nulla malesuada pellentesque elit eget gravida
                        cum. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nec
                        sagittis aliquam malesuada bibendum arcu vitae elementum. Mus mauris vitae
                        ultricies leo integer malesuada nunc vel risus. Varius quam quisque id diam.
                        Sed arcu non odio euismod lacinia at quis risus sed. Egestas diam in arcu
                        cursus euismod quis viverra. Amet est placerat in egestas erat imperdiet
                        sed. Justo donec enim diam vulputate. Dui vivamus arcu felis bibendum ut.
                        Sollicitudin ac orci phasellus egestas. Ac tortor dignissim convallis aenean
                        et tortor at. At urna condimentum mattis pellentesque id nibh tortor id
                        aliquet. Libero id faucibus nisl tincidunt. Feugiat scelerisque varius morbi
                        enim nunc faucibus a pellentesque. Tristique risus nec feugiat in fermentum
                        posuere urna. Varius quam quisque id diam vel quam elementum pulvinar etiam.
                        At tempor commodo ullamcorper a lacus vestibulum. Orci ac auctor augue
                        mauris. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Pretium
                        aenean pharetra magna ac placerat vestibulum lectus mauris. Hendrerit dolor
                        magna eget est lorem ipsum. Eleifend mi in nulla posuere sollicitudin. Odio
                        ut sem nulla pharetra. Adipiscing elit pellentesque habitant morbi tristique
                        senectus. Enim ut tellus elementum sagittis vitae et leo duis. Facilisi cras
                        fermentum odio eu feugiat pretium nibh ipsum consequat. Id neque aliquam
                        vestibulum morbi blandit cursus risus at. Leo integer malesuada nunc vel
                        risus. Arcu risus quis varius quam quisque id diam. Leo vel orci porta non
                        pulvinar. Blandit libero volutpat sed cras ornare arcu dui. Tempor orci eu
                        lobortis elementum. Auctor eu augue ut lectus arcu bibendum at varius vel.
                        Tristique magna sit amet purus gravida quis. Egestas diam in arcu cursus
                        euismod. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
                        ullamcorper. Nibh venenatis cras sed felis. Ut morbi tincidunt augue
                        interdum velit. Egestas tellus rutrum tellus pellentesque eu tincidunt
                        tortor aliquam. In eu mi bibendum neque egestas congue quisque egestas.
                        Donec enim diam vulputate ut pharetra. Libero id faucibus nisl tincidunt
                        eget nullam non nisi est. Sed risus pretium quam vulputate dignissim. Neque
                        gravida in fermentum et sollicitudin ac orci phasellus. Proin libero nunc
                        consequat interdum varius sit amet mattis vulputate.
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};
