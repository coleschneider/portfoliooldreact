import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { siteSocialLinks } from '../constants/social';
import { media } from '../theme/utils/mediaQueries';
import { Colors } from '../theme/colors';

const Wrapper = styled.div<{ left?: boolean }>`
  position: fixed;
  bottom: 0;
  z-index: 10;
  position: fixed;
  min-height: 80%;
  align-items: center;
  display: flex;
  flex-direction: column;
  left: ${(props) => (props.left ? '12px' : 'calc(100% - 36px)')};
  ${(props) => media('desktop')`
    left: ${props.left ? '12px' : 'calc(100% - 36px)'};
  `}
`;

const Spacer = styled.div`
  flex: 1;
  background: white;
  width: 2px;
`;

const EmailLink = styled.a`
  writing-mode: vertical-rl;
  text-decoration: none;
  color: ${Colors.White};
  font-weight: 400;
  margin: 40px 0;
`;

const SiteLink = styled(motion.a)`
  fill: ${Colors.White};
`;
export const Sitelinks: React.FunctionComponent = () => (
  <>
    <Wrapper left>
      <Spacer />
      {siteSocialLinks.map(({ icon: Icon, href }) => (
        <SiteLink
          key={href}
          target="_blank"
          href={href}
          rel="noreferrer"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.2,
            fill: '#a8c8d7',
          }}
        >
          <Icon />
        </SiteLink>
      ))}
      <Spacer />
    </Wrapper>
    <Wrapper>
      <Spacer />
      <EmailLink
        target="_blank"
        href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry"
        rel="noreferrer"
      >
        colekschneider@gmail.com
      </EmailLink>
      <Spacer />
    </Wrapper>
  </>
);
