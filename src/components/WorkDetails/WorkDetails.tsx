import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'
import { TransitionStatus } from 'react-transition-group/Transition'
import { P, H2 } from '../../theme/Typography'
import { CardImage } from '../Card/Card'
import { cardsById } from '../Card/cardsConfig'
import useLazyImage from '../../hooks/useLazyImage'
import { CardContainerTransition, TransitionStateProps } from '../../theme/Elements'

interface DetailProps extends Pick<Card, 'details'>, TransitionStateProps {}
interface Props extends RouteComponentProps<{ workId: string }>, TransitionStateProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ImageWrapper = styled.div<TransitionStateProps>`
  color: rgba(0, 0, 0, 0.87);
  z-index: 1;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  ${({ transitionState }) => CardContainerTransition[transitionState]}
`
const TextWrapper = styled.div`
  line-height: 1.8;
  margin: 0 24px;
`

const WrapImage = styled.div`
  margin: 0 auto;
  width: 100%;
`

const WorkDetails = ({ transitionState, details }: DetailProps) => {
  if (transitionState === 'exited' || transitionState === 'exiting') {
    return null
  }
  return (
    <Wrapper>
      <TextWrapper>
        {details.map(({ title, body }) => (
          <>
            <H2 primary>{title}</H2>
            <P primary>{body}</P>
          </>
        ))}
      </TextWrapper>
    </Wrapper>
  )
}

const WorkPage = ({ transitionState, match: { params } }: Props) => {
  const { cardImage, placeholder, details } = cardsById[params.workId]
  // const imageSrc = useLazyImage(cardImage, placeholder)
  return (
    <ImageWrapper transitionState={transitionState}>
      <WrapImage>
        <CardImage src={cardImage} />
      </WrapImage>

      <WorkDetails transitionState={transitionState} details={details} />
    </ImageWrapper>
  )
}

export default WorkPage
