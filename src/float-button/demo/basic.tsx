import { FloatButton } from 'my-design';
import React from 'react';
import { ReactComponent as Top } from '../../icons/top.svg';

const Demo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
      <FloatButton />
      <FloatButton icon={<Top />} />
    </div>
  );
};

export default Demo;
