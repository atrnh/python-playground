import CodeMirrorEditor from "./CodeEditor";

const PlaygroundControls = () => {
  return (
    <div>
      <button>Undo</button>
      <button>Copy</button>
      <button>Run</button>
    </div>
  );
};

interface PlaygroundProps {
  initialCode?: string;
  language?: unknown;
}

const Playground = ({ initialCode, language }: PlaygroundProps) => {
  return (
    <pre>
      <PlaygroundControls />
      <CodeMirrorEditor doc={initialCode} extensions={[language]} />
    </pre>
  );
};

export default Playground;