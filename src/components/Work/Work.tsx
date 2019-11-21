/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import { H2 } from '../../theme/Typography'
import Card from '../Card/Card'
import { cardsConfig } from '../Card/cardsConfig'
import { CardActionCreators } from '../../hooks/useCardDimensions/actions'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

interface Props extends RouteComponentProps, CardActionCreators {
  onUpdateCards: UpdateCardsCallback
  currentCard: CurrentCardState
}

const WorkCards = (props: Props) => {
  const [shouldResize, setResize] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setResize(true)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Wrapper>
      <H2 primary>Some of my work:</H2>
      {cardsConfig.map(card => {
        return <Card key={card.id} card={card} {...props} setResize={setResize} shouldResize={shouldResize} />
      })}
    </Wrapper>
  )
}

export default WorkCards
