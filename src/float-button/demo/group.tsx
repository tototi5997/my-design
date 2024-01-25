import { FloatButton } from 'my-design';
import React from 'react';
import { ReactComponent as Top } from '../../icons/top.svg';

const Demo = () => {
  return (
    <div
      style={{
        height: 180,
        padding: 4,
        outline: '1px solid rgba(0, 0, 0, .2)',
        position: 'relative',
      }}
    >
      <FloatButton.Group>
        <FloatButton />
        <FloatButton icon={<Top />} />
      </FloatButton.Group>
    </div>
  );
};

export default Demo;
