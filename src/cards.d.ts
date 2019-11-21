interface DimensionObject {
  width: number
  height: number
  top: number
  bottom: number
  left: number
  right: number
}
interface CardDetails {
  title: string
  body: string
}
interface Card {
  description: string
  id: string
  cardImage: string
  placeholder: string
  details: CardDetails[]
}
type DimensionsPayload = { id: string; dimensions: DimensionObject }

type CurrentCardState = null | string
type CardsByIdState = {
  [key: string]: DimensionObject
}
type UpdateCardsCallback = (dimensions: DimensionObject, id: string) => void
interface CardsState {
  currentCard: CurrentCardState
  cardsById: CardsByIdState
}

interface Action<T> {
  type: T
}

interface PayloadAction<T, P> extends Action<T> {
  type: T
  payload: P
}
type SELECT_CARD = 'SELECT_CARD'
type UPDATE_CARDS = 'UPDATE_CARDS'
type UNSELECT_CARD = 'UNSELECT_CARD'

type CardActionTypesUnion = SELECT_CARD | UPDATE_CARDS | UNSELECT_CARD

type CardActionTypes = {
  [K in CardActionTypesUnion]: K
}

type SelectCard = PayloadAction<'SELECT_CARD', { id: string }>
type UpdateCards = PayloadAction<'UPDATE_CARDS', DimensionsPayload>
type UnselectCard = Action<'UNSELECT_CARD'>

type CardActions = SelectCard | UnselectCard | UpdateCards
