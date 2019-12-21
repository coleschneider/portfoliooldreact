/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import { H2, H6, TextBlock } from '../../theme/Typography'
import Card from '../Card/Card'
import { cardsConfig } from '../Card/cardsConfig'
import { CardActionCreators } from '../../hooks/useCardDimensions/actions'
import { media } from '../../theme/Grid/config'
import { CardsContext } from '../../hooks/useCardDimensions/useCardDimensions'

const Work_Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 120px;
`
const Work_Container = styled.div`
  ${media.tablet`
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  `}
`

interface Props extends RouteComponentProps, CardActionCreators {
  onUpdateCards: UpdateCardsCallback
  currentCard: CurrentCardState
}

const WorkCards = (props: Props) => {
  const {
    onSelectCard,
    updateCardDimensions,
    state: { currentCard },
  } = React.useContext(CardsContext)
  const [shouldResize, setResize] = React.useState(false)
  const [height, setHeight] = React.useState(window.innerHeight)
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => {
      if (height !== window.innerHeight || width !== window.innerWidth) {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
        setResize(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const handleResize = React.useCallback(
    id => {
      console.log(id, shouldResize)
    },
    [shouldResize],
  )
  return (
    <Work_Wrapper>
      <Work_Container>
        <TextBlock>
          <H2>Work</H2>
          <H6>Some of my internships, projects, and non-profit projects</H6>
        </TextBlock>
        {cardsConfig.map(card => {
          return <Card key={card.id} card={card} {...props} setResize={handleResize} shouldResize={shouldResize} />
        })}
      </Work_Container>
    </Work_Wrapper>
  )
}

export default WorkCards
