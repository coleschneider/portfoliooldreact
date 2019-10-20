import * as React from 'react'
import { useRouteMatch, RouteProps, Link } from 'react-router-dom'
import styled from 'styled-components'

interface NavLinkProps {
  path: string
  display: string
}

const TextLink = styled(({ matches, ...restProps }) => <Link {...restProps} />)`
  z-index: 2;
  margin: 0 30px;
  cursor: pointer;
  line-height: 2.5em;
  text-decoration: none;
  color: #0f3351;
  ::before {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    top: 18px;
    z-index: 7;
    left: 0;
    background-color: #0f3351;
    transform: scaleX(0);
    transition: all 0.65s cubic-bezier(0.7, 0.3, 0, 1);
    transform-origin: left;
    will-change: transform;
  }

  ::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    z-index: 8;
    left: 0;
    background-color: #0f3351;
    transform: ${({ matches }) => (matches ? 'scale(1)' : 'scale(0)')};
    transition: all 0.65s cubic-bezier(0.7, 0.3, 0, 1);
    transform-origin: right;
  }
  &:hover {
    &::after {
      transform: scale(1);
    }
  }
`

const navPaths: NavLinkProps[] = [
  { path: '/', display: 'HOME' },
  { path: '/mywork', display: 'WORK' },
  { path: '/resume', display: 'RESUME' }
]

function NavLink({ path, display }: NavLinkProps) {
  const isMatch = useRouteMatch(path)

  return (
    <TextLink to={path} matches={isMatch && isMatch.isExact}>
      {display}
    </TextLink>
  )
}
function NavLinks(props: RouteProps) {
  return navPaths.map((navProps) => <NavLink key={navProps.display} {...navProps} />)
}

export default NavLinks
