
import './App.css';
import CodeSpiliting from './CodeSpiliting';
import Form from './Form';
import HOCButton from './HOCButton';
import ParentComponent from './StateUpParent';

function App() {
  return (
    <div className="App">
   <CodeSpiliting/>
   <Form/>
    <HOCButton/>
    <ParentComponent/>
    </div>
  );
}

export default App;
