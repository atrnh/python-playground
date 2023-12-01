import { useEffect, useRef } from "react";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { basicSetup } from "codemirror";

// Code Mirror docs: https://codemirror.net/examples/


interface CodeMirrorEditorProps {
  doc?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extensions?: any[];
}

const CodeMirrorEditor = ({ doc, extensions }: CodeMirrorEditorProps) => {
  const containerRef = useRef(null);
  const codeMirrorRef = useRef<EditorView | null>(null); // Fix for Type 'EditorView' is not assignable to type 'null'.

  useEffect(() => {
    if (codeMirrorRef.current === null && containerRef.current !== null) {
      codeMirrorRef.current = new EditorView({
        doc,
        extensions: [
          basicSetup,
          keymap.of([indentWithTab]),
          ...(extensions ?? []),
        ],
        parent: containerRef.current,
      });
    }
  }, [doc, extensions]);

  return <div className="codemirror-wrapper" ref={containerRef}></div>;
};

export default CodeMirrorEditor;
