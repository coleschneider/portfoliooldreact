import React from 'react';

import Particles from 'react-particles-js';
import styled from 'styled-components';

import { ReactComponent as LandscapeSvg } from '../assets/Landscape.svg';
import { ExternalLink, Heading, Paragraph } from '../theme/text';
import { particleConfig } from './constants';

const Landscape = styled(LandscapeSvg)`
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
  left: 50%;
  margin-top: 1rem;
  max-width: 800px;
  position: absolute;
  transform: translate(-50%, 50%);
  z-index: 1;
  top: 0;
`;

export const Landing = () => {
  React.useEffect(() => {
    if (document.body.className !== 'remove__Overflow') {
      document.body.className = 'remove__Overflow';
    }
    return () => {
      document.body.className = '';
    };
  }, []);
  return (
    <>
      <Particles
        params={particleConfig}
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
        }}
      />
      <Landscape />
      <Wrapper>
        <Heading>Cole Schneider</Heading>
        <Paragraph>
          Hi my name is Cole Schneider. I'm a graduate of{' '}
          <ExternalLink target="_blank" href="https://www.pepperdine.edu/">
            Pepperdine University.
          </ExternalLink>{' '}
          I'm originally from Seattle, WA, but am now based in San Francisco, CA where I'm looking
          for new Software Engineering opportunities. Please feel free to{' '}
          <ExternalLink
            target="_blank"
            href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry"
          >
            send an email
          </ExternalLink>{' '}
          with any questions or concerns.
        </Paragraph>
      </Wrapper>
    </>
  );
};
