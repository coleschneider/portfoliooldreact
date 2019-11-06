import React from 'react'
// eslint-disable-next-line
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Route, Switch, useLocation, RouteComponentProps, useHistory, useParams } from 'react-router-dom'
import { useSpring } from 'react-spring'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home/Home'
import Work from './Work/Work'
import WorkDetails from './WorkDetails/WorkDetails'
import Header from './Header/Header'
import { ReactComponent as UpArrow } from '../logo.svg'
import useCardDimensions from '../hooks/useCardDimensions'

const Scrollup = styled.a`
  position: fixed;
  right: 0;
  padding: 10px;
  cursor: pointer;
  bottom: 50px;
  z-index: 8000;
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
  /*
  Idea: Instead of listening to each cards position and dimensions uopdate, only grab the updates when we
  */
  const location = useLocation()

  const modalContainerRef: React.RefObject<HTMLDivElement> = React.useRef(null)
  const modal = location.state && location.state.to === 'modal'
  const isModal = location.state && location.state.background
  const background = location.state && location.state.background

  const { state, updateCardDimensions, onSelectCard, onUnselectCard } = useCardDimensions(
    isModal
      ? {
          currentCard: location.state.id,
          cardsById: {
            [location.state.id]: location.state.meta.from,
          },
        }
      : undefined,
  )
  const isModalContainer = isModal && state.currentCard === location.state.id
  const [, setY] = useSpring<SpringWindow>(windowFn)
  const getScrollContainer = () => {
    const modalContainer = document.querySelector('.modal-container')

    if (isModalContainer) {
      return modalContainer
    }
    return window
  }
  const getScrollTop = () => {
    const c = document.querySelector('.modal-container')
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

  const onUpdateCards: DimensionCallback = (dimensions, id) => {
    console.log(dimensions, id)
    if (!isModal) {
      updateCardDimensions(dimensions, id)
    }
    if (isModal && id === location.state.id) {
      updateCardDimensions(dimensions, id)
    }
  }
  const position = state.currentCard ? state.cardsById[state.currentCard] : {}

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <body className={isModal ? 'overflow-page' : undefined} />
        </Helmet>
        <Header onUnselectCard={onUnselectCard} modal={modal} {...location} />
        <div className="view-container">
          <Switch location={background || location}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/mywork"
              component={(props: RouteComponentProps) => (
                <Work
                  {...props}
                  isModal={isModal}
                  onUpdateCards={onUpdateCards}
                  onSelectCard={onSelectCard}
                  currentCard={isModal ? state.currentCard : null}
                />
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
