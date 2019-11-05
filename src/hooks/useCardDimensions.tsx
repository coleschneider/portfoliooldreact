import React from 'react';

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

  export default useCardDimensions