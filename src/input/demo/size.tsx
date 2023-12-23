import { Input } from 'my-design';
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <Input size="large" placeholder="large size" />
      <Input placeholder="default size" />
      <Input size="small" placeholder="small size" />
    </div>
  );
};

export default App;
