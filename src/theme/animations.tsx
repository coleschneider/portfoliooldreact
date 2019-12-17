import React from 'react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'
import { useSpring } from 'react-spring'

const DIALOG_TRANSITION = 300

type StyleProps = {
  [key in TransitionStatus]: FlattenSimpleInterpolation
}
interface Styles extends Omit<StyleProps, 'exited' | 'unmounted'> {
  [k: string]: FlattenSimpleInterpolation
}

const transitions: {
  cardTransition: Styles
} = {
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

interface SpringWindow {
  onFrame: ({ y }: { y: number }) => void
  y: number
}

const springs = {
  trailCards: () => ({
    config: { duration: 400, mass: 1, tension: 5000, friction: 250 },
    opacity: 1,
    x: 0,
    height: 80,
  }),
  windowFn: (): SpringWindow => ({ y: 0, onFrame: ({ y }) => window.scroll(0, y) }),
}

function useArrowClick(container: string, isModal: boolean) {
  const containerElement = document.getElementById(container)
  const [, setY] = useSpring<SpringWindow>(springs.windowFn)
  const getScrollContainer = () => {
    const modalContainer = document.getElementById(container)
    if (isModal && modalContainer) {
      return modalContainer
    }
    return window
  }
  const getScrollTop = () => {
    const c = document.getElementById(container)
    if (isModal && c) {
      return c.scrollTop
    }
    return window.scrollY
  }

  const onFrame = ({ y }: { y: number }) => {
    return getScrollContainer().scroll(0, y)
  }
  const onClick = () => {
    setY({
      y: 0,
      reset: true,
      from: { y: getScrollTop() },
      onFrame,
    })
  }
  return { onClick }
}
export { transitions, DIALOG_TRANSITION, springs, useArrowClick }
