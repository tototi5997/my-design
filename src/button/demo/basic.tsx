import { Button } from 'my-design';
import React from 'react';
import { ReactComponent as Question } from '../../icons/question.svg';

const Basic = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button type="default">default</Button>
      <Button type="primary">primary button</Button>
      <Button type="single">ghost</Button>
      <Button icon={<Question />}>icon button</Button>
    </div>
  );
};

export default Basic;
