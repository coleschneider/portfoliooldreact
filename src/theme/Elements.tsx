import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'
import { TransitionStatus } from 'react-transition-group/Transition'
import { Colors, primaryGradient, secondaryGradient, withHover } from './colors'
import Icons from './Icons'
import { media } from './Grid/config'

interface ButtonProps {
  primary?: boolean
}

interface ButtonIconProps extends ButtonProps {
  icon: Icons
}

const buttonStyles = (props: ButtonProps) => css`
  margin-left: 8px;
  vertical-align: middle;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: white;
  ${props.primary ? primaryGradient : secondaryGradient}
  color: ${props.primary ? Colors.white : '#425A70'};
  height: 32px;
  padding-right: 16px;
  padding-left: 16px;
  letter-spacing: 0;
  line-height: 32px;
  font-size: 12px;
  margin-right: 0;
  flex-wrap: nowrap;
  align-items: center;
  display: inline-flex;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  border-radius: 3px;
  font-weight: 500;
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);
`
const withIcon = (component: React.FunctionComponent<any>) => styled(component)`
  margin-left: 8px;
  height: 12px;
  width: 12px;
  margin-right: -2px;
`

type ExternalLink = {
  to?: string
  href: string
  target: string
}

type InternalLink = {
  to: string
  href?: never
  target?: never
}

export const Button = styled.button`
  ${buttonStyles}
`
export const BLink = styled(Link)`
  ${buttonStyles}
`
export const ExternalBLink = styled.a`
  ${buttonStyles}
`

type BaseProps = {
  icon: Icons
  children: React.ReactNode
} & ButtonProps

type BProps = BaseProps & (InternalLink | ExternalLink)

export const ButtonIcon: React.FC<BProps> = ({ icon, children, ...rest }) => {
  const IconComponent = withIcon(Icons[icon])
  let LinkComponent
  if (rest.to) {
    LinkComponent = BLink
  } else {
    LinkComponent = ExternalBLink
  }
  return (
    <LinkComponent {...rest}>
      {children}
      <IconComponent />
    </LinkComponent>
  )
}

export const SVGButton = styled(Button)`
  color: #1070ca;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  outline: none;
  border: none;
  :hover {
    background-color: ${Colors.transparentDarken};
    background-image: none;
  }
`
export const Pane = styled.div`
  background-color: ${Colors.white};
  width: 100%;
  ${withHover}
  z-index: 1;
  border-radius: 5px;
  transition-duration: 150ms;
  transition-property: box-shadow, transform, border;
  transition-timing-function: cubic-bezier(0, 0.2, 1);
`

const enterTransition = css`
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: auto;
`
type CardTransitionStates = Exclude<TransitionStatus, 'unmounted'>

type CardTransitions = {
  [k in CardTransitionStates]: FlattenSimpleInterpolation
}
interface Transitions extends CardTransitions {
  [k: string]: FlattenSimpleInterpolation
}
export const cardTransitions: Partial<Transitions> = {
  entered: enterTransition,
  // entering: enterTransition,
  exited: css`
    overflow: hidden;
    z-index: 0;
  `,
  exiting: css``,
}

export interface TransitionStateProps {
  transitionState: TransitionStatus
}
export const ModalContainer = styled.div<TransitionStateProps>`
  position: fixed;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: 2;
  :empty {
    display: none;
  }
  &.modal-appear {
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    overflow: auto;
  }

  &.modal-enter-active {
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    overflow: auto;
  }
`

const cardContainerEnter = css`
  top: 90px;
  padding-bottom: 1rem;
  position: relative;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
`
const cardContainerLeave = css`
  margin-left: 0 !important;
  margin-right: 0 !important;
`
export const CardContainerTransition: Partial<Transitions> = {
  entered: cardContainerEnter,
  entering: cardContainerEnter,
  exited: cardContainerLeave,
  exiting: cardContainerLeave,
}

export const AboutTextContainer = styled.div`
  margin-top: 1rem;
`
