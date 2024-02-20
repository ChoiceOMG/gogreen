import { Editor } from '@tiptap/react';
import { useState } from 'react';

import { Button } from './UI/primitives/Button';
import { CodeBlockIcon, ImageIcon, YouTubeIcon } from './UI/icons/Editor';
import { Popover } from './UI/primitives/Popover';
import { Input } from './UI/primitives/Input';

type Props = {
  editor: Editor;
  setLoading: (loading: boolean) => void;
};

export function ToolbarMedia({ editor, setLoading }: Props) {
  function addImage(url: string) {
    if (!url.length) {
      return;
    }

    editor.chain().setImage({ src: url }).run();
  }

  function addYouTube(url: string) {
    if (!url.length) {
      return;
    }

    editor.chain().setYoutubeVideo({ src: url }).run();
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          const url = data.file.url;
          editor.chain().setImage({ src: url }).run();
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error uploading the image:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        data-active={editor.isActive('codeBlock') ? 'is-active' : undefined}
        aria-label="Code block"
      >
        <CodeBlockIcon />
      </Button>

      <Popover
        content={
          <MediaPopover
            variant="image"
            onSubmit={addImage}
            handleImageUpload={handleImageUpload}
          />
        }
      >
        <Button
          className="toolbarButton"
          variant="subtle"
          disabled={!editor.can().chain().setImage({ src: '' }).run()}
          data-active={editor.isActive('image') ? 'is-active' : undefined}
          aria-label="Image"
        >
          <ImageIcon />
        </Button>
      </Popover>

      <Popover
        content={<MediaPopover variant="youtube" onSubmit={addYouTube} />}
      >
        <Button
          className="toolbarButton"
          variant="subtle"
          disabled={!editor.can().chain().setImage({ src: '' }).run()}
          data-active={editor.isActive('youtube') ? 'is-active' : undefined}
          aria-label="YouTube"
        >
          <YouTubeIcon />
        </Button>
      </Popover>
    </>
  );
}

type MediaPopoverProps = {
  variant: 'image' | 'youtube';
  onSubmit: (url: string) => void;
  handleImageUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function MediaPopover({
  variant,
  onSubmit,
  handleImageUpload
}: MediaPopoverProps) {
  const [value, setValue] = useState('');

  return (
    <form
      className="toolbarPopover"
      onSubmit={e => {
        e.preventDefault();
        if (variant === 'image' && handleImageUpload) {
          handleImageUpload(
            e as unknown as React.ChangeEvent<HTMLInputElement>
          );
        } else {
          console.log(value);
          onSubmit(value);
        }
      }}
    >
      {variant === 'image' && (
        <>
          <label className="toolbarPopoverLabel" htmlFor="imageUpload">
            Upload image
          </label>
          <div className="toolbarPopoverBar flex flex-col">
            <div className="relative w-full">
              <input
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                type="file"
                id="imageUpload"
                onChange={handleImageUpload}
                accept="image/*"
              />

              <Button className="toolbarPopoverButton w-full flex justify-center items-center">
                Upload from device
              </Button>
            </div>

            <div className="relative border-t-2 border-b-2  border-gray-300 rounded p-1 text-sm text-center">
              OR
            </div>
            <div className="flex justify-between items-center gap-2">
              <Input
                className="toolbarPopoverInput"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Paste image URL or drag & drop"
              />
              <Button
                className="toolbarPopoverButton"
                onClick={() => onSubmit(value)}
              >
                Upload
              </Button>
            </div>
          </div>
        </>
      )}
      {variant === 'youtube' && (
        <>
          <label className="toolbarPopoverLabel" htmlFor="">
            Add YouTube URL
          </label>
          <div className="toolbarPopoverBar">
            <Input
              className="toolbarPopoverInput"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <Button className="toolbarPopoverButton">Add video</Button>
          </div>
        </>
      )}
    </form>
  );
}
