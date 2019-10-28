import * as React from 'react'
import styled from 'styled-components'
import { animated, useTrail, SpringConfig } from 'react-spring'
import { RouteComponentProps } from 'react-router'
import { Pane } from '../../theme/Elements'
import { springs } from '../../theme/animations'
import useResizeObserver from '../../hooks/useResizeObserver'
import useLazyImage from '../../hooks/useLazyImage'

export const CardWrapper = styled(Pane)`
  height: 400px;
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  max-width: 680px;
  border-radius: 7px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  background-position: 50% center;
`
const ImagePopUp = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 7px;
  transition: opacity 0.2s ease;
  :hover {
    opacity: 1;
  }
`

type Props = RouteComponentProps & Card & { onUpdateCards: DimensionCallback }

interface TrailAnimation {
  config: SpringConfig
  opacity: number
  x: number
  height: number
}

function Card({ onUpdateCards, location, history, id, cardImage, description, placeholder }: Props) {
  const imageSrc = useLazyImage(cardImage, placeholder)
  const cardRef = React.useRef<HTMLDivElement>(null)

  const [cardDimensions, setDimensions] = React.useState({})

  const updateDimensions: DimensionCallback = dims => {
    setDimensions(dims)
    onUpdateCards(dims)
  }
  useResizeObserver(cardRef, React.useCallback(updateDimensions, [cardDimensions, onUpdateCards]))

  const handleClick = () => {
    history.push({
      pathname: `/work/${id}`,
      state: {
        background: location,
        to: 'modal',
        meta: {
          from: {
            ...cardDimensions,
          },
        },
      },
    })
  }

  const [trail, set] = useTrail<TrailAnimation>(description.length, springs.trailCards)

  React.useEffect(() => {
    set({
      opacity: 1,
      x: 0,
      height: 80,
    })
  }, [location, set])

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
    <CardWrapper
      ref={cardRef}
      style={{
        backgroundImage: `url(${imageSrc})`,
        position: 'relative',
      }}
      onClick={animateOnClick}
      hover
    >
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
    </CardWrapper>
  )
}

export default Card
