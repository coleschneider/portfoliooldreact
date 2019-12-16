import * as React from 'react'
import styled from 'styled-components'
import Container from '../../theme/Grid/Container'
import Row from '../../theme/Grid/Row'
import Col from '../../theme/Grid/Column'
import AboutMe from '../../assets/images/about_me.jpg'
import AboutMePlaceholder from '../../assets/images/AboutMeSmall.jpg'
import Resume from '../../assets/Resume.pdf'
import { ButtonIcon, AboutTextContainer } from '../../theme/Elements'
import { H1, P } from '../../theme/Typography'
import useLazyImage from '../../hooks/useLazyImage'

const ImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
`
const Wrapper = styled.div`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`
const ExternalLink = styled.a`
  color: inherit;
  vertical-align: baseline;
`
const ButtonGroup = styled.div`
  flex-shrink: 0;
  margin-top: 24px;
`
function About() {
  const imageSrc = useLazyImage(AboutMe, AboutMePlaceholder)

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col center xs={4} sm={4} md={4} lg={6} xl={4}>
            <ImageContainer src={imageSrc} />
          </Col>
          <Col xs={8} sm={4} md={4} lg={6} xl={8}>
            <AboutTextContainer>
              <div>
                <H1>Cole Schneider</H1>
                <P>
                  Hi my name is Cole Schneider. I am a recent graduate of{' '}
                  <ExternalLink target="_blank" href="https://www.pepperdine.edu/">
                    {' '}
                    Pepperdine University.
                  </ExternalLink>{' '}
                  I am currently based in San Francisco, CA and looking for software engineering opportunities in the
                  bay area. Please feel free to{' '}
                  <ExternalLink target="_blank" href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry">
                    send an email
                  </ExternalLink>{' '}
                  with any questions or concerns.
                </P>
              </div>
              <ButtonGroup>
                <ButtonIcon icon="PointerRight" to="/mywork">
                  See Work
                </ButtonIcon>
                <ButtonIcon icon="PointerRight" primary target="_blank" href={Resume}>
                  See Resume
                </ButtonIcon>
              </ButtonGroup>
            </AboutTextContainer>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default About
