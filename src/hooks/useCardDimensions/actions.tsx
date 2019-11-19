import React from 'react'

export const { SELECT_CARD, UPDATE_CARDS, UNSELECT_CARD }: CardActionTypes = {
  SELECT_CARD: 'SELECT_CARD',
  UPDATE_CARDS: 'UPDATE_CARDS',
  UNSELECT_CARD: 'UNSELECT_CARD',
}
function createCardActions(dispatch: React.Dispatch<CardActions>) {
  const updateCardDimensions = (dimensions: DimensionObject, id: string) => {
    dispatch({
      type: UPDATE_CARDS,
      payload: { dimensions, id },
    })
  }
  const onSelectCard = (id: string) => {
    dispatch({
      type: SELECT_CARD,
      payload: { id },
    })
  }
  const onUnselectCard = () => {
    dispatch({
      type: UNSELECT_CARD,
    })
  }
  return {
    onUnselectCard,
    onSelectCard,
    updateCardDimensions,
  }
}

export default createCardActions
