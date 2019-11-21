import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'
import { TransitionStatus } from 'react-transition-group/Transition'
import { P, H3, TextBlock } from '../../theme/Typography'
import { CardImage } from '../Card/Card'
import { cardsById } from '../Card/cardsConfig'
import useLazyImage from '../../hooks/useLazyImage'
import { CardContainerTransition, TransitionStateProps } from '../../theme/Elements'

// interface DetailProps extends Pick<Card, 'details'>, TransitionStateProps {}

interface PassProps extends Pick<Card, 'details'>, TransitionStateProps {}

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
  max-width: 800px;
  ${({ transitionState }) => CardContainerTransition[transitionState]}
`
const TextWrapper = styled.div`
  line-height: 1.8;
`

const WrapImage = styled.div`
  margin: 0 auto;
  width: 100%;
`

const WorkDetails = ({ transitionState, details }: PassProps) => {
  if (transitionState === 'exited' || transitionState === 'exiting') {
    return null
  }
  return (
    <Wrapper>
      <TextWrapper>
        {details.map(({ title, body }) => (
          <>
            <TextBlock>
              <H3>{title}</H3>
            </TextBlock>

            <P>{body}</P>
          </>
        ))}
      </TextWrapper>
    </Wrapper>
  )
}

const WorkPage = ({ transitionState }: PassProps) => ({
  match: { params },
}: RouteComponentProps<{ workId: string }>) => {
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
