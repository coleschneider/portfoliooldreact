import styled, { css } from 'styled-components';

import { ReactComponent as AngellistIcon } from '../assets/social/Angellist.svg';
import { ReactComponent as GithubIcon } from '../assets/social/Github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/social/LinkedIn.svg';
import { ReactComponent as TwitterIcon } from '../assets/social/Twitter.svg';

const iconStyles = css`
  height: 20px;
  width: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  fill: inherit;
`;
export const siteSocialLinks = [
  {
    href: 'https://github.com/coleschneider',
    target: '_blank',
    icon: styled(GithubIcon)`
      margin-top: 40px;
      ${iconStyles}
    `,
  },
  {
    href: 'https://www.linkedin.com/in/coleschneider/',
    target: '_blank',
    icon: styled(LinkedInIcon)`
      ${iconStyles}
    `,
  },
  {
    href: 'https://angel.co/cole-schneider',
    target: '_blank',
    icon: styled(AngellistIcon)`
      ${iconStyles}
    `,
  },
  {
    href: 'https://twitter.com/colekschneider',
    target: '_blank',
    icon: styled(TwitterIcon)`
      ${iconStyles}
      margin-bottom: 40px;
    `,
  },
];
