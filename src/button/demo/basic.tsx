import { Button } from 'my-design';
import React from 'react';

const Basic = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button type="default">Default</Button>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Basic;
