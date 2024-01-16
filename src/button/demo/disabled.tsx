import { Button } from 'my-design';
import React from 'react';

const Demo = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button disabled>disabled</Button>
      <Button loading disabled />
      <Button type="primary" disabled>
        disabled
      </Button>
    </div>
  );
};

export default Demo;
