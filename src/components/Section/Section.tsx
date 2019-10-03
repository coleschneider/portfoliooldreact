import * as React from 'react';
import styled, { css } from 'styled-components';
import { media, colors } from '../../theme';

export const Main = styled.main`
  display: block;
  ${media.tabletMin`
        margin-left: 280px;
    `}
`;
Main.displayName = 'Main';
export const Wrapper = styled.main`
  padding: 1rem;
  ${media.desktopMin`
        padding: 3rem;
    `}
`;
Wrapper.displayName = 'Wrapper';

export const Container = styled.div`
    ${media.orientationMin`
        max-width: 540px;
    `}
    ${media.tabletMin`
        max-width: 720px;
    `}
    ${media.desktopMin`
        max-width: 960px;
    `}
    ${media.desktopHDMin`
        max-width: 1140px;
    `}
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;
Container.displayName = 'Container';

export const Meta = styled.div`
  margin-bottom: 15px;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: ${colors.darkgrey};
  letter-spacing: 5px;
  font-weight: 500;
`;
Meta.displayName = 'Meta';
export const Heading = styled.h2`
  ${media.tablet`
        margin-bottom: 3em;
    `}
  font-size: 18px;
  margin-bottom: 4em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  position: relative;
  color: ${colors.black};
  font-family: 'Playfair Display';
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
Heading.displayName = 'Heading';

export const Description = styled.div`
  display: block;
  box-sizing: border-box;
`;
Description.displayName = 'Description';

export const column = css`
  flex-direction: column;
`;
export const row = css`
  flex-direction: row;
`;

export const FlexLayout = {
  regular: css`
    align-items: flex-start;
    display: flex;
    ${media.desktopMin`
    ${row}
    `}
    ${column}
  `,
  row: css`
    flex-wrap: wrap;
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  `
};
