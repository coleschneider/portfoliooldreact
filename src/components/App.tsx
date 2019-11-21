import React from 'react'
// eslint-disable-next-line
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Route, Switch, useLocation, RouteComponentProps } from 'react-router-dom'
import { useSpring } from 'react-spring'
import styled, { css } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home/Home'
import Work from './Work/Work'
import WorkDetails from './WorkDetails/WorkDetails'
import Header from './Header/Header'
import { ReactComponent as UpArrow } from '../logo.svg'
import useCardDimensions from '../hooks/useCardDimensions/useCardDimensions'
import { ModalContainer } from '../theme/Elements'

const Scrollup = styled.a`
  position: fixed;
  right: 0;
  padding: 10px;
  cursor: pointer;
  bottom: 50px;
  z-index: 2;
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

  const background = location.state && location.state.background

  const isModal = background && location.state.to === 'modal'

  const initialCardState = isModal
    ? {
        currentCard: location.state.id,
        cardsById: {
          [location.state.id]: location.state.meta.from,
        },
      }
    : undefined
  const { state, updateCardDimensions, onSelectCard, onUnselectCard } = useCardDimensions(initialCardState)

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

  const onUpdateCards: UpdateCardsCallback = (dimensions: DimensionObject, id: string) => {
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
        <Header onUnselectCard={onUnselectCard} isModal={isModal} />
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
            {transitionState => {
              // When using styled components state doesnt work
              const WorkDetailsTransitioned = WorkDetails({ transitionState })
              return (
                // <ModalContainer className="modal-container" transitionState={transitionState} style={position} id="mdl">
                <ModalContainer className="modal-container" style={position} id="mdl">
                  <Switch location={location}>
                    <Route path="/work/:workId" component={WorkDetailsTransitioned} />
                  </Switch>
                </ModalContainer>
              )
            }}
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
