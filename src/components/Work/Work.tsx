import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import Row from '../../theme/Grid/Row'
import Card from '../Card/Card'
import cardsConfig from '../Card/cardsConfig'

const Wrapper = styled.div`
  margin-top: 25px;
  padding: 1.5rem;
`
const ColumnFlex = styled.div`
  flex: 1 0 300px;
`

interface Props extends RouteComponentProps {
  onUpdateCards: DimensionCallback
}

const WorkCards = ({ history, location, onUpdateCards }: Props) => {
  return (
    <Wrapper>
      <Row>
        {cardsConfig.map(card => {
          return (
            <ColumnFlex>
              <Card {...card} onUpdateCards={onUpdateCards} location={location} history={history} />
            </ColumnFlex>
          )
        })}
      </Row>
    </Wrapper>
  )
}

export default WorkCards
