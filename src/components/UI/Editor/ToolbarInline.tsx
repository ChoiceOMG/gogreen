import { Editor } from '@tiptap/react';

import { BoldIcon, ItalicIcon, StrikethroughIcon } from './UI/icons/Editor';
import { Button } from './UI/primitives/Button';

type Props = {
  editor: Editor;
};

export function ToolbarInline({ editor }: Props) {
  return (
    <>
      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        data-active={editor.isActive('bold') ? 'is-active' : undefined}
        aria-label="Bold"
      >
        <BoldIcon />
      </Button>

      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        data-active={editor.isActive('italic') ? 'is-active' : undefined}
        aria-label="Italic"
      >
        <ItalicIcon />
      </Button>

      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        data-active={editor.isActive('strike') ? 'is-active' : undefined}
        aria-label="Strikethrough"
      >
        <StrikethroughIcon />
      </Button>
    </>
  );
}
