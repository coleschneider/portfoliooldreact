import * as React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ReactComponent as LeftArrow } from '../../assets/icons/LeftArrow.svg'
import { media } from '../../theme/Grid/config'
import NavLinks from './NavLinks'

const ArrowIcon = styled.div`
  display: inline-block;
  fill: currentcolor;
  height: 30px;
  cursor: pointer;
  width: 30px;
  user-select: none;
  :after {
    content: '';
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: block;
    position: relative;
    bottom: 15px;
    left: 50%;
    background-color: #000;
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s cubic-bezier(0.1, 0.29, 0, 1), opacity 0.5s cubic-bezier(0.1, 0.29, 0, 1);
  }
  :hover {
    :after {
      opacity: 0.1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const HeadroomWrapper = styled.div`
  height: 67px;
  position: fixed;
  z-index: 20;
  width: 100%;
  top: 0;
  display: block;
`

const HeaderPinned = styled.div`
  z-index: 15;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8vh;
`

const Navbar = styled.div`
  z-index: 16;
  font: 600 12px/1 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const NavBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px hsla(0, 0%, 50%, 0.12);
  z-index: -1;
`
const NavOuter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NameContainer = styled.div`
  margin: 0 auto;
  display: block;
  max-width: 100%;
  width: 100%;
  ${media.xs`
  max-width: 1280px;
  width: 90%;  
  `}
`
const Name = styled.div`
  z-index: 2;
  line-height: 16.5px;
  position: relative;
  text-decoration: none;
  display: none;
  cursor: pointer;
  ${media.sm`
    display: block;
  `}
`
interface Props {
  isModal: boolean
  onUnselectCard: () => void
}

function Header({ isModal, onUnselectCard }: Props) {
  const headRef = React.useRef<HTMLDivElement>(null)
  // const [modeType, setMode] = React.useState('static')
  const { replace } = useHistory()

  const handleGoBack = () => {
    onUnselectCard()
    replace({
      pathname: '/mywork',
      state: {},
    })
  }
  const handleGoHome = () => {
    replace({
      pathname: '/',
      state: {},
    })
  }
  return React.useMemo(() => {
    return (
      <div data-testid="header-testId">
        <div>
          <HeadroomWrapper ref={headRef}>
            <HeaderPinned>
              <Navbar>
                <NavBackground />
                <NavOuter>
                  <NameContainer>
                    {isModal ? (
                      <ArrowIcon onClick={handleGoBack}>
                        <LeftArrow />
                      </ArrowIcon>
                    ) : (
                      <Name onClick={handleGoHome}>COLE SCHNEIDER</Name>
                    )}
                  </NameContainer>
                </NavOuter>
                <NavLinks />
              </Navbar>
            </HeaderPinned>
          </HeadroomWrapper>
        </div>
      </div>
    )
  }, [isModal])
}

export default Header
