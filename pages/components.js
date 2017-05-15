import React from 'react';
import { Block, Right } from '../components';

export default () => (
  <div>
    <h1>Block</h1>
    <div>
      <Block>Block</Block>
    </div>

    <h1>Block Right</h1>
    <div>
      <Block>Block <Right>Right</Right></Block>
    </div>
  </div>
);
