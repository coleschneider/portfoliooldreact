import * as React from 'react'
import styled from 'styled-components'
import Row from '../../theme/Grid/Row'
import Card from '../Card/Card'

const Wrapper = styled.div`
  margin-top: 25px;
  padding: 1.5rem;
`
const ColumnFlex = styled.div`
  flex: 1 0 300px;
`
const WorkCards = ({ history, location, onUpdateCards }) => {
  return (
    <Wrapper>
      <Row>
        <ColumnFlex>
          <Card onUpdateCards={onUpdateCards} location={location} history={history} />
        </ColumnFlex>
        <ColumnFlex>
          <Card onUpdateCards={onUpdateCards} location={location} history={history} />
        </ColumnFlex>
      </Row>
    </Wrapper>
  )
}

export default WorkCards
