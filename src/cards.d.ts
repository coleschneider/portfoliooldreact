type CardDimensions = DOMRect | ClientRect;

interface Card {
    description: string[]
    id: string | number
    cardImage: string
    placeholder: string
}
type DimensionsPayload = {id: string, dimensions: CardDimensions}
type CurrentCardState = null | string
type CardsByIdState = {
    [key: string]: 
}
interface CardsState {
    currentCard: CurrentCardState;
    cardsById: CardsByIdState
}

interface Action<T> {
    type: T;
}

interface PayloadAction<T, P> extends Action<T> {
    type: T;
    payload: P
}

type SelectCard = PayloadAction<'SELECT_CARD', {id: string}>
type UpdateCards = PayloadAction<'UPDATE_CARDS', DimensionsPayload>
type UnselectCard = Action<'UNSELECT_CARD'>

type CardActions = SelectCard | UnselectCard | UpdateCards