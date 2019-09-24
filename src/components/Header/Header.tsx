import * as React from 'react';
import {animated, useSpring, useChain, useTransition, config as springConfig, ReactSpringHook} from 'react-spring';
import styled, {css} from 'styled-components'
import { colors, config, media } from '../../theme';
import Hamburger from './Hamburger';
import Navigation from './Navigation';
import SidebarImage from '../../assets/images/profile.jpg';

const ProfileHeader = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
    display: block;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.2;
    margin-top: 0;
    ${media.desktopMin`
        padding-top: 1.5rem;
    `}
`;

const ProfileImage = styled.img`
    max-width: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    vertical-align: middle;
    border-style: none;
`;
const Wrapper = styled(animated.div)`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    color: #fff;
    z-index: 5;
    overflow-y: auto;
    background: ${colors.primary};
`;

interface Props {
    isMobile: boolean;
    isOpen: boolean;
    toggleSidebar: () => void;
}
function Header({isMobile, isOpen, toggleSidebar}: Props){
    const displayHeader = !isMobile ? isOpen : true;
    const wrapperRef = React.useRef() as React.RefObject<ReactSpringHook>
    const itemsRef = React.useRef()as React.RefObject<ReactSpringHook>
    const hamburgerRef = React.useRef()as React.RefObject<ReactSpringHook>;
    
// @ts-ignore
const wrapperTransition = useTransition(!isMobile, null, {
    ...config.header,
    unique: true,
    clamp: true,
    config: springConfig.stiff,
    // @ts-ignore
    ref: wrapperRef,
})
// @ts-ignore
const itemsTransition = useTransition(!isMobile, null, {
    ...config.items,
    unique: true,
    // @ts-ignore
    trail: true,
    config: springConfig.wobbly,
    // @ts-ignore
    ref: itemsRef,
})
// @ts-ignore
const hamburgerProps = useSpring({
    to: isOpen ? config.hamburger.openConfig : config.hamburger.closedConfig,
    from: isOpen ? config.hamburger.openConfig : config.hamburger.closedConfig,
    config: springConfig.stiff,
    // @ts-ignore
    ref: hamburgerRef,
}) as config.HamburgerAnimation
useChain(
    displayHeader ? [hamburgerRef, wrapperRef, itemsRef] : [itemsRef, wrapperRef, hamburgerRef],
    isOpen ? [0, 0, 0.25] : [0.1, 0.6, 0.7],
);
    return (
        <>
        <Hamburger onClick={toggleSidebar} springProps={hamburgerProps}/>
        {
            // @ts-ignore
            wrapperTransition.map(({item, key, props}) => item ? (
                <Wrapper key={key} style={props}>
                    <ProfileHeader>Cole Schneider</ProfileHeader>
                    <Navigation itemsTransition={itemsTransition} />
                </Wrapper>
            ) : null)
        }
        </>
    )
}
export default Header