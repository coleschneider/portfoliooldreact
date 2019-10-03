import * as React from 'react';
import { media, colors } from '../../theme';
import styled, { css } from 'styled-components';
import AboutMe from '../../assets/images/about_me.jpg';

import * as Section from '../Section/Section';
import { ButtonLink } from '../Elements/Button/Button';

const AboutLink = styled.a`
  color: inherit;
  text-decoration-line: dotted;
`;

const RegColumn = styled.div`
  ${Section.FlexLayout.regular}
`;
const MediaBody = styled.div`
  flex: 1;
`;
const AboutImage = styled.img`
    max-width: 400px;
    vertical-align: middle;
   border-style: none;
   margin-bottom: 1rem;
    ${media.tablet`
        max-width: 100%;
    `}
    ${media.desktopHDMin`
        max-width: 400px;
    `}
    ${media.desktopMin`
        max-width: 250px;
        margin-left: 3rem;
        margin-bottom: 0;
    `}
    ${media.tabletMin`
        margin-right: 0;
    `}
`;
const NameBold = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    /* color: ${colors.black}; */
`;
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    display: block;
    /* color: ${colors.black}; */
`;
const Bio = styled.div`
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  margin-bottom: 1.5rem;
  display: block;
`;
function About() {
  return (
    <Section.Wrapper>
      <Section.Container>
        <RegColumn>
          <MediaBody>
            <NameBold>Cole Schneider</NameBold>
            <Title>Software Engineer</Title>
            <Bio>
              <strong>Hi I'm Cole Schneider</strong> I am currently a senior at{' '}
              <AboutLink target="_blank" href="https://www.pepperdine.edu/">
                Pepperdine University
              </AboutLink>
              . Expected graduation date is Fall of 2019 with a major in business administration and
              a minor in computer science. Please feel free to{' '}
              <AboutLink
                href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry"
                target="_top"
              >
                send an email
              </AboutLink>{' '}
              to me with any questions or concerns
            </Bio>
            <ButtonContainer>
              <ButtonLink primary color={colors.white} hover>
                View Work
              </ButtonLink>
              <ButtonLink secondary color={colors.white} hover>
                View Resume
              </ButtonLink>
            </ButtonContainer>
          </MediaBody>
          <AboutImage src={AboutMe} />
        </RegColumn>
      </Section.Container>
    </Section.Wrapper>
  );
}
export default About;
