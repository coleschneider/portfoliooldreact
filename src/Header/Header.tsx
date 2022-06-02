import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { matchPath, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Sitelinks } from '../Sitelinks/Sitelinks';
import Resume from '../assets/Resume.pdf';
import { NavItem, Tab, LinkElement } from './NavItem';
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

const NavList = styled.ul`
  display: flex;
  margin-right: 20px;
`;

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
      const isMatch = matchPath(location.pathname, {
        path: tab.path,
        exact: true,
      });
      return isMatch || tab.label === 'Work';
    });
  };

  React.useEffect(() => {
    const nextTab = getActiveTab();
    setActiveTab(nextTab);
  }, [getActiveTab]);

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
                {tabs.map((currentTab) => (
                  <NavItem
                    key={currentTab.label}
                    tab={currentTab}
                    setActiveTab={(nextTab) => setActiveTab(nextTab)}
                  />
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
