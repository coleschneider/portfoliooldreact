import * as React from 'react'
import Transition, { TransitionStatus, EnterHandler } from 'react-transition-group/Transition'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { Button, SVGButton } from '../../theme/Elements'
import { PSecondary } from '../../theme/Typography'
import { ReactComponent as Close } from '../../assets/icons/Close.svg'
import usePrevious from '../../hooks/usePrevious'
import { Colors } from '../../theme/colors'
import Portal from '../Portal/Portal'
import { transitions, DIALOG_TRANSITION } from '../../theme/animations'

type Closefn = ({ close }: { close: () => void }) => void

interface Props {
  onOpenComplete?: EnterHandler
  title: string
  children: JSX.Element[] | string | Closefn | React.ReactNode
  onCloseComplete?: Function
  onConfirm?: (close: Function) => void
  onCancel?: (close: Function) => void
  confirmLabel?: string
  cancelLabel?: string
  isShown: boolean
  hasCancel?: boolean
  hasClose?: boolean
  width?: string | number
}

const TextContainer = styled.div`
  overflow-y: auto;
`

const CloseIcon = styled(Close)`
  fill: ${Colors.grey};
  width: 14px;
  height: 14px;
`

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-self: center;
`

const Title = styled.h4`
  flex: 1 1 0%;
  color: ${Colors.evergreen};
  letter-spacing: -0.07px;
  font-size: 20px;
  line-height: 24px;
  display: block;
  margin: 0;
  font-weight: 500;
`
const Container = styled.div<{ children: React.ReactNode; css: FlattenSimpleInterpolation }>`
  padding: 32px;
  bottom: 16px;
  right: 16px;
  background-color: ${Colors.white};
  position: fixed;
  width: 392px;
  border-radius: 5px;
  box-shadow: rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 16px 24px -8px;
  z-index: 3;
`

const ButtonGroup = styled.div`
  flex-direction: row-reverse;
  display: flex;
  flex-shrink: 0;
  margin-top: 24px;
`

/**
 * Returns a react portal given a title, children, and isShown prop. If isShown is false returns null.
 * All other parameters are optional.
 * @param {Props}
 * @returns
 */
function Dialog({
  isShown,
  title,
  confirmLabel = 'Learn More',
  children,
  onCancel = close => close(),
  onConfirm = close => close(),
  onCloseComplete = () => {},
  onOpenComplete = () => {},
  hasCancel = true,
  hasClose = true,
  cancelLabel = 'Close',
}: Props) {
  const [{ exiting, exited }, setState] = React.useState({
    exiting: false,
    exited: !isShown,
  })
  const prevShown = usePrevious(isShown)
  React.useEffect(() => {
    if (isShown !== prevShown) {
      setState({ exited: false, exiting })
    }
  }, [exiting, isShown, prevShown])

  const handleExited = () => {
    setState({
      exiting: false,
      exited: !isShown,
    })
    onCloseComplete()
  }

  const handleClose = () => setState({ exiting: true, exited })

  const handleConfirm = () => onConfirm(handleClose)

  const handleCancel = () => onCancel(handleClose)

  const renderChildren = (): React.ReactNode => {
    if (typeof children === 'function') {
      return children({ close: handleClose })
    }
    if (typeof children === 'string') {
      return <PSecondary>{children}</PSecondary>
    }
    return children
  }
  if (exited) return null
  return (
    <Portal id="portal-root">
      <Transition
        appear
        unmountOnExit
        timeout={DIALOG_TRANSITION}
        in={isShown && !exiting}
        onExited={handleExited}
        onEntered={onOpenComplete}
      >
        {(state: TransitionStatus) => {
          return (
            <Container css={transitions.dialogTransition[state]}>
              <TitleContainer>
                <Title>{title}</Title>
                <SVGButton onClick={handleClose}>
                  <CloseIcon />
                </SVGButton>
              </TitleContainer>
              <TextContainer>{renderChildren()}</TextContainer>
              <ButtonGroup>
                <Button primary onClick={handleConfirm}>
                  {confirmLabel}
                </Button>
                {hasCancel && <Button onClick={handleCancel}>{cancelLabel}</Button>}
              </ButtonGroup>
            </Container>
          )
        }}
      </Transition>
    </Portal>
  )
}

export default Dialog
