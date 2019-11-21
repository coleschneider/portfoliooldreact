import styled from 'styled-components'
import { Colors, primaryGradient, secondaryGradient, withHover } from './colors'

const fontColorMixin = ({ primary }: { primary?: boolean }) => `
color: ${primary ? Colors.darkBlue : Colors.white};
`

export const H1 = styled.h1`
  font: 700 48px/1.2 'Open Sans', sans-serif;
`
export const H2 = styled.h2`
  font: 700 32px/1.2 'Open Sans', sans-serif;
  ${fontColorMixin}
`
export const H3 = styled.h3`
  font: 700 24px/1.2 'Open Sans', sans-serif;
  ${fontColorMixin}
`
export const H4 = styled.h4`
  font: 700 20px/1.2 'Open Sans', sans-serif;
  ${fontColorMixin}
`
export const H5 = styled.h5`
  font: 500 18px/1.2 'Open Sans', sans-serif;
  ${fontColorMixin}
`
export const H6 = styled.h6`
  font: 500 16px/1.2 'Open Sans', sans-serif;
  text-transform: uppercase;
  ${fontColorMixin}
`

export const P = styled.p`
  ${fontColorMixin}
`

export const PSecondary = styled(P)`
  color: ${Colors.grey};
  /* box-sizing: border-box;
  letter-spacing: -0.05px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400; */
`
