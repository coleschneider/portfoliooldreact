import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { images } from '../constants/images';
import { H1, Paragraph } from '../theme/text';
import { media } from '../theme/utils/mediaQueries';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

const ThumbnailWrapper = styled(motion.div)`
  flex: 1 0 33%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ThumbnailContainer = styled(motion.div)`
  overflow: hidden;
`;

const ThumbnailImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;
const Thumbnail: React.FunctionComponent<{ id: string; i: number }> = ({ id, i }) => (
  <ThumbnailWrapper variants={thumbnailVariants}>
    <ThumbnailContainer whileHover="hover" variants={frameVariants} transition={transition}>
      <Link to={`/work/${i}`}>
        <ThumbnailImage src={id} variants={imageVariants} transition={transition} />
      </Link>
    </ThumbnailContainer>
  </ThumbnailWrapper>
);

const Wrapper = styled.div`
  padding: 48px;
  margin: 24px auto;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 1rem;
  ${media('tablet')`
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
      grid-gap: 2rem;
  `}
`;

export const Work = () => {
  return (
    <Wrapper>
      <H1>Work / Job Experience</H1>
      <Paragraph>
        A list of the companies I have worked for alonmg with some side of my personal side projects
        I did over the years.
      </Paragraph>
      <Container
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {images.map((id, i) => (
          <Thumbnail key={id} id={id} i={i} />
        ))}
      </Container>
    </Wrapper>
  );
};
