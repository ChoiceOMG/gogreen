import { Editor } from '@tiptap/react';

import { Button } from './UI/primitives/Button';
import { RedoIcon, UndoIcon } from './UI/icons/Editor';

type Props = {
  editor: Editor;
};

export function ToolbarCommands({ editor }: Props) {
  return (
    <>
      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().undo().run()}
        disabled={!editor.can().undo()}
        aria-label="Undo"
      >
        <UndoIcon />
      </Button>
      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().redo().run()}
        disabled={!editor.can().redo()} // Corrected line
        aria-label="Redo"
      >
        <RedoIcon />
      </Button>
    </>
  );
}
