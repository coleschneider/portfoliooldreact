import * as React from 'react'
import styled, { crea, css, keyframes } from 'styled-components'
import { useSpring, animated } from 'react-spring'

import usePortal from '../../hooks/usePortal'
import Container from '../../theme/Grid/Container'
import { Colors } from '../../theme/colors'
import Row from '../../theme/Grid/Row'
import Col from '../../theme/Grid/Column'
import AboutMe from '../../assets/images/about_me.jpg'
import { media } from '../../theme/Grid/config'
import { H1, P, PSecondary } from '../../theme/Elements'
import Dialog from '../Dialog/Dialog'

const ImageContainer = styled.img`
  ${media.sm`
      width: 100%;
  `}
  width: 400px;
  object-fit: cover;
  padding-left: 15px;
  padding-right: 15px;
`
const Wrapper = styled.div`
  margin-top: 100px;
`
const ExternalLink = styled.a`
  text-decoration: underline;
  color: inherit;
  vertical-align: baseline;
`
function About() {
  const [{ isShown }, setState] = React.useState({ isShown: true })

  return (
    <Wrapper>
      <Dialog
        confirmLabel="View Resume"
        title="Hello!"
        isShown={isShown}
        onCloseComplete={() => setState({ isShown: false })}
      >
        <PSecondary>
          Hi there! Welcome to my site. Feel free to contact me at the bottom of the page or          {' '}
          <ExternalLink
            target="_blank"
            href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry"
          >
            send an email
          </ExternalLink>
        </PSecondary>
      </Dialog>
      <Container>
        <Row>
          <Col center xs={4} sm={3} md={3} lg={3} xl={3}>
            <ImageContainer src={AboutMe} />
          </Col>
          <Col xs={4} sm={5} md={5} lg={9} xl={9}>
            <div>
              <H1 primary>Cole Schneider</H1>

              <P primary>
                Hi my name is Cole Schneider I am currently a senior at
                <ExternalLink target="_blank" href="https://www.pepperdine.edu/">
                  {' '}
                  Pepperdine University
                </ExternalLink>
                . Expected graduation date is Fall of 2019 with a major in business administration
                and and a minor in computer science. Please feel free to                {' '}
                <ExternalLink
                  target="_blank"
                  href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry"
                >
                  send an email
                </ExternalLink>                {' '}
                to me with any questions or concerns
              </P>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default About
