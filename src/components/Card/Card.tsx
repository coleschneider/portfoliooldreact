import * as React from 'react'
import styled, { css } from 'styled-components'
import { animated, useTrail } from 'react-spring'
import { useHistory } from 'react-router-dom'
import { Pane } from '../../theme/Elements'
import useResizeObserver from '../../hooks/useResizeObserver'

export const CardWrapper = styled(Pane)`
  height: 400px;
  /* background-size: cover; */
  background-repeat: no-repeat;
  border-radius: 7px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  background-position: 50% center;
  background-image: url(https://blend.com/wp-content/uploads/2019/09/Blend-OG-1200x630_5.png);
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

const items = ['Software ', 'Engineer']
const config = { duration: 400, mass: 1, tension: 5000, friction: 250 }

function Card({ getRef, onUpdateCards, location }) {
  const history = useHistory()
  const { ref, height, width } = useResizeObserver({ update: onUpdateCards })

  const handleClick = () => {
    const { top, right, bottom, left, width, height } = ref.current.getBoundingClientRect()
    history.push({
      pathname: `/work/${0}`,
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
            height,
          },
        },
      },
    })
  }

  const [trail, set, stop] = useTrail(items.length, () => ({
    config,
    opacity: 1,
    x: 0,
    height: 80,
  }))

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
        if (completed.length === items.length) {
          // eslint-disable-next-line
          stop();
          handleClick()
        }
      },
    })
  }

  // getRef(ref)
  return (
    // eslint-disable-next-line
    <CardWrapper
      // eslint-disable-next-line
      ref={ref}
      css={css`
        position: relative;
      `}
      onClick={animateOnClick}
      hover
      level={0}
    >
      <ImagePopUp>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            style={{
              ...rest,
              color: 'white',
              whiteSpace: 'pre',
              fontSize: '1.5em',
              transform: x.interpolate(y => `translate3d(0,${y}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </ImagePopUp>
    </CardWrapper>
  )
}

export default Card
