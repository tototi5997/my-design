import { Input } from 'my-design';
import React from 'react';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <Input type="text" placeholder="text" />
    <Input type="password" placeholder="password" />
    <Input type="checkbox" />
    <Input type="radio" />
    <Input type="number" placeholder="number" />
    <Input type="date" />
    <Input type="email" placeholder="email" />
    <Input type="submit" value="Submit" />
    <Input type="reset" value="Reset" />
  </div>
);
export default App;
