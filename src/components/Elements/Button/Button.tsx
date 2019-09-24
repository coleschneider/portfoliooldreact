import * as React from 'react';
import styled from 'styled-components';
import { adjustColor, colors } from '../../../theme';
interface MixinProps {
    primary?: boolean;
    secondary?: boolean;
}

interface ButtonMixin extends MixinProps {
    background?: boolean;
}
interface FontMixin extends MixinProps {
    color?: string;
    hover?: boolean;
}

const buttonMixin = ({ primary, secondary, background }: ButtonMixin) => {
    if (primary) return `background: ${colors.primary};`;
    if (secondary) return `background: ${colors.secondary};`;
    return `background: ${background};`;
};
const hoverMixin = ({ primary, secondary }: FontMixin) => {
    const transition = `transition: background 400ms ease;`;
    if (primary)
        return `
    ${transition}
    :hover {
        background: ${adjustColor(colors.primary, -30)};
    }
    `;
    if (secondary)
        return `
    ${transition}
    :hover {
        background: ${adjustColor(colors.secondary, -30)};
    }
    `;
};
const fontColor = ({ primary, secondary, color, hover }: FontMixin) => {
    if (color) return ` color: ${color};`;
    if (primary) return `color: ${colors.secondary};`;
    if (secondary) return `color: ${colors.primary};`;
};

export const ButtonLink = styled.a<ButtonMixin & FontMixin>`
    font-weight: bold;
    padding: .375rem 1rem;
    height: 2.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    display: inline-block;
    cursor: pointer;
    line-height: 1.5;
    border-radius: .25rem;
    border: 1px solid transparent;
    user-select: none;
    vertical-align: middle;
    text-align: center;
    ${hoverMixin}
    ${fontColor}
    ${buttonMixin}
`;
