import React from 'react'
// eslint-disable-next-line
import {Helmet, HelmetProvider} from 'react-helmet-async'

import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import { useLocation } from 'react-router'
import App from './App'

import useCardDimensions, { CardsProvider } from '../hooks/useCardDimensions/useCardDimensions'

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

const Routes: React.FC = props => {
  const location = useLocation()

  const background = location.state && location.state.background

  const isModal = background && location.state.to === 'modal'

  const initialCardState = isModal
    ? {
        currentCard: location.state.id,
        cardsById: {
          [location.state.id]: location.state.meta.from,
        },
        validDimensions: false,
      }
    : undefined

  const isModalContainer = isModal && initialCardState.currentCard === location.state.id

  return (
    <HelmetProvider>
      <Helmet>
        <body className={isModal ? 'overflow-page' : undefined} />
      </Helmet>
      <CardsProvider initialState={initialCardState}>
        <App initialCardState={initialCardState} />
      </CardsProvider>
    </HelmetProvider>
  )
}

export default Routes
