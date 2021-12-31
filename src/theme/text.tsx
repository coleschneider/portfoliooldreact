import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Colors } from './colors';

export const H1 = styled.h1`
  color: ${Colors.White};
`;

export const Paragraph = styled.p`
  color: ${Colors.White};
`;
export const ExternalLink = styled.a`
  color: ${Colors.White};
`;
export const H3 = styled.h3``;

export const TextDecorationStyles = css`
  box-shadow: inset 3px 0 0 0 rgba(255, 255, 255, 0.84);
  padding-left: 23px;
  margin-bottom: 20px;
  margin-top: 20px;
  word-break: break-word;
`;

export const TextDecorationWrapper = styled(motion.div)`
  padding-left: 23px;
  margin-bottom: 20px;
  margin-top: 20px;
  word-break: break-word;
`;

export const Heading = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: bold;
  line-height: 1.1;
  color: ${Colors.White};
`;

export const subtitleStyles = css`
  font-weight: bold;
  font-size: clamp(26px, 5vw, 32px);
  color: ${Colors.White};
`;
