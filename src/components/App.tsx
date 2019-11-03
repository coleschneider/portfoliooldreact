import React from 'react'
// eslint-disable-next-line
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Route, Switch, useLocation, RouteComponentProps } from 'react-router-dom'
import { useSpring } from 'react-spring'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home/Home'
import Work from './Work/Work'
import WorkDetails from './WorkDetails/WorkDetails'
import Header from './Header/Header'
import { ReactComponent as UpArrow } from '../logo.svg'
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
interface SpringWindow {
  onFrame: ({ y }: { y: number }) => void
  y: number
}
const windowFn = (): SpringWindow => ({ y: 0, onFrame: ({ y }) => window.scroll(0, y) })

class OmittedTransitionGroup extends CSSTransition {
  onEntered = () => {
    // Do not remove enter classes when active
  }
}

const App: React.FC = () => {
  const location = useLocation()

  
  const modalContainerRef: React.RefObject<HTMLDivElement> = React.useRef(null)
  const modal = location.state && location.state.to === 'modal'
// Maybe add null here
  let position = usePrevious<DOMRect | ClientRect>()
  
  const background = location.state && location.state.background
  const isModal = location.state && location.state.background

  if (modal && location.state.meta) {
    position = location.state.meta.from
  }
  const [, setY] = useSpring<SpringWindow>(windowFn)
  const getScrollContainer = () => {
    if (modalContainerRef.current && modal && location.state.meta) return modalContainerRef.current
    return window
  }
  const getScrollTop = () => {
    if (modalContainerRef.current && modal && location.state.meta) {
      return modalContainerRef.current.scrollTop
    }
    return window.scrollY
  }

  const onFrame = ({ y }: { y: number }) => {
    return getScrollContainer().scroll(0, y)
  }
  const handleUpArrowClick = () => {
    setY({
      y: 0,
      reset: true,
      from: { y: getScrollTop() },
      onFrame,
    })
  }
  
  const onUpdateCards: DimensionCallback = (dimensions, id) => {
    position = dimensions
  }

  
  
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <body className={isModal ? 'overflow-page' : undefined} />
        </Helmet>
        <Header scrollContainer={getScrollContainer()} modal={modal} {...location} />
        <div className="view-container">
          <Switch location={background || location}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/mywork"
              component={(props: RouteComponentProps) => (
                <Work {...props} isModal={isModal} onUpdateCards={onUpdateCards}  />
              )}
            />
          </Switch>
        </div>
        <TransitionGroup>
          <OmittedTransitionGroup timeout={450} classNames="modal" key={location.pathname} mountOnEnter appear>
            <div className="modal-container" style={position} ref={modalContainerRef}>
              <Switch location={location}>
                <Route path="/work/:workId" component={WorkDetails} />
              </Switch>
            </div>
          </OmittedTransitionGroup>
        </TransitionGroup>
        <Scrollup onClick={handleUpArrowClick} data-testid="upArrow">
          <UpArrow />
        </Scrollup>
      </div>
    </HelmetProvider>
  )
}

export default App
