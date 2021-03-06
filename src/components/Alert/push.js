import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Alert from './Alert';

const PusherAlert = ({ temporary, ...otherProps }) => {
  const [open, setIsOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        ReactDOM.unmountComponentAtNode(temporary);
        document.body.removeChild(temporary);
      }, 500);

      return () => clearTimeout(timer);
    }
  } ,[open]);

  return (
    <Alert
      {...otherProps}
      open={open}
      onClose={() => setIsOpen(false)}
    />
  );
};

export default (data) => {
  const temporary = document.createElement('div');
  document.body.appendChild(temporary);

  ReactDOM.render(<PusherAlert {...data} temporary={temporary} />, temporary);
};
