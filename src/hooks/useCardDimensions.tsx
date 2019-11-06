import React from 'react'

const initialState: CardsState = { cardsById: {}, currentCard: null }

function useCardDimensions(initalState: CardsState) {
  const currentCard = (state: CurrentCardState, action: CardActions): CurrentCardState => {
    switch (action.type) {
      case 'SELECT_CARD':
        return action.payload.id
      case 'UNSELECT_CARD':
        return null
      default:
        return state
    }
  }
  const cardsById = (state: CardsByIdState, action: CardActions): CardsByIdState => {
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

  const cardsReducer = (state: CardsState, action: CardActions) => ({
    cardsById: cardsById(state.cardsById, action),
    currentCard: currentCard(state.currentCard, action),
  })
  const [state, dispatch] = React.useReducer(cardsReducer, initialState)

  const updateCardDimensions = (dimensions: CardDimensions, id: string) => {
    dispatch({
      type: 'UPDATE_CARDS',
      payload: { dimensions, id },
    })
  }
  const onSelectCard = (id: string) => {
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

export default useCardDimensions
