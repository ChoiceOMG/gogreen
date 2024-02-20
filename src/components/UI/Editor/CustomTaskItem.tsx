import TaskItem from '@tiptap/extension-task-item';
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer
} from '@tiptap/react';
import { Checkbox } from './UI/primitives/Checkbox';

// A custom task item that uses the checkbox primitive
export const CustomTaskItem = TaskItem.extend({
  addNodeView: () => {
    return ReactNodeViewRenderer(TiptapCheckbox);
  }
});

function TiptapCheckbox({ node, updateAttributes }: NodeViewProps) {
  return (
    <NodeViewWrapper className="tiptapTaskItem">
      <label className="tiptipTaskItemCheckbox" contentEditable={false}>
        <Checkbox
          initialValue={false}
          checked={node.attrs.checked}
          onValueChange={(checked: boolean) => updateAttributes({ checked })}
        />
      </label>
      <NodeViewContent className="tiptipTaskItemContent" />
    </NodeViewWrapper>
  );
}
