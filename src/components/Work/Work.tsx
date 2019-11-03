import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import Row from '../../theme/Grid/Row'
import Card from '../Card/Card'
import { cardsConfig } from '../Card/cardsConfig'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ColumnFlex = styled.div`
  margin: 16px;
  flex: 1 1 250px;
`

interface Props extends RouteComponentProps {
  onUpdateCards: DimensionCallback
}

const WorkCards = (props: Props) => {
  const [cardDimensions, setCardDimensions] = React.useState({})
const handleSetDimensions = React.useCallback((dimensions, id) => {
  setCardDimensions({
    ...cardDimensions,
    [id]: dimensions
  })
}, [])
  return (
    <Wrapper>
      {cardsConfig.map(card => {
        return (
          <ColumnFlex key={card.id}>
            <Card
              setCardDimensions={handleSetDimensions}
              {...card}
              {...props}
            />
          </ColumnFlex>
        )
      })}
    </Wrapper>
  )
}

export default WorkCards
