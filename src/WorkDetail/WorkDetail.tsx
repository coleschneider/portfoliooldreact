import React from 'react';

import { motion } from 'framer-motion';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { images } from '../constants/images';
import { workConfig } from '../constants/work';
import { subtitleStyles, TextDecorationWrapper } from '../theme/text';
import { Colors } from '../theme/colors';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
};
const textVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 1.2, ...transition } },
};

const Wrapper = styled(motion.div)`
  padding: 64px;
  margin: 24px auto;
  width: 100%;
  max-width: 1200px;
`;

const BackLinkWrapper = styled(motion.div)`
  position: fixed;
  top: 50px;
  right: 50px;
  font-size: 54px;
  z-index: 1;
`;

const WorkDetailImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100vh;
`;
const H3 = styled(motion.h3)`
  ${subtitleStyles}
`;
const AnimatedParagraph = styled(motion.p)`
  font-size: 20px;
  color: ${Colors.White};
`;

export const WorkDetail: React.FunctionComponent<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const { details } = workConfig[Number(match.params.id)];

  return (
    <Wrapper initial="exit" animate="enter" exit="exit">
      <WorkDetailImage variants={imageVariants} src={images[Number(match.params.id)]} />
      <BackLinkWrapper variants={backVariants}>
        <Link to="/work">← Back</Link>
      </BackLinkWrapper>
      {details.map(({ title, body }) => (
        <TextDecorationWrapper variants={textVariants} key={title}>
          <H3>{title}</H3>
          <AnimatedParagraph>{body}</AnimatedParagraph>
        </TextDecorationWrapper>
      ))}
    </Wrapper>
  );
};
