import * as React from 'react';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import { colors } from '../../theme';

const Bar = styled(animated.span)`
    width: 30px;
    margin: 0 auto;
    background: #333333;
    height: 1px;
    display: block;
`;
const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
    right: 'translateX(0px)',
    color: colors.primary, // Add color
};

const closedTransformationConfig = {
    top: 'translate(5, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(5, 32) rotate(-45)',
    right: 'translateX(280px)',
    color: colors.primary, // Add color
};
const HamburgerMenu = styled(animated.div)`
    padding: 5px;
    width: 38px;
    cursor: pointer;
    position: fixed;
    box-sizing: border-box;
    z-index: 1102;
`;
function MenuIcon({ isOpen, onClick }) {
    const { top, center, bottom, color, right } = useSpring({
        to: isOpen ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    });

    return (
        <HamburgerMenu onClick={onClick} style={{ transform: right }}>
            <animated.svg width="44" height="44" viewBox="0 0 44 44" fill={color} xmlns="http://www.w3.org/2000/svg">
                <animated.rect width="40" height="3" rx="3" transform={top} />
                <animated.rect width="40" height="3" rx="3" transform={center} />
                <animated.rect width="40" height="3" rx="3" transform={bottom} />
            </animated.svg>
        </HamburgerMenu>
    );
}

export default MenuIcon;
