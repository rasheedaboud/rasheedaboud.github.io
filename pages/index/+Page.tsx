import { Counter } from "./Counter";
import "./index.css";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML. test</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
