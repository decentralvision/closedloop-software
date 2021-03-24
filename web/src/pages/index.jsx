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
            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={container}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac
                        odio. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                        Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Phasellus
                        egestas tellus rutrum tellus pellentesque eu tincidunt. At urna condimentum
                        mattis pellentesque id nibh. Quam lacus suspendisse faucibus interdum
                        posuere lorem ipsum dolor sit. Ut etiam sit amet nisl purus in mollis nunc
                        sed. Tempus quam pellentesque nec nam. Magna fringilla urna porttitor
                        rhoncus dolor. Ut sem viverra aliquet eget sit amet tellus. Aliquam sem et
                        tortor consequat id. Adipiscing enim eu turpis egestas pretium. Placerat
                        orci nulla pellentesque dignissim enim sit. Semper auctor neque vitae tempus
                        quam. Quis eleifend quam adipiscing vitae. At lectus urna duis convallis
                        convallis tellus id interdum velit. Ac turpis egestas integer eget aliquet
                        nibh. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
                        Ac tincidunt vitae semper quis lectus nulla at volutpat. Suspendisse sed
                        nisi lacus sed viverra tellus. Suspendisse ultrices gravida dictum fusce.
                        Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Tincidunt
                        id aliquet risus feugiat in. Dui sapien eget mi proin. Metus vulputate eu
                        scelerisque felis imperdiet proin. Dapibus ultrices in iaculis nunc sed
                        augue lacus viverra vitae. Nulla posuere sollicitudin aliquam ultrices
                        sagittis orci a scelerisque purus. Nisl nisi scelerisque eu ultrices vitae
                        auctor eu. Ut sem viverra aliquet eget sit. Rhoncus mattis rhoncus urna
                        neque viverra justo nec ultrices dui. Rhoncus est pellentesque elit
                        ullamcorper dignissim cras tincidunt. A pellentesque sit amet porttitor.
                        Lacus viverra vitae congue eu. Euismod quis viverra nibh cras pulvinar
                        mattis. Egestas congue quisque egestas diam in arcu cursus euismod quis.
                        Consequat mauris nunc congue nisi vitae. Massa ultricies mi quis hendrerit.
                        Elementum nisi quis eleifend quam. Auctor eu augue ut lectus arcu bibendum.
                        Et malesuada fames ac turpis egestas integer. Fringilla urna porttitor
                        rhoncus dolor purus non enim. Aliquam etiam erat velit scelerisque in. Enim
                        sed faucibus turpis in eu mi bibendum neque egestas. Et egestas quis ipsum
                        suspendisse ultrices gravida dictum fusce. Odio pellentesque diam volutpat
                        commodo sed. Sapien pellentesque habitant morbi tristique senectus.
                        Hendrerit gravida rutrum quisque non tellus orci ac. Nunc scelerisque
                        viverra mauris in aliquam sem fringilla. Tellus id interdum velit laoreet id
                        donec ultrices tincidunt. Amet venenatis urna cursus eget nunc. Viverra
                        maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst
                        vestibulum rhoncus est pellentesque elit ullamcorper. Amet justo donec enim
                        diam. Ac tortor dignissim convallis aenean et tortor at. Morbi quis commodo
                        odio aenean sed. Molestie at elementum eu facilisis. Posuere morbi leo urna
                        molestie at elementum eu facilisis. Viverra justo nec ultrices dui sapien
                        eget mi proin sed. Eros donec ac odio tempor orci dapibus ultrices in
                        iaculis. Tortor id aliquet lectus proin nibh nisl condimentum id. Eget nulla
                        facilisi etiam dignissim diam quis enim lobortis scelerisque. Vitae
                        elementum curabitur vitae nunc sed velit dignissim. Cras pulvinar mattis
                        nunc sed blandit. Dignissim enim sit amet venenatis urna cursus eget. Congue
                        nisi vitae suscipit tellus mauris a diam maecenas sed. Vestibulum rhoncus
                        est pellentesque elit ullamcorper dignissim cras tincidunt. Viverra ipsum
                        nunc aliquet bibendum enim. Ultrices dui sapien eget mi proin sed libero
                        enim. Pellentesque sit amet porttitor eget dolor morbi non arcu. Neque
                        convallis a cras semper auctor neque vitae. Tortor consequat id porta nibh.
                        Gravida cum sociis natoque penatibus et magnis dis parturient. Nisi lacus
                        sed viverra tellus in hac habitasse. In nibh mauris cursus mattis molestie
                        a. Adipiscing tristique risus nec feugiat. Sem integer vitae justo eget
                        magna fermentum. Bibendum arcu vitae elementum curabitur vitae nunc sed
                        velit. Potenti nullam ac tortor vitae. Cursus eget nunc scelerisque viverra
                        mauris in. Eu ultrices vitae auctor eu. Elementum pulvinar etiam non quam
                        lacus suspendisse faucibus interdum posuere. Pulvinar neque laoreet
                        suspendisse interdum consectetur libero. Nibh ipsum consequat nisl vel
                        pretium lectus quam. Nisi est sit amet facilisis. Urna et pharetra pharetra
                        massa massa ultricies mi quis hendrerit. Cras adipiscing enim eu turpis
                        egestas pretium aenean pharetra magna. Ut venenatis tellus in metus
                        vulputate eu scelerisque felis imperdiet. Viverra vitae congue eu consequat
                        ac. Morbi leo urna molestie at. Imperdiet sed euismod nisi porta lorem
                        mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros
                        donec ac odio. Id velit ut tortor pretium viverra suspendisse potenti nullam
                        ac. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
                        Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. At urna
                        condimentum mattis pellentesque id nibh. Quam lacus suspendisse faucibus
                        interdum posuere lorem ipsum dolor sit. Ut etiam sit amet nisl purus in
                        mollis nunc sed. Tempus quam pellentesque nec nam. Magna fringilla urna
                        porttitor rhoncus dolor. Ut sem viverra aliquet eget sit amet tellus.
                        Aliquam sem et tortor consequat id. Adipiscing enim eu turpis egestas
                        pretium. Placerat orci nulla pellentesque dignissim enim sit. Semper auctor
                        neque vitae tempus quam. Quis eleifend quam adipiscing vitae. At lectus urna
                        duis convallis convallis tellus id interdum velit. Ac turpis egestas integer
                        eget aliquet nibh. Fermentum leo vel orci porta non pulvinar neque laoreet
                        suspendisse. Ac tincidunt vitae semper quis lectus nulla at volutpat.
                        Suspendisse sed nisi lacus sed viverra tellus. Suspendisse ultrices gravida
                        dictum fusce. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                        vitae. Tincidunt id aliquet risus feugiat in. Dui sapien eget mi proin.
                        Metus vulputate eu scelerisque felis imperdiet proin. Dapibus ultrices in
                        iaculis nunc sed augue lacus viverra vitae. Nulla posuere sollicitudin
                        aliquam ultrices sagittis orci a scelerisque purus. Nisl nisi scelerisque eu
                        ultrices vitae auctor eu. Ut sem viverra aliquet eget sit. Rhoncus mattis
                        rhoncus urna neque viverra justo nec ultrices dui. Rhoncus est pellentesque
                        elit ullamcorper dignissim cras tincidunt. A pellentesque sit amet
                        porttitor. Lacus viverra vitae congue eu. Euismod quis viverra nibh cras
                        pulvinar mattis. Egestas congue quisque egestas diam in arcu cursus euismod
                        quis. Consequat mauris nunc congue nisi vitae. Massa ultricies mi quis
                        hendrerit. Elementum nisi quis eleifend quam. Auctor eu augue ut lectus arcu
                        bibendum. Et malesuada fames ac turpis egestas integer. Fringilla urna
                        porttitor rhoncus dolor purus non enim. Aliquam etiam erat velit scelerisque
                        in. Enim sed faucibus turpis in eu mi bibendum neque egestas. Et egestas
                        quis ipsum suspendisse ultrices gravida dictum fusce. Odio pellentesque diam
                        volutpat commodo sed. Sapien pellentesque habitant morbi tristique senectus.
                        Hendrerit gravida rutrum quisque non tellus orci ac. Nunc scelerisque
                        viverra mauris in aliquam sem fringilla. Tellus id interdum velit laoreet id
                        donec ultrices tincidunt. Amet venenatis urna cursus eget nunc. Viverra
                        maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst
                        vestibulum rhoncus est pellentesque elit ullamcorper. Amet justo donec enim
                        diam. Ac tortor dignissim convallis aenean et tortor at. Morbi quis commodo
                        odio aenean sed. Molestie at elementum eu facilisis. Posuere morbi leo urna
                        molestie at elementum eu facilisis. Viverra justo nec ultrices dui sapien
                        eget mi proin sed. Eros donec ac odio tempor orci dapibus ultrices in
                        iaculis. Tortor id aliquet lectus proin nibh nisl condimentum id. Eget nulla
                        facilisi etiam dignissim diam quis enim lobortis scelerisque. Vitae
                        elementum curabitur vitae nunc sed velit dignissim. Cras pulvinar mattis
                        nunc sed blandit. Dignissim enim sit amet venenatis urna cursus eget. Congue
                        nisi vitae suscipit tellus mauris a diam maecenas sed. Vestibulum rhoncus
                        est pellentesque elit ullamcorper dignissim cras tincidunt. Viverra ipsum
                        nunc aliquet bibendum enim. Ultrices dui sapien eget mi proin sed libero
                        enim. Pellentesque sit amet porttitor eget dolor morbi non arcu. Neque
                        convallis a cras semper auctor neque vitae. Tortor consequat id porta nibh.
                        Gravida cum sociis natoque penatibus et magnis dis parturient. Nisi lacus
                        sed viverra tellus in hac habitasse. In nibh mauris cursus mattis molestie
                        a. Adipiscing tristique risus nec feugiat. Sem integer vitae justo eget
                        magna fermentum. Bibendum arcu vitae elementum curabitur vitae nunc sed
                        velit. Potenti nullam ac tortor vitae. Cursus eget nunc scelerisque viverra
                        mauris in. Eu ultrices vitae auctor eu. Elementum pulvinar etiam non quam
                        lacus suspendisse faucibus interdum posuere. Pulvinar neque laoreet
                        suspendisse interdum consectetur libero. Nibh ipsum consequat nisl vel
                        pretium lectus quam. Nisi est sit amet facilisis. Urna et pharetra pharetra
                        massa massa ultricies mi quis hendrerit. Cras adipiscing enim eu turpis
                        egestas pretium aenean pharetra magna. Ut venenatis tellus in metus
                        vulputate eu scelerisque felis imperdiet. Viverra vitae congue eu consequat
                        ac. Morbi leo urna molestie at. Imperdiet sed euismod nisi porta lorem
                        mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros
                        donec ac odio. Id velit ut tortor pretium viverra suspendisse potenti nullam
                        ac. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
                        Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. At urna
                        condimentum mattis pellentesque id nibh. Quam lacus suspendisse faucibus
                        interdum posuere lorem ipsum dolor sit. Ut etiam sit amet nisl purus in
                        mollis nunc sed. Tempus quam pellentesque nec nam. Magna fringilla urna
                        porttitor rhoncus dolor. Ut sem viverra aliquet eget sit amet tellus.
                        Aliquam sem et tortor consequat id. Adipiscing enim eu turpis egestas
                        pretium. Placerat orci nulla pellentesque dignissim enim sit. Semper auctor
                        neque vitae tempus quam. Quis eleifend quam adipiscing vitae. At lectus urna
                        duis convallis convallis tellus id interdum velit. Ac turpis egestas integer
                        eget aliquet nibh. Fermentum leo vel orci porta non pulvinar neque laoreet
                        suspendisse. Ac tincidunt vitae semper quis lectus nulla at volutpat.
                        Suspendisse sed nisi lacus sed viverra tellus. Suspendisse ultrices gravida
                        dictum fusce. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                        vitae. Tincidunt id aliquet risus feugiat in. Dui sapien eget mi proin.
                        Metus vulputate eu scelerisque felis imperdiet proin. Dapibus ultrices in
                        iaculis nunc sed augue lacus viverra vitae. Nulla posuere sollicitudin
                        aliquam ultrices sagittis orci a scelerisque purus. Nisl nisi scelerisque eu
                        ultrices vitae auctor eu. Ut sem viverra aliquet eget sit. Rhoncus mattis
                        rhoncus urna neque viverra justo nec ultrices dui. Rhoncus est pellentesque
                        elit ullamcorper dignissim cras tincidunt. A pellentesque sit amet
                        porttitor. Lacus viverra vitae congue eu. Euismod quis viverra nibh cras
                        pulvinar mattis. Egestas congue quisque egestas diam in arcu cursus euismod
                        quis. Consequat mauris nunc congue nisi vitae. Massa ultricies mi quis
                        hendrerit. Elementum nisi quis eleifend quam. Auctor eu augue ut lectus arcu
                        bibendum. Et malesuada fames ac turpis egestas integer. Fringilla urna
                        porttitor rhoncus dolor purus non enim. Aliquam etiam erat velit scelerisque
                        in. Enim sed faucibus turpis in eu mi bibendum neque egestas. Et egestas
                        quis ipsum suspendisse ultrices gravida dictum fusce. Odio pellentesque diam
                        volutpat commodo sed. Sapien pellentesque habitant morbi tristique senectus.
                        Hendrerit gravida rutrum quisque non tellus orci ac. Nunc scelerisque
                        viverra mauris in aliquam sem fringilla. Tellus id interdum velit laoreet id
                        donec ultrices tincidunt. Amet venenatis urna cursus eget nunc. Viverra
                        maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst
                        vestibulum rhoncus est pellentesque elit ullamcorper. Amet justo donec enim
                        diam. Ac tortor dignissim convallis aenean et tortor at. Morbi quis commodo
                        odio aenean sed. Molestie at elementum eu facilisis. Posuere morbi leo urna
                        molestie at elementum eu facilisis. Viverra justo nec ultrices dui sapien
                        eget mi proin sed. Eros donec ac odio tempor orci dapibus ultrices in
                        iaculis. Tortor id aliquet lectus proin nibh nisl condimentum id. Eget nulla
                        facilisi etiam dignissim diam quis enim lobortis scelerisque. Vitae
                        elementum curabitur vitae nunc sed velit dignissim. Cras pulvinar mattis
                        nunc sed blandit. Dignissim enim sit amet venenatis urna cursus eget. Congue
                        nisi vitae suscipit tellus mauris a diam maecenas sed. Vestibulum rhoncus
                        est pellentesque elit ullamcorper dignissim cras tincidunt. Viverra ipsum
                        nunc aliquet bibendum enim. Ultrices dui sapien eget mi proin sed libero
                        enim. Pellentesque sit amet porttitor eget dolor morbi non arcu. Neque
                        convallis a cras semper auctor neque vitae. Tortor consequat id porta nibh.
                        Gravida cum sociis natoque penatibus et magnis dis parturient. Nisi lacus
                        sed viverra tellus in hac habitasse. In nibh mauris cursus mattis molestie
                        a. Adipiscing tristique risus nec feugiat. Sem integer vitae justo eget
                        magna fermentum. Bibendum arcu vitae elementum curabitur vitae nunc sed
                        velit. Potenti nullam ac tortor vitae. Cursus eget nunc scelerisque viverra
                        mauris in. Eu ultrices vitae auctor eu. Elementum pulvinar etiam non quam
                        lacus suspendisse faucibus interdum posuere. Pulvinar neque laoreet
                        suspendisse interdum consectetur libero. Nibh ipsum consequat nisl vel
                        pretium lectus quam. Nisi est sit amet facilisis. Urna et pharetra pharetra
                        massa massa ultricies mi quis hendrerit. Cras adipiscing enim eu turpis
                        egestas pretium aenean pharetra magna. Ut venenatis tellus in metus
                        vulputate eu scelerisque felis imperdiet. Viverra vitae congue eu consequat
                        ac. Morbi leo urna molestie at. Imperdiet sed euismod nisi porta lorem
                        mollis.
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};
