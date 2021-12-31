import React from 'react';

import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { ExternalLink, H1, Paragraph } from '../theme/text';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  padding: 0 36px;
  color: white;
  margin: 24px;
`;

type Props = RouteComponentProps;

export const NotFound: React.FunctionComponent<Props> = ({ location }) => {
  return (
    <Wrapper>
      <TextBlock>
        <H1>Not Found</H1>
        <Paragraph>
          Sorry, but the page "{location.pathname}" requested cannot be found. If you think this
          might be a mistake, please{' '}
          <ExternalLink
            target="_blank"
            href="mailto:colekschneider@gmail.com?Subject=Website%20Inquiry"
            rel="noreferrer"
          >
            contact me.
          </ExternalLink>
        </Paragraph>
      </TextBlock>
    </Wrapper>
  );
};
