import * as React from 'react'
import { useScroll } from 'react-use-gesture'
import { useSpring, animated } from 'react-spring'
import { cardsConfig } from '../Card/cardsConfig'
import Card from '../Card/Card'

const clamp = (value: number, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value
  }
  return value < -clampAt ? -clampAt : value
}

const Slideshow = props => {
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }))

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`,
    })
  })

  return (
    <>
      <div className="container" {...bind()}>
        {cardsConfig.map(card => (
          <animated.div
            className="card"
            style={{
              ...style,
              //   backgroundImage: `url(${cardImage})`,
            }}
          >
            <Card {...props} {...card} />
          </animated.div>
        ))}
      </div>
    </>
  )
}

export default Slideshow
