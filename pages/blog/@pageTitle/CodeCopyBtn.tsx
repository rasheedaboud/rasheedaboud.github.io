import { useState } from "react";

export const CodeCopyBtn = ({ children }: { children: React.ReactElement }) => {
  const [copyOk, setCopyOk] = useState(false);
  const icon = copyOk ? "fa-square-check" : "fa-copy";
  const copy = copyOk ? "Copied" : "Copy";
  const handleClick = () => {
    navigator.clipboard.writeText(children?.props?.children);

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div className='absolute -top-1  right-7 h-10 w-10 m-5'>
      <button className={"btn btn-xs btn-active"} onClick={handleClick}>
        <span className=''>
          <i className={`fa-solid ${icon}`}> {copy}</i>
        </span>
      </button>
    </div>
  );
};
