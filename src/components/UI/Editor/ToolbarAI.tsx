import { useState } from 'react';
import { Button } from './UI/primitives/Button';
import { Popover } from './UI/primitives/Popover';
import RobotIcon from './UI/icons/Editor/Robot';
import { Editor } from '@tiptap/react';
import { Input } from './UI/primitives/Input';

type Props = {
  editor: Editor;
};

export function ToolbarAI({ editor }: Props) {
  return (
    <>
      <Popover content={<AIPopover editor={editor} />}>
        <Button variant="subtle" className="toolbarButton" aria-label="AI">
          <RobotIcon style={{ width: '17px' }} />
        </Button>
      </Popover>
    </>
  );
}

type AIPopoverProps = {
  editor: Editor;
};

export function AIPopover({ editor }: AIPopoverProps) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/openai`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'New Article',
            role: message
          })
        }
      );
      const data = await response.json();

      editor.chain().focus().insertContent(data.text).run();
    } catch (error) {
      setError('Failed to send message');

      console.error('Error sending message:', error);
    }

    setIsLoading(false);
  };

  return (
    <div className="toolbarPopover">
      <label className="toolbarPopoverLabel" htmlFor="">
        What type of writer do you want?
      </label>
      <div className="toolbarPopoverBar">
        <Input
          className="toolbarPopoverInput w-full"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <Button
          type="submit"
          variant="primary"
          aria-label="Send"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Send
        </Button>
      </div>
      {isLoading && (
        <div
          className="
    text-center my-3 font-bold
"
        >
          Loading...
        </div>
      )}
      {error && (
        <div
          className="
    text-center my-3 font-bold
"
        >
          {error}
        </div>
      )}
    </div>
  );
}
