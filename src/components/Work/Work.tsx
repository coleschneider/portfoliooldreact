import * as React from 'react'
import styled from 'styled-components'
import Row from '../../theme/Grid/Row'
import useResizeObserver from '../../hooks/useResizeObserver'
import Col from '../../theme/Grid/Column'
import Card from '../Card/Card'

const Wrapper = styled.div`
  margin-top: 25px;
  padding: 1.5rem;
`
const ColumnFlex = styled.div`
  flex: 1 0 300px;
`
const WorkCards = ({ history, location, onUpdateCards }) => {
  const refMap = new Map()
  const handleGetCardRef = (id, ref) => refMap.set(id, ref)

  return (
    <Wrapper>
      <Row>
        <ColumnFlex>
          <Card
            onUpdateCards={onUpdateCards}
            location={location}
            history={history}
            // getRef={ref => handleGetCardRef(0, ref)}
            // handleClick={() => handleClick(0)}
          />
        </ColumnFlex>
        <ColumnFlex>
          <Card
            onUpdateCards={onUpdateCards}
            location={location}
            history={history}
            // getRef={ref => handleGetCardRef(0, ref)}
            // handleClick={() => handleClick(0)}
          />
        </ColumnFlex>
      </Row>
    </Wrapper>
  )
}

export default WorkCards
