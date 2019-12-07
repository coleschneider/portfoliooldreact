import styled, { css } from 'styled-components'
import { Colors } from './colors'

export const TextBlock = styled.div`
  box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
  padding-left: 23px;
  margin-bottom: 20px;
  margin-top: 20px;
  word-break: break-word;
`
export const H1 = styled.h1`
  font: 700 48px/1.2 'Open Sans', sans-serif;
`
export const H2 = styled.h2`
  font: 700 32px/1.2 'Open Sans', sans-serif;
`
export const H3 = styled.h3`
  font: 700 24px/1.2 'Open Sans', sans-serif;
`
export const H4 = styled.h4`
  font: 700 20px/1.2 'Open Sans', sans-serif;
`
export const H5 = styled.h5`
  font: 500 18px/1.2 'Open Sans', sans-serif;
`
export const H6 = styled.h6`
  font: 500 16px/1.2 'Open Sans', sans-serif;
  text-transform: uppercase;
`

export const subHeader = css`
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
`

export const P = styled.p``
export const CardLink = styled.a`
  display: inline;
  margin: 10px 30px 5px 0;
  border-bottom: 1px dashed;
  font-weight: 500;
  line-height: 2.5;
  text-decoration: none;
  cursor: pointer;
  color: ${Colors.primaryColor};
`
