import { CodeCopyBtn } from "./CodeCopyBtn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Pre = ({ children }: { children: any }) => (
  <pre className='mb-3 relative box-shadow shadow-2xl'>
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);
