/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import styled from 'styled-components'

import { RouteComponentProps } from 'react-router'
import { Pane } from '../../theme/Elements'
import { CardActionCreators } from '../../hooks/useCardDimensions/actions'
import Column from '../../theme/Grid/Column'
import { TextBlock, H6 } from '../../theme/Typography'
import GridContainer from '../../theme/Grid/Container'
import GridRow from '../../theme/Grid/Row'

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`

interface Props extends RouteComponentProps, Omit<CardActionCreators, 'updateCardDimensions'> {
  card: Card
  setResize: React.Dispatch<React.SetStateAction<boolean>>
  onUpdateCards: UpdateCardsCallback
  shouldResize: boolean
  currentCard: CurrentCardState
}

function getDimensionObject(node: HTMLDivElement): DimensionObject {
  const { top, right, bottom, left, width, height } = node.getBoundingClientRect()
  return { top, right, bottom, left, width, height }
}

function Card({ currentCard, onSelectCard, onUpdateCards, location, history, card, shouldResize, setResize }: Props) {
  const { id, description, cardImage } = card
  const element = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (shouldResize && element.current) {
      onUpdateCards(getDimensionObject(element.current), id)
      setResize(false)
    }
  }, [shouldResize])

  const handleClick = () => {
    if (element.current) {
      const dimensions = getDimensionObject(element.current)
      onSelectCard(id)
      onUpdateCards(dimensions, id)
      history.push({
        pathname: `/work/${id}`,
        state: {
          id,
          to: 'modal',
          background: location,
          meta: {
            from: dimensions,
          },
        },
      })
    }
  }

  return (
    <GridContainer>
      <GridRow reverse>
        <Column md={2} lg={4} xl={4}>
          <TextBlock>
            <H6>{description}</H6>
          </TextBlock>
        </Column>
        <Column md={6} lg={8} xl={8}>
          <Pane
            onClick={handleClick}
            level={2}
            hover
            ref={element}
            style={{ position: currentCard ? undefined : 'relative' }}
          >
            <CardImage src={cardImage} />
          </Pane>
        </Column>
      </GridRow>
    </GridContainer>
  )
}

export default Card
