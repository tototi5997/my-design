import { Button, Modal } from 'my-design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="box"></div>
      <Button onClick={() => setVisible(true)} type="primary">
        open modal
      </Button>
      <Modal
        visible={visible}
        title="Basic Modal"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
