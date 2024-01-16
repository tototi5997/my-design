import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'my-design';
import React from 'react';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <Input type="text" prefix="p" />
    <Input type="text" suffix="f" />
    <br />
    <Input type="text" prefix={<AudioOutlined />} />
    <Input type="text" suffix={<AudioOutlined />} />
  </div>
);
export default App;
