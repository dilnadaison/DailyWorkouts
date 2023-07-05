
import './App.css';
import CodeSpiliting from './CodeSpiliting';
import ErrorBoundary from './ErrorBoundary';
import Form from './Form';
import HOCButton from './HOCButton';
import ParentComponent from './StateUpParent';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
   <CodeSpiliting/>
   <Form/>
    <HOCButton/>
    <ParentComponent/>
    </ErrorBoundary>
    </div>
  );
}

export default App;
