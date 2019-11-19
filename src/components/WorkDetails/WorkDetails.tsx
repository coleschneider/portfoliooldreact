import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'
import { P, H2 } from '../../theme/Elements'
import { CardImage } from '../Card/Card'
import { cardsById } from '../Card/cardsConfig'
import useLazyImage from '../../hooks/useLazyImage'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ImageWrapper = styled.div`
  color: rgba(0, 0, 0, 0.87);
  z-index: 1;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`
const TextWrapper = styled.div`
  line-height: 1.8;
  margin: 0 24px;
`

const WrapImage = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`

const WorkDetails = ({ match: { params } }: RouteComponentProps<{ workId: string }>) => {
  const { cardImage, placeholder, details } = cardsById[params.workId]

  const imageSrc = useLazyImage(cardImage, placeholder)

  return (
    <ImageWrapper className="work-container">
      <WrapImage>
        <CardImage src={imageSrc} />
      </WrapImage>

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
    </ImageWrapper>
  )
}

export default WorkDetails
