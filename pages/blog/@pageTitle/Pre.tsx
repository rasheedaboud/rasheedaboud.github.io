import { CodeCopyBtn } from "./CodeCopyBtn";

export const Pre = ({ children }: { children: any }) => (
  <pre className='mb-3 relative box-shadow shadow-2xl'>
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);
