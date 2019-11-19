/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import styled from 'styled-components'
import { animated, useTrail, SpringConfig } from 'react-spring'
import { RouteComponentProps } from 'react-router'
import { Pane } from '../../theme/Elements'
import { springs } from '../../theme/animations'
import { CardActionCreators } from '../../hooks/useCardDimensions/actions'

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const ImagePopUp = styled.a`
  position: absolute;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.2s ease;
  :hover {
    opacity: 1;
  }
`

interface Props extends RouteComponentProps, Omit<CardActionCreators, 'updateCardDimensions'> {
  card: Card
  setResize: React.Dispatch<React.SetStateAction<boolean>>
  onUpdateCards: UpdateCardsCallback
  shouldResize: boolean
  currentCard: CurrentCardState
}
interface TrailAnimation {
  config: SpringConfig
  opacity: number
  x: number
  height: number
}

function getDimensionObject(node: HTMLDivElement): DimensionObject {
  const { top, right, bottom, left, width, height } = node.getBoundingClientRect()
  return { top, right, bottom, left, width, height }
}

function Card({ currentCard, onSelectCard, onUpdateCards, location, history, card, shouldResize, setResize }: Props) {
  const { id, description, cardImage, placeholder } = card
  // const imageSrc = useLazyImage(cardImage, placeholder)
  const element = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (shouldResize && element.current) {
      onUpdateCards(getDimensionObject(element.current), id)
      setResize(false)
    }
  }, [shouldResize])

  const [trail, set] = useTrail<TrailAnimation>(description.length, springs.trailCards)

  React.useEffect(() => {
    set({
      opacity: 1,
      x: 0,
      height: 80,
    })
  }, [location, set])
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
  const animateOnClick = () => {
    const completed = []
    set({
      opacity: 0,
      x: -200,
      height: 80,
      onRest: item => {
        completed.push(item)
        if (completed.length === description.length) {
          // eslint-disable-next-line
          handleClick()
        }
      },
    })
  }
  return (
    <Pane
      onClick={animateOnClick}
      level={2}
      hover
      ref={element}
      style={{ position: currentCard ? undefined : 'relative' }}
    >
      <CardImage src={cardImage} />
      <ImagePopUp>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={description[index]}
            style={{
              ...rest,
              color: 'white',
              whiteSpace: 'pre',
              fontSize: '1.5em',
              transform: x.interpolate(y => `translate3d(0,${y}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{description[index]}</animated.div>
          </animated.div>
        ))}
      </ImagePopUp>
    </Pane>
  )
}

export default Card
