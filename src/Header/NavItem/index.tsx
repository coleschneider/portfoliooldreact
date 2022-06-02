import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useResizeObserver } from '../../hooks/useResizeObserver/useResizeObserver';

export type Tab = {
  label: string;
  to: string;
  path: string;
};

const NavListItem = styled(motion.li)`
  /* padding: 0px 10px; */
  text-decoration: none;
  list-style: none;
  position: relative;
  /* width: 100%; */
`;

const NavItemWrapper = styled.div`
  /* padding: 10px; */
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

export const LinkElement = styled(Link)`
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  z-index: 2;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  setActiveTab: (tab: Tab) => void;
  tab: Tab & { isActive: boolean };
};
export const NavItem: React.FunctionComponent<Props> = ({ tab, setActiveTab }) => {
  const { ref, width } = useResizeObserver();

  return (
    <NavListItem onMouseOver={() => setActiveTab(tab)} key={tab.label} ref={ref}>
      <NavItemWrapper style={{ padding: '10px', marginRight: '20px' }}>
        <LinkElement to={tab.to} target={tab.label === 'Resume' ? '_blank' : undefined}>
          {tab.label}
        </LinkElement>
        {tab.isActive ? (
          <Underline style={{ width: `calc(${width}px - 20px)` }} layoutId="underline" />
        ) : null}
      </NavItemWrapper>
    </NavListItem>
  );
};
