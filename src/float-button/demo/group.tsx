import { FloatButton } from 'my-design';
import React from 'react';
import { ReactComponent as Top } from '../../icons/top.svg';

const Demo = () => {
  return (
    <div>
      <FloatButton.Group>
        <FloatButton />
        <FloatButton icon={<Top />} />
      </FloatButton.Group>
    </div>
  );
};

export default Demo;
