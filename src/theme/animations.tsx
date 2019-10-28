import React from 'react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'

const animationPatterns = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const openAnimation = keyframes`
to {
  transform: translateY(0);
}
from {
  transform: translateY(100%);
}
`
const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`
const DIALOG_TRANSITION = 300

type StyleProps = {
  [key in TransitionStatus]: FlattenSimpleInterpolation
}
interface Styles extends Omit<StyleProps, 'exited' | 'unmounted'> {
  [k: string]: FlattenSimpleInterpolation
}

const transitions: {
  dialogTransition: Styles
  cardTransition: Styles
} = {
  dialogTransition: {
    entering: css`
      animation: ${openAnimation} ${DIALOG_TRANSITION}ms ${animationPatterns.spring} both;
    `,
    entered: css`
      animation: ${openAnimation} ${DIALOG_TRANSITION}ms ${animationPatterns.spring} both;
    `,
    exiting: css`
      animation: ${closeAnimation} 120ms ${animationPatterns.acceleration} both;
    `,
  },
  cardTransition: {
    entering: css`
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      overflow: auto;
    `,
    entered: css`
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      overflow: auto;
    `,
  },
}
const springs = {
  trailCards: () => ({
    config: { duration: 400, mass: 1, tension: 5000, friction: 250 },
    opacity: 1,
    x: 0,
    height: 80,
  }),
}

export { transitions, DIALOG_TRANSITION, springs }
