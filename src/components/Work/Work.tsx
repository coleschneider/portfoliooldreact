import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import Row from '../../theme/Grid/Row'
import Card from '../Card/Card'
import cardsConfig from '../Card/cardsConfig'

const Wrapper = styled.div`
  margin-top: 67px;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`
const ColumnFlex = styled.div`
  flex: 0 1 680px;
  margin: 20px 20px 0 0;
`

interface Props extends RouteComponentProps {
  onUpdateCards: DimensionCallback
}

const WorkCards = ({ history, location, onUpdateCards }: Props) => {
  return (
    <Wrapper>
      {cardsConfig.map(card => {
        return (
          <ColumnFlex key={card.id}>
            <Card {...card} onUpdateCards={onUpdateCards} location={location} history={history} />
          </ColumnFlex>
        )
      })}
    </Wrapper>
  )
}

export default WorkCards
