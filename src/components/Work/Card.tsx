import * as React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  isOpen: boolean
  cardId: string
}

const imageOpenMixin = ({ isOpen }: Props) =>
  isOpen &&
  css`
    opacity: 0;
    transform: translate3d(0px, -40px, 0px);
  `
const borderOpenMxin = ({ isOpen }: Props) =>
  isOpen &&
  css`
    opacity: 0;
    transform: scale(1.3);
  `

const Container = styled.div<Props>`
  width: 92%;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  transition: opacity 200ms linear 320ms, transform 200ms ease-out 320ms;
  position: relative;
  background: #eb5160;
  color: #fff;
  cursor: pointer;
  margin-bottom: 60px;
`
const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6px;
  border: 1px solid #fff;
  opacity: 0.5;
  left: -6px;
  top: -6px;
  ${borderOpenMxin}
`

const CardImage = styled.img`
  width: 90%;
  position: absolute;
  top: -6%;
  left: -6%;
  ${imageOpenMixin}
`
const CardText = styled.h1`
  position: relative;
  padding: 190px 0px 100px 10px;
  width: 90%;
  transform: ${({ isOpen }) => (!isOpen ? 'translate3d(20%, 0px, 0px)' : 'translate3d(20%, -40px, 0px)')};
  opacity: ${({ isOpen }) => (!isOpen ? 1 : 0)};
  transition: opacity 200ms linear 120ms, transform 200ms ease-in 120ms;
`

function Card({ isOpen, cardId, setFirstRef, handleClick }: Props) {
  return (
    <Container ref={setFirstRef} onClick={handleClick}>
      <Border isOpen={isOpen === cardId} />
      <CardImage isOpen={isOpen === cardId} src="https://www.blend.com/wp-content/uploads/2017/06/blend-logotype.png" />
      <CardText isOpen={isOpen === cardId}>Hey now, you're an allstar</CardText>
    </Container>
  )
}

export default Card
