import React from 'react'
// eslint-disable-next-line
import { Route, Switch, useLocation, RouteComponentProps } from 'react-router-dom'
import { useSpring } from 'react-spring'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home/Home'
import Work from './Work/Work'
import WorkDetails from './WorkDetails/WorkDetails'
import Header from './Header/Header'
import { ReactComponent as UpArrow } from '../logo.svg'
import { CardsContext } from '../hooks/useCardDimensions/useCardDimensions'
import { ModalContainer } from '../theme/Elements'

const Scrollup = styled.a`
  position: fixed;
  right: 0;
  padding: 10px;
  cursor: pointer;
  bottom: 50px;
  z-index: 2;
`
const ChildTransition = ({ location, position }) => {
  return (
    <TransitionGroup>
      <OmittedTransitionGroup timeout={450} classNames="modal" key={location.pathname} mountOnEnter appear>
        {transitionState => {
          const WorkDetailsTransitioned = WorkDetails({ transitionState })
          return (
            <ModalContainer className="modal-container" transitionState={transitionState} style={position} id="mdl">
              <Switch location={location}>
                <Route path="/work/:workId" component={WorkDetailsTransitioned} />
              </Switch>
            </ModalContainer>
          )
        }}
      </OmittedTransitionGroup>
    </TransitionGroup>
  )
}

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

const App: React.FC = props => {
  const location = useLocation()

  const background = location.state && location.state.background

  const isModal = background && location.state.to === 'modal'
  const { state, onUnselectCard } = React.useContext(CardsContext)
  const isModalContainer = isModal && state.currentCard === location.state.id
  const [, setY] = useSpring<SpringWindow>(windowFn)
  const getScrollContainer = () => {
    const modalContainer = document.getElementById('mdl')
    if (isModalContainer) {
      return modalContainer
    }
    return window
  }
  const getScrollTop = () => {
    const c = document.getElementById('mdl')
    if (isModalContainer) {
      return c.scrollTop
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

  const position = state.currentCard ? state.cardsById[state.currentCard] : {}

  return (
    <div className="App">
      <Header onUnselectCard={onUnselectCard} isModal={isModal} />
      <div className="view-container">
        <Switch location={background || location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/mywork" component={Work} />
        </Switch>
      </div>
      <ChildTransition position={position} location={location} />
      <Scrollup onClick={handleUpArrowClick} data-testid="upArrow">
        <UpArrow />
      </Scrollup>
    </div>
  )
}

export default App
