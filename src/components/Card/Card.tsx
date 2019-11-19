/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import styled from 'styled-components'
import { animated, useTrail, SpringConfig } from 'react-spring'
import { RouteComponentProps } from 'react-router'
import withNavigation from './withNavigation'
import { Pane } from '../../theme/Elements'
import { springs } from '../../theme/animations'
import useResizeObserver from '../../hooks/useResizeObserver'
import useLazyImage from '../../hooks/useLazyImage'
import usePrevious from '../../hooks/usePrevious'
import useDimensions from '../../hooks/useMeasure/useMeasure'

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`
const ColumnFlex = styled.div`
  margin: 16px;
  flex: 1 1 250px;
`
const ImagePopUp = styled.a`
  position: absolute;
  top: 0;
  /* bottom: 6px; */
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

type Props = RouteComponentProps & Card & { onUpdateCards: UpdateCardsCallback }

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

function Card({
  currentCard,
  onSelectCard,
  onUpdateCards,
  location,
  history,
  id,
  cardImage,
  description,
  placeholder,
  shouldResize,
  setResize,
}: Props) {
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
    const { top, right, bottom, left, width, height } = element.current.getBoundingClientRect()
    onSelectCard(id)
    onUpdateCards({ top, right, bottom, left, width, height }, id)
    history.push({
      pathname: `/work/${id}`,
      state: {
        id,
        to: 'modal',
        background: location,
        meta: {
          from: { top, right, bottom, left, width, height },
        },
      },
    })
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
      ref={ref => (element.current = ref)}
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
