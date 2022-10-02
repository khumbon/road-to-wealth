import * as React from 'react';

interface HeadingProps {
  children: string | React.ReactElement;
}
export const Heading = ({ children }: HeadingProps) => {
  return <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">{children}</h2>;
};
