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
`
const TextWrapper = styled.div`
  line-height: 1.8;
  max-width: 680px;
  margin: 0 24px;
`

const WrapImage = styled.div`
  margin: 0 auto;
  width: 100%;

  max-width: 680px;
`

const WorkDetails = ({ match: { params } }: RouteComponentProps<{ workId: string }>) => {
  const { cardImage, placeholder } = cardsById[params.workId]

  const imageSrc = useLazyImage(cardImage, placeholder)

  return (
    <ImageWrapper className="work-container">
      <WrapImage>
        <CardImage src={imageSrc} />
      </WrapImage>

      <Wrapper>
        <TextWrapper>
          <H2 primary>September - December Blend (Software Engineer Internship)</H2>
          <P primary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel,
            venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer
            bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet
            purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae,
            euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.
          </P>

          <H2 primary>Development</H2>
          <P primary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel,
            venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer
            bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet
            purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae,
            euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.
          </P>

          <H2 primary>Testing</H2>
          <P primary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel,
            venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer
            bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet
            purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae,
            euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.
          </P>
        </TextWrapper>
      </Wrapper>
    </ImageWrapper>
  )
}

export default WorkDetails
