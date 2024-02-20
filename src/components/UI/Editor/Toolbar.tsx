import { Editor } from '@tiptap/react';
import { ToolbarInlineAdvanced } from './TextInlineAdvanced';
import { ToolbarAlignment } from './ToolbarAlignment';
import { ToolbarBlock } from './ToolbarBlock';
import { ToolbarCommands } from './ToolbarCommands';
import { ToolbarHeadings } from './ToolbarHeadings';
import { ToolbarInline } from './ToolbarInline';
import { ToolbarMedia } from './ToolbarMedia';
import { useState } from 'react';
import { Loader } from './LoaderEditor';
import { ToolbarAI } from './ToolbarAI';

type Props = {
  editor: Editor;
};

export function Toolbar({ editor }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="toolbar">
      {/*    <div className="toolbarSection">
        <ToolbarCommands editor={editor} />
      </div> */}
      <div className="toolbarSection">
        <ToolbarHeadings editor={editor} />
      </div>
      <div className="toolbarSection">
        <ToolbarInline editor={editor} />
      </div>
      <div className="toolbarSection">
        <ToolbarInlineAdvanced editor={editor} />
      </div>
      <div className="toolbarSection">
        <ToolbarAlignment editor={editor} />
      </div>
      <div className="toolbarSection">
        <ToolbarBlock editor={editor} />
      </div>
      <div className="toolbarSection">
        <ToolbarMedia editor={editor} setLoading={setLoading} />
      </div>
      <div className="toolbarSection">
        <ToolbarAI editor={editor} />
      </div>
      {loading && <Loader />}
    </div>
  );
}
