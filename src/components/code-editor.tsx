import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <MonacoEditor
      language="javascript"
      theme="dark"
      height="500px"
      options={{ wordWrap: 'on', minimap: { enabled: false } }}
    />
  );
};

export default CodeEditor;
