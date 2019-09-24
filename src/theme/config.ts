import { colors } from './colors';
import { UseTransitionResult } from 'react-spring';

export const header = {
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
};
export const items = {
  trail: 100,
  unique: true,
  from: {
    opacity: 0,
    transform: 'translateY(50px)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  leave: {
    opacity: 0,
    transform: 'translateY(-25px)'
  }
};

export const hamburger = {
  closedConfig: {
    top: 'translate(2px, 7px) rotate(0deg)',
    center: 'translate(2px, 19px) rotate(0deg)',
    bottom: 'translate(2px, 31px) rotate(0deg)',
    right: 'translateX(0px)',
    color: colors.primary
  },

  openConfig: {
    top: 'translate(5px, 32px) rotate(-45deg)',
    center: 'translate(10px, 4px) rotate(45deg)',
    bottom: 'translate(5px, 32px) rotate(-45deg)',
    right: 'translateX(280px)',
    color: colors.primary
  }
};

export interface HamburgerAnimation {
  top: string;
  bottom: string;
  center: string;
  right: string;
  color: any;
}
export type ItemsAnimation = UseTransitionResult<string, {}>[];
