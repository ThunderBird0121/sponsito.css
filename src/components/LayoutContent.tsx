import React from 'react';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  return <section className="content">{children}</section>;
};

export default LayoutContent;
