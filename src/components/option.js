import React from 'react';

const Option = ({active, onSelect, children}) => (
    <div
      onClick={onSelect}
      style={{
        width: 100,
        padding: 25,
        cursor: 'pointer',
        textAlign: 'center',
        border: '1px solid black',
        color: active ? 'blue' : 'black'
      }}
    >
      {children}
    </div>
  );

export default Option;