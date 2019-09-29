import * as React from 'react';
import { config, colors, media, adjustColor } from '../../theme';
import styled from 'styled-components';
import { animated } from 'react-spring';
import SidebarImage from '../../assets/images/profile.jpg';
import { Twitter, Github, Linkedin, Medium } from 'styled-icons/boxicons-logos';
import { Link } from 'react-router-dom';
interface Props {
    itemsTransition: config.ItemsAnimation
}

const Wrapper = styled.nav`
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
    transition: background .3s ease;
    :hover {
        background: #fafafa;
    }
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

const ProfileImage = styled.img`
    max-width: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    vertical-align: middle;
    border-style: none;
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
  /* ::after {
    content: " ";
  position: absolute;
  right: -18px;
  border-top: 15px solid transparent;
  border-right: none;
  border-left: 15px solid ${colors.white};
  border-bottom: 15px solid transparent;
  } */
`;
const Bio = styled.div`
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1rem;
`;


function Navigation({itemsTransition}: Props){
    return (
            <Wrapper>
                            <ProfileSection>
                                <ProfileImage src={SidebarImage} />
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
                                {itemsTransition.map(({ item, key, props }: ItemProps) => (
                                    <Item key={key} style={props}>
                                        <Link to={item.path}>
                                        {item.title}
                                        </Link>
                                    </Item>
                                ))}
                            </ProfileSection>
                        </Wrapper>
    )
}

export default Navigation