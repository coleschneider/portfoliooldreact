import * as React from 'react';
import {animated, AnimatedValue} from 'react-spring';
import styled, {css, CSSProperties} from 'styled-components'
import { config } from '../../theme';
type OverwriteKeys<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] };
const BarCSS = css`
    height: 3px;
    width: 40px;
`

const TopBar = styled(animated.rect)`
   ${BarCSS}
`
const CenterBar = styled(animated.rect)`
   ${BarCSS}
`
const BottomBar = styled(animated.rect)`
${BarCSS}
`


const HamburgerMenu = styled(animated.div)`
    padding: 5px;
    width: 38px;
    cursor: pointer;
    position: fixed;
    box-sizing: border-box;
    z-index: 1102;
`;
interface Props {
    onClick: () => void;
    springProps: config.HamburgerAnimation
}
function MenuIcon({  onClick, springProps }: Props) {
    
    const {top, center, bottom, color, right} = springProps
    
    return (
        <HamburgerMenu onClick={onClick} style={{ transform: right }}>
        <animated.svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <TopBar rx="3" style={{transform: top}} />
            <CenterBar rx="3" style={{transform: center}} />
            <BottomBar rx="3" style={{transform: bottom}} />
            
        </animated.svg>
    </HamburgerMenu>
    );
}

export default MenuIcon;
