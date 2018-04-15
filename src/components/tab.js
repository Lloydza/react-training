import React from 'react';

const Tab = ({active, onSelect, children}) => (
    <div
      onClick={onSelect}
      style={{
        backgroundColor: active ? 'purple' : 'white'
      }}
    >
      {children}
    </div>
  );

export default Tab;