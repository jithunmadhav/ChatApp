import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="a3972b31-b58d-4676-9e80-ad59d18ec5da"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatPage;
