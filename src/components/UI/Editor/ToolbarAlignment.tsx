import { Editor } from '@tiptap/react';

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon
} from './UI/icons/Editor';
import { Button } from './UI/primitives/Button';

type Props = {
  editor: Editor;
};

export function ToolbarAlignment({ editor }: Props) {
  return (
    <>
      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        disabled={!editor.can().chain().focus().setTextAlign('left').run()}
        data-active={
          editor.isActive({ textAlign: 'left' }) ? 'is-active' : undefined
        }
        aria-label="Align left"
      >
        <AlignLeftIcon />
      </Button>

      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        disabled={!editor.can().chain().focus().setTextAlign('center').run()}
        data-active={
          editor.isActive({ textAlign: 'center' }) ? 'is-active' : undefined
        }
        aria-label="Align center"
      >
        <AlignCenterIcon />
      </Button>

      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        disabled={!editor.can().chain().focus().setTextAlign('right').run()}
        data-active={
          editor.isActive({ textAlign: 'right' }) ? 'is-active' : undefined
        }
        aria-label="Align right"
      >
        <AlignRightIcon />
      </Button>

      <Button
        variant="subtle"
        className="toolbarButton"
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        disabled={!editor.can().chain().focus().setTextAlign('justify').run()}
        data-active={
          editor.isActive({ textAlign: 'justify' }) ? 'is-active' : undefined
        }
        aria-label="Justify"
      >
        <AlignJustifyIcon />
      </Button>
    </>
  );
}
