import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'
import Container from '../../theme/Grid/Container'
import Row from '../../theme/Grid/Row'
import Col from '../../theme/Grid/Column'
import AboutMe from '../../assets/images/about_me.jpg'
import AboutMePlaceholder from '../../assets/images/AboutMeSmall.jpg'
import Resume from '../../assets/Resume.pdf'
import { media } from '../../theme/Grid/config'
import { ButtonIcon, AboutTextContainer } from '../../theme/Elements'
import { H1, P } from '../../theme/Typography'
import Dialog from '../Dialog/Dialog'
import useLazyImage from '../../hooks/useLazyImage'

const ImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
`
const Wrapper = styled.div`
  margin-top: 90px;
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
  const [{ isShown }, setState] = React.useState({ isShown: true })
  const imageSrc = useLazyImage(AboutMe, AboutMePlaceholder)
  const handleClose = () => {
    setState({ isShown: false })
  }
  const openResume = () => {
    window.open(Resume)
  }
  return (
    <Wrapper>
      <Dialog
        confirmLabel="View Resume"
        title="Hello!"
        isShown={isShown}
        onCloseComplete={handleClose}
        onCancel={handleClose}
        onConfirm={openResume}
      >
        <P>
          Hi there! Welcome to my site. Feel free to contact me at the bottom of the page or
          <ExternalLink target="_blank" href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry">
            {' '}
            send an email
          </ExternalLink>
        </P>
      </Dialog>
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
                  Hi my name is Cole Schneider I am currently a senior at{' '}
                  <ExternalLink target="_blank" href="https://www.pepperdine.edu/">
                    {' '}
                    Pepperdine University.
                  </ExternalLink>{' '}
                  Expected graduation date is Fall of 2019 with a major in business administration and and a minor in
                  computer science. Please feel free to{' '}
                  <ExternalLink target="_blank" href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry">
                    send an email
                  </ExternalLink>{' '}
                  to me with any questions or concerns.
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
          {/* <Col xs={4} sm={4} md={4} lg={6} xl={4}>
           
          </Col> */}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default About
