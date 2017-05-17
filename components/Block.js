import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { contained, uiprops } from '../utils';

const ui = uiprops({
  spacing: ['5px', '10px', '15px', '20px', '40px'],
  themeBg: { light: '#fff', dark: '#444', cloud: '#f8f8f8', orange: '#e3672a' },
  themeColor: { light: '#444', dark: '#fff', cloud: '#444', orange: '#fff' },
});

const Block = ({ href, prefetch, replace, ...props }) => {
  const block = <BlockElement {...props} />;
  return !href ? block : (
    <Link href={href} prefetch={prefetch} replace={replace}>
      {block}
    </Link>
  );
};

const isLink = props => (!!props.href);
const BlockElement = styled.div`
  cursor: ${props => isLink(props) ? 'pointer' : 'default'};
  padding: ${ui('padding', 'spacing', 2)} 0;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  margin-top: -1px;
  line-height: 25px;

  background: ${ui('theme', 'themeBg', 'light')};
  color: ${ui('theme', 'themeColor', 'light')};
  fill: ${ui('theme', 'themeColor', 'light')};

  &:hover {
    opacity: ${props => isLink(props) ? '0.3' : '1'};
  }

  img {
    vertical-align: middle;
  }
`;

export default contained(Block);
