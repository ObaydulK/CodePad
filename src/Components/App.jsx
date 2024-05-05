
import { useState } from 'react';
import '../App.css';
import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('');

  return (
    < >
      <div className="container w-full">
        <div className="pane top-pane">
          <Editor
            language="xml"
            displayName="Html"
            value={html }
            onChange={setHtml }
          />
          <Editor />
          <Editor />
        </div>
        <div className="pane">
          <iframe title='output' sandbox='allow-scripts' frameborder="0" width='100%' height='100%'></iframe>
        </div>
      </div>
    </ >
  );
}

export default App;
