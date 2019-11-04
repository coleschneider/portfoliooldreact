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
function useCardDimensions(initialState = { cardsById: {}, currentCard: null }) {
  const currentCard = (state, action) => {
    switch (action.type) {
      case 'SELECT_CARD':
        return action.payload.id
      case 'UNSELECT_CARD':
        return null
      default:
        return state
    }
  }
  const cardsById = (state, action) => {
    switch (action.type) {
      case 'UPDATE_CARDS':
        return {
          ...state,
          [action.payload.id]: action.payload.dimensions,
        }
      default:
        return state
    }
  }
  const cardsReducer = (state, action) => ({
    cardsById: cardsById(state.cardsById, action),
    currentCard: currentCard(state.currentCard, action),
  })
  const [state, dispatch] = React.useReducer(cardsReducer, initialState)
  const updateCardDimensions = (dimensions, id) => {
    dispatch({
      type: 'UPDATE_CARDS',
      payload: { dimensions, id },
    })
  }
  const onSelectCard = id => {
    dispatch({
      type: 'SELECT_CARD',
      payload: { id },
    })
  }
  const onUnselectCard = () => {
    dispatch({
      type: 'UNSELECT_CARD',
    })
  }

  return {
    updateCardDimensions,
    onSelectCard,
    onUnselectCard,

    state,
  }
}
const App: React.FC = () => {
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

  const [, setY] = useSpring<SpringWindow>(windowFn)
  const getScrollContainer = () => {
    const c = document.querySelector('.modal-container')

    if (isModal && location.state && state.currentCard === location.state.id) {
      return c
    }
    return window
  }
  const getScrollTop = () => {
    const c = document.querySelector('.modal-container')
    if (isModal && location.state && state.currentCard === location.state.id) {
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
        <Header
          onUnselectCard={onUnselectCard}
          //  scrollContainer={getScrollContainer()}
          modal={modal}
          {...location}
        />
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
