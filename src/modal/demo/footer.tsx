import { Button, Modal } from 'my-design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="box"></div>
      <Button onClick={() => setVisible(true)} type="primary">
        open modal with customized footer
      </Button>
      <Modal
        visible={visible}
        title="Basic Modal"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back">Return</Button>,
          <Button key="submit" type="primary">
            Submit
          </Button>,
          <Button key="link" type="primary">
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
