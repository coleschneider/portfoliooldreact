import React from 'react'

export const {
  SELECT_CARD,
  UPDATE_CARDS,
  UNSELECT_CARD,
  INVALIDATE_DIMENSIONS,
  VALIDATE_DIMENSIONS,
}: CardActionTypes = {
  SELECT_CARD: 'SELECT_CARD',
  UPDATE_CARDS: 'UPDATE_CARDS',
  UNSELECT_CARD: 'UNSELECT_CARD',
  VALIDATE_DIMENSIONS: 'VALIDATE_DIMENSIONS',
  INVALIDATE_DIMENSIONS: 'INVALIDATE_DIMENSIONS',
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
  const invalidateDimensions = () =>
    dispatch({
      type: INVALIDATE_DIMENSIONS,
    })
  const validateDimensions = () =>
    dispatch({
      type: VALIDATE_DIMENSIONS,
    })
  return {
    onUnselectCard,
    validateDimensions,
    invalidateDimensions,
    onSelectCard,
    updateCardDimensions,
  }
}
export type CardActionCreators = ReturnType<typeof createCardActions>
export default createCardActions
