import * as React from 'react'
import { TransitionStatus, EnterHandler } from 'react-transition-group/Transition'
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
const CARD_TRANSITION = 300
type StyleProps = {
  [key in TransitionStatus]: FlattenSimpleInterpolation
}
interface Styles extends Omit<StyleProps, 'exited' | 'unmounted'> {
  [k: string]: FlattenSimpleInterpolation
}

const transitions: {
  dialogTransition: Styles
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
}

export { transitions, DIALOG_TRANSITION }
