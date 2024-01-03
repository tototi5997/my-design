import { Button } from 'my-design';
import React from 'react';

const Basic = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button type="default">default</Button>
      <Button type="primary">primary button</Button>
      <Button type="single">ghost</Button>
    </div>
  );
};

export default Basic;
