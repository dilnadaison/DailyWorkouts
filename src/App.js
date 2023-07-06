import "./App.css";
import CodeSpiliting from "./CodeSpiliting";
import ErrorBoundary from "./ErrorBoundary";
import Form from "./Form";
import HOCButton from "./HOCButton";
import MyPortal from "./Portal";
import Profilers from "./Profiler";
import ParentComponent from "./StateUpParent";

function App() {
  return (
    <>
      <ErrorBoundary>
        <CodeSpiliting />
        <Form />
        <HOCButton />
        <ParentComponent />
        <Profilers />
        <MyPortal />
      </ErrorBoundary>
    </>
  );
}

export default App;
