import { Button } from 'my-design';
import React from 'react';

const Demo = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button loading>loading ...</Button>
      <Button loading />
    </div>
  );
};

export default Demo;
