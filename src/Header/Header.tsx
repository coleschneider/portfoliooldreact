import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { matchPath, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Sitelinks } from '../Sitelinks/Sitelinks';
import Resume from '../assets/Resume.pdf';
import { ReactComponent as BackSvg } from '../assets/Back.svg';

const Wrapper = styled.header`
  color: white;
  display: block;
  height: 67px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  height: 67px;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const Navbar = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 16px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
const NavbarSpacer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 4;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const NavBackground = styled.div<{ isSticky: boolean; scrolledToTop: boolean }>`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const NavOuter = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  padding: 16px;
  position: absolute;
  top: 0;
  width: 100%;
`;
const LinkElement = styled(Link)`
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  z-index: 2;
`;

const NavList = styled.ul`
  display: flex;
  margin-right: 20px;
`;

const NavItem = styled(motion.li)`
  padding: 0px 10px;
  text-decoration: none;
  list-style: none;
  position: relative;
  width: 100%;
`;

const NavItemWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  /* width: calc(100% - 10px); */
  width: 100%;
  height: 1px;
  background: white;
`;

type Tab = {
  label: string;
  to: string;
  path: string;
};

const initialTabs: Tab[] = [
  { label: 'Home', to: '/', path: '/' },
  { label: 'Work', to: '/work', path: '/work' },
  { label: 'Resume', to: Resume, path: '/resume' },
];

export const Header: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = React.useState<Tab | undefined | null>(null);
  const location = useLocation();
  const getActiveTab = () => {
    return initialTabs.find((tab) => {
      const isMatch = location.pathname.sub(tab.path);
      return isMatch;
    });
  };
  React.useEffect(() => {
    const nextTab = getActiveTab();

    setActiveTab(nextTab);
  }, []);

  const tabs = React.useMemo(
    () =>
      initialTabs.map((tab) => ({
        ...tab,
        isActive: tab.label === activeTab?.label,
      })),
    [activeTab]
  );

  const isWorkDetail = matchPath(location.pathname, '/work/:id');
  const displayBack = isWorkDetail && isWorkDetail.isExact;
  return (
    <>
      <Wrapper>
        <Container>
          <Navbar>
            <NavbarSpacer />
            <NavBackground isSticky scrolledToTop />
            <NavOuter>
              <LinkElement to={displayBack ? '/work' : '/'}>
                {displayBack ? <BackSvg /> : 'Cole Schneider'}
              </LinkElement>
            </NavOuter>
            <AnimateSharedLayout>
              <NavList>
                {tabs.map((tab) => (
                  <NavItem onMouseOver={() => setActiveTab(tab)}>
                    <NavItemWrapper>
                      <LinkElement
                        to={tab.to}
                        target={tab.label === 'Resume' ? '_blank' : undefined}
                      >
                        {tab.label}
                      </LinkElement>
                      {tab.isActive ? <Underline layoutId="underline" /> : null}
                    </NavItemWrapper>
                  </NavItem>
                ))}
              </NavList>
            </AnimateSharedLayout>
          </Navbar>
        </Container>
      </Wrapper>
      <Sitelinks />
    </>
  );
};
