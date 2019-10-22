import React from 'react'
// eslint-disable-next-line
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring'
import styled, { css } from 'styled-components'
import { TransitionGroup, CSSTransition as OriginalCSSTransition } from 'react-transition-group'
import Home from './Home/Home'
import Work from './Work/Work'
import { CardWrapper } from './Card/Card'
import Header from './Header/Header'
import { ReactComponent as UpArrow } from '../logo.svg'
import { P, H2 } from '../theme/Elements'
import usePrevious from '../hooks/usePrevious'

const ModalContainer = styled.div`
  position: fixed;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: unset;
  left: 0;
  height: 100%;
  width: 100vw;
`
const Scrollup = styled.a`
  position: fixed;
  right: 0;
  padding: 10px;
  cursor: pointer;
  bottom: 50px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ImageWrapper = styled.div`
  color: rgba(0, 0, 0, 0.87);
  z-index: 1;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  border-radius: 2px;
`
const TextWrapper = styled.div`
  line-height: 1.8;
  max-width: 680px;
  margin: 0 24px;
`

const WrapImage = styled.div`
  width: 100%;
`
const WorkCards = ({ position }) => {
  return (
    <ImageWrapper>
      <Wrapper>
        <TextWrapper>
          <CardWrapper />
          <H2 primary>September - December Blend (Software Engineer Internship)</H2>
          <P primary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel,
            venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer
            bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet
            purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae,
            euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.
          </P>

          <H2 primary>Development</H2>
          <P primary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel,
            venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer
            bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet
            purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae,
            euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.
          </P>

          <H2 primary>Testing</H2>
          <P primary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel,
            venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer
            bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet
            purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae,
            euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.
          </P>
        </TextWrapper>
      </Wrapper>
    </ImageWrapper>
  )
}
class CSSTransition extends OriginalCSSTransition {
  onEntered = () => {
    // Do not remove enter classes when active
  }
}
const App: React.FC = () => {
  const location = useLocation()

  const modalContainerRef = React.useRef()
  const modal = location.state && location.state.to === 'modal'
  let position = usePrevious({})

  const background = location.state && location.state.background

  if (modal && location.state.meta) {
    position = location.state.meta.from
  }
  const [, setY] = useSpring(() => ({ y: 0 }))
  const handleUpArrowClick = () => {
    setY({
      y: 0,
      reset: true,
      from: { y: window.scrollY },
      onFrame: ({ y }) => window.scroll(0, y),
    })
  }
  const onUpdateCards = dimensions => {
    position = dimensions
  }
  console.log({ position })
  const [isExited, setIsExited] = React.useState(false)
  const setExited = () => setIsExited(true)
  return (
    <div className="App">
      <Header modal={modal} {...location} />
      <div className="view-container">
        <Switch location={background || location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/mywork" component={props => <Work {...props} onUpdateCards={onUpdateCards} />} />
        </Switch>
      </div>
      <TransitionGroup>
        <CSSTransition
          timeout={450}
          classNames="modal"
          key={location.pathname}
          mountOnEnter
          appear
          // onExit={() => console.log('exit')}
          // onExiting={() => console.log('exiting')}
          onExiting={() => setExited()}
        >
          <ModalContainer className="modal-container" style={position} ref={modalContainerRef}>
            <Switch location={location}>
              <Route
                path="/work/:workId"
                component={props => <WorkCards {...props} isExited={isExited} position={position} />}
              />
            </Switch>
          </ModalContainer>
        </CSSTransition>
      </TransitionGroup>
      <Scrollup onClick={handleUpArrowClick} data-testid="upArrow">
        <UpArrow />
      </Scrollup>
    </div>
  )
}

export default App
