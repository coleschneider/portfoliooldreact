import { useSpring, useTransition, useChain, animated, config } from 'react-spring';
import Profile from '../../assets/images/profile.jpg';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { Twitter, Github, Linkedin, Medium } from 'styled-icons/boxicons-logos';
import { media, colors } from '../../theme';

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

const Item = styled(animated.div)`
    color: ${colors.black};
    margin: 10px auto 0;
    padding: 15px 0;
    background-color: ${colors.white};
    display: block;
    position: relative;
    z-index: 0;
    box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
    padding: 1.5em;
`;
const Bio = styled.div`
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1rem;
`;
interface Props {
    isMobile?: boolean;
    isOpen: boolean;
}
interface ItemProps {
    item: string;
    key: number;
    props: any;
}
const items = ['Home', 'About', 'Contact', 'Info'];
const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: auto;
    flex-grow: 1;
`;
const ProfileSection = styled.div`
    padding: 1rem;
    display: block;
    text-align: center;
    ${media.desktop`
        padding-top: 0;
    `}
`;
const SocialList = styled.ul`
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    list-style: none;
    margin-top: 0;
    margin-bottom: 1rem;
`;
const getIcon = (component: React.ComponentType<any>) => styled(component)`
    display: inline-block;
    fill: ${colors.primary};
    font-size: inherit;
    height: 1em;
    width: 1.25em;
    text-align: center;
    overflow: visible;
    vertical-align: -0.125em;
`;
const SocialItem = styled.li`
    margin-right: 0.5rem;
    display: inline-block;
    text-align: center;
    list-style: none;
    text-align: -webkit-match-parent;
`;
const TwitterIcon = getIcon(Twitter);
const GithubIcon = getIcon(Github);
const LinkedinIcon = getIcon(Linkedin);
const MediumIcon = getIcon(Medium);
const IconWrapper = styled.a`
    width: 32px;
    height: 32px;
    padding-top: 5px;
    display: inline-block;
    background: ${colors.white};
    text-align: center;
    border-radius: 50%;
`;

const Bar = styled.hr`
    margin-top: 1rem;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-color: rgba(255, 255, 255, 0.08);
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
`;

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
const HamburgerMenu = styled(animated.div)`
    padding: 5px;
    width: 38px;
    cursor: pointer;
    position: fixed;
    box-sizing: border-box;
    z-index: 1102;
`;
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
const Header = ({ isMobile, isOpen, onClick }: Props) => {
    const displayHeader = isMobile ? isOpen : true;
    const hamburgerRef = useRef();
    const { top, center, bottom, color, right } = useSpring({
        to: isOpen ? closedTransformationConfig : openedTransformationConfig,
        from: isOpen ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
        ref: hamburgerRef,
    });

    const sidebarRef = useRef();
    const transition = useTransition(displayHeader, null, {
        from: {
            transform: 'translateX(-100%)',
        },
        enter: {
            transform: 'translateX(0)',
        },
        leave: {
            transform: 'translateY(-100%)',
        },
        unique: true,
        clamp: true,
        config: config.stiff,
        ref: sidebarRef,
    });

    const itemsRef = useRef();

    const trail = useTransition(displayHeader || !isMobile ? items : [], (item) => item, {
        from: {
            opacity: 0,
            transform: 'translateY(50px)',
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0)',
        },
        leave: {
            opacity: 0,
            transform: 'translateY(-25px)',
        },
        ref: itemsRef,
        config: config.wobbly,
        trail: 100,
        unique: true,
    });

    useChain(
        displayHeader ? [hamburgerRef, sidebarRef, itemsRef] : [itemsRef, sidebarRef, hamburgerRef],
        isOpen ? [0, 0, 0.25] : [0.1, 0.6, 0.7],
    );

    return (
        <>
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
            {transition.map(({ item, key, props }: ItemProps) =>
                item ? (
                    <Wrapper key={key} style={props}>
                        <ProfileHeader>Cole Schneider</ProfileHeader>
                        <Navigation>
                            <ProfileSection>
                                <ProfileImage src={Profile} />
                                <Bio>
                                    Hi, my name is Cole Schneider and I'm a junior software engineer. Welcome to my
                                    website!
                                </Bio>
                                <SocialList>
                                    <SocialItem>
                                        <IconWrapper>
                                            <TwitterIcon />
                                        </IconWrapper>
                                    </SocialItem>
                                    <SocialItem>
                                        <IconWrapper>
                                            <GithubIcon />
                                        </IconWrapper>
                                    </SocialItem>
                                    <SocialItem>
                                        <IconWrapper>
                                            <LinkedinIcon />
                                        </IconWrapper>
                                    </SocialItem>
                                    <SocialItem>
                                        <IconWrapper>
                                            <MediumIcon />
                                        </IconWrapper>
                                    </SocialItem>
                                </SocialList>
                                <Bar />
                                {trail.map(({ item, key, props }: ItemProps) => (
                                    <Item key={key} style={props}>
                                        {item}
                                    </Item>
                                ))}
                            </ProfileSection>
                        </Navigation>
                    </Wrapper>
                ) : null,
            )}
        </>
    );
};

export default Header;
