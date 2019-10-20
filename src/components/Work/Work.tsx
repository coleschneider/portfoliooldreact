import * as React from 'react'
import styled from 'styled-components'
import Row from '../../theme/Grid/Row'
import Col from '../../theme/Grid/Column'
import Card from '../Card/Card'

const Wrapper = styled.div`
  margin-top: 25px;
  padding: 1.5rem;
`

const WorkCards = ({ history, location }) => {
  const refMap = new Map()
  const handleGetCardRef = (id, ref) => refMap.set(id, ref)

  const handleClick = (id) => {
    const { top, right, bottom, left, width, height } = refMap.get(id).getBoundingClientRect()

    history.push({
      pathname: `/work/${id}`,
      state: {
        background: location,
        to: 'modal',
        meta: {
          from: {
            top,
            right,
            bottom,
            left,
            width,
            height
          }
        }
      }
    })
  }
  return (
    <Wrapper>
      <Row>
        <Col xs={4} sm={4}>
          <Card
            location={location}
            getRef={(ref) => handleGetCardRef(0, ref)}
            handleClick={() => handleClick(0)}
          />
        </Col>
        <Col xs={4} sm={4}>
          <Card
            location={location}
            getRef={(ref) => handleGetCardRef(1, ref)}
            handleClick={() => handleClick(1)}
          />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default WorkCards
