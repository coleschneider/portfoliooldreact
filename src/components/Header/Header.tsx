import { useSpring, useTransition, useChain, animated, config as springConfig } from 'react-spring';
import Navigation from './Navigation'
import Hamburger from './Hamburger'
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { media, colors, config } from '../../theme';

const ProfileHeader = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    color: ${colors.primary};
    display: block;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.2;
    margin-top: 0;
    ${media.desktopMin`
        padding-top: 1.5rem;
    `}
`;


const Wrapper = styled(animated.div)`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    color: ${colors.primary};
    z-index: 5;
    overflow-y: auto;
    background: ${colors.lightBlue};
`;

interface Props {
    isMobile?: boolean;
    isOpen: boolean;
    onClick: () => void;
}
interface ItemProps {
    item: string;
    key: number;
    props: any;
}
const items = ['Home', 'About', 'Contact', 'Info'];

// Ha,burger Icon
const openedTransformationConfig = {
    top: 'translate(2px, 7px) rotate(0deg)',
    center: 'translate(2px, 19px) rotate(0deg)',
    bottom: 'translate(2px, 31px) rotate(0deg)',
    right: 'translateX(0px)',
    color: colors.primary, // Add color
};

const closedTransformationConfig = {
    top: 'translate(5px, 32px) rotate(-45deg)',
    center: 'translate(10px, 4px) rotate(45deg)',
    bottom: 'translate(5px, 32px) rotate(-45deg)',
    right: 'translateX(280px)',
    color: colors.primary, // Add color
};

const Header = ({ isMobile, isOpen, onClick }: Props) => {
    const displayHeader = isMobile ? isOpen : true;
    const hamburgerRef = useRef();
    
    
    const hamburgerSpring = useSpring({
        to: isOpen ? closedTransformationConfig : openedTransformationConfig,
        from: isOpen ? closedTransformationConfig : openedTransformationConfig,
        config: springConfig.stiff,
        ref: hamburgerRef,
    });

    const sidebarRef = useRef();
    const transition = useTransition(displayHeader, null, {
        ...config.header,
        config: springConfig.stiff,
        ref: sidebarRef,
    });

    const itemsRef = useRef();

    const trail = useTransition(displayHeader || !isMobile ? items : [], (item) => item, {
        ...config.items,
        ref: itemsRef,
        config: springConfig.wobbly,
    });

    useChain(
        displayHeader ? [hamburgerRef, sidebarRef, itemsRef] : [itemsRef, sidebarRef, hamburgerRef],
        isOpen ? [0, 0, 0.25] : [0.1, 0.6, 0.7],
    );

    return (
        <>
            <Hamburger hamburgerSpring={hamburgerSpring} isMobile={isMobile} onClick={onClick}/>
            {transition.map(({ item, key, props }: ItemProps) =>
                item ? (
                    <Wrapper key={key} style={props}>
                        <ProfileHeader>Cole Schneider</ProfileHeader>
                        <Navigation itemsTransition={trail}/>
                    </Wrapper>
                ) : null,
            )}
        </>
    );
};

export default Header;
