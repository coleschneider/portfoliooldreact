import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'
import { P, H3, TextBlock } from '../../theme/Typography'
import { CardImage } from '../Card/Card'
import { cardsById } from '../Card/cardsConfig'
import { CardContainerTransition, TransitionStateProps } from '../../theme/Elements'
import { media } from '../../theme/Grid/config'

interface PassProps extends Pick<Card, 'details'>, TransitionStateProps {}

const WorkDetails_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const WorkPage_Wrapper = styled.div<TransitionStateProps>`
  color: rgba(0, 0, 0, 0.87);
  z-index: 1;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  border-radius: 2px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  ${({ transitionState }) => CardContainerTransition[transitionState]}
`
const WorkPage_Container = styled.div`
  ${media.tablet`
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  `}
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
    <WorkDetails_Wrapper>
      <TextWrapper>
        {details.map(({ title, body }, i) => (
          <React.Fragment key={i}>
            <TextBlock>
              <H3>{title}</H3>
            </TextBlock>

            <P>{body}</P>
          </React.Fragment>
        ))}
      </TextWrapper>
    </WorkDetails_Wrapper>
  )
}

const WorkPage = ({ transitionState }: PassProps) => ({
  match: { params },
}: RouteComponentProps<{ workId: string }>) => {
  const { cardImage, placeholder, details } = cardsById[params.workId]
  // const imageSrc = useLazyImage(cardImage, placeholder)

  return (
    <WorkPage_Wrapper transitionState={transitionState}>
      <WorkPage_Container>
        <WrapImage>
          <CardImage src={cardImage} />
        </WrapImage>
        <WorkDetails transitionState={transitionState} details={details} />
      </WorkPage_Container>
    </WorkPage_Wrapper>
  )
}

export default WorkPage
