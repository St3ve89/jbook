import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import TextEditor from './components/text-editor/text-editor';

const App = () => {
  return <TextEditor />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
