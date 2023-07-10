import "./App.css";
import CodeSpiliting from "./CodeSpiliting";
import ErrorBoundary from "./ErrorBoundary";
import Form from "./Form";
import HOCButton from "./HOCButton";
import MyPortal from "./Portal";
import Profilers from "./Profiler";
import Message from "./PropTypeChecking";
import ParentComponent from "./StateUpParent";
import Greeting from "./StaticTypeFlow";
import Person from "./StaticTypeTypeScript";

import MyComponent from "./WithoutES6";
import WithoutJSX from "./WithoutJSX";

function App() {
  return (
    <>
      <ErrorBoundary>
        <CodeSpiliting />
        <Form />
        <HOCButton />
        <ParentComponent />
        <Profilers />
        <WithoutJSX />
        <MyComponent />
        <Person name="Shilpa" age="32"/>
        <Greeting name="Anitha" age="38"/>
        <Message name="Afreena" experience="10"/>
        <MyPortal />
      </ErrorBoundary>
    </>
  );
}

export default App;
