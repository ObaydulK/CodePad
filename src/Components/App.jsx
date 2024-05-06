
import { useEffect, useState } from 'react';

import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState(' ');
  const [srcDoc, SetSrcDoc] = useState(' ');

  useEffect(() => {
    const timeout = setTimeout(() => {
      SetSrcDoc(`
              <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
              </html>
              `
      )
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, javascript])








  return (
    < >

      {/* <div className="gird grid-flow-row grid-cols-2 "> */}

        <div className=" pane top-pane ">
          <Editor language="xml" displayName="Html" value={html} onChange={setHtml} />
          <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
          <Editor language="javascript" displayName="Javascript" value={javascript} onChange={setJavascript} />
        </div>

        <div className="pane">
          <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameborder="0" width="100%" height="100%"></iframe>
        </div>
      {/* </div> */}
    </ >
  );
}

export default App;
