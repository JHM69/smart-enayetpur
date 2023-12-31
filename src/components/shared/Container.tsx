import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto flex h-fit max-w-[1300px] flex-col">{children}</div>
  );
}
